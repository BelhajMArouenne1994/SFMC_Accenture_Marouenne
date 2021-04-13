var mid = '100004109'; //MID of target BU -- OPTIONAL Default is current BU of script/page
var deCustKey = '83EE15D1-DC00-4813-89FA-9B3ABE178FA7'; //your DE's CustomerKey / External Key
var prox = new Script.Util.WSProxy(); //creates proxy

var subArr = []; //To hold batch of subscriber objects
var moreData = true; //To validate if more data in Retrieve
var reqID = null; //Used with Batch Retrieve to more to next batch

while (moreData) {
    var moreData = false;

    var deReturn = retrieveDERows(mid, deCustKey, reqID);

    var moreData = deReturn.HasMoreRows;
    var reqID = deReturn.RequestID;

    for (var a = 0; a < deReturn.Results.length; a++) {
        var results = deReturn.Results[a];

        for (var i = 0; i < results.Properties.length; i++) {
            var name = results.Properties[i].Name;
            var value = results.Properties[i].Value;

            if (name == 'Id') {
                var id = value;
            }
            if (name == 'Status') {
                var status = value;
            }
        }

        updateSFContact(id, status);
    }
}

function retrieveDERows(mid, deCustKey, reqID) {
    if (mid) {
        prox.setClientId({ ID: mid }); //Impersonates the BU
    }
    var cols = ['Id', 'Status']; //Columns you want retrieved

    if (reqID == null) {
        var desc = prox.retrieve('DataExtensionObject[' + deCustKey + ']', cols); //executes the proxy call
    } else {
        desc = prox.getNextBatch('DataExtensionObject[' + deCustKey + ']', reqID);
    }

    return desc;
}

function updateSFContact(id, status) {
    var results = 0;

    var SFIDPattern = new RegExp('^[a-zA-Z0-9]{18}');

    if (SFIDPattern.test(id) == true) {
        var sf_fieldUpdateString = [];
        sf_fieldUpdateString.push('HasOptedOutOfEmail');
        sf_fieldUpdateString.push(1);
        sf_fieldUpdateString.push('Bounce_From_MC__c');
        sf_fieldUpdateString.push(1);

        var updateSFObject = '';
        updateSFObject += '%%[ ';
        updateSFObject += "set @salesforceFields = UpdateSingleSalesforceObject('Contact',";
        updateSFObject += "'" + id + "','" + sf_fieldUpdateString.join("','") + "'";
        updateSFObject += ') ';
        updateSFObject += 'output(concat(@salesforceFields)) ';
        updateSFObject += ']%%';

        try {
            results = Platform.Function.TreatAsContent(updateSFObject);
        } catch (e) {
            if (debug) {
                Write('<br>updateSFHasOptedOutOfEmailFlag error: ' + Stringify(e));
            }
        }
    }

    return results;
}
