try {
    updateSFCustomObject('CustomObject__c', 'a0O4K000001VM0UUAW', 'CustomField__c', 'Skchhh');
} catch (e) {
    if (debug) {
        Write('<br>updateSFObject error: ' + Stringify(e));
    }
}
function updateSFCustomObject(objectName, id, customField__c, customFieldvalue) {
    var results = 0;
    var SFIDPattern = new RegExp('^[a-zA-Z0-9]{18}');
    if (SFIDPattern.test(id) == true) {
        var sf_fieldUpdateString = [];
        sf_fieldUpdateString.push(customField__c);
        sf_fieldUpdateString.push(customFieldvalue);
        var updateSFObject = '';
        updateSFObject += '%%[ ';
        updateSFObject += 'set @salesforceFields = UpdateSingleSalesforceObject(objectName,';
        updateSFObject += "'" + id + "','" + sf_fieldUpdateString.join("','") + "'";
        updateSFObject += ') ';
        updateSFObject += 'output(concat(@salesforceFields)) ';
        updateSFObject += ']%%';
        try {
            results = Platform.Function.TreatAsContent(updateSFObject);
        } catch (e) {
            if (debug) {
                Write('<br>updateSFObject error: ' + Stringify(e));
            }
        }
    }
    return results;
}
