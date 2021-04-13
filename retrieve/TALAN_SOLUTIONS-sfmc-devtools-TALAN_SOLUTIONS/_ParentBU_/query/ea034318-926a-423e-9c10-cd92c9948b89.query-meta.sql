SELECT
    l.Id AS Id,
    l.ConvertedAccountId AS ConvertedAccountId,
    l.ConvertedContactId AS ConvertedContactId,
    l.ConvertedDate AS ConvertedDate,
    l.ConvertedOpportunityId AS ConvertedOpportunityId,
    l.CreatedDate AS CreatedDate,
    l.DandbCompanyId AS DandbCompanyId,
    l.Email AS Email,
    l.FirstName AS FirstName,
    l.HasOptedOutOfEmail AS HasOptedOutOfEmail,
    l.IndividualId AS IndividualId,
    l.LastModifiedById AS LastModifiedById,
    l.LastName AS LastName,
    l.LeadSource AS LeadSource,
    l.MasterRecordId AS MasterRecordId,
    l.Name AS Name,
    l.OwnerId AS OwnerId,
    l.Salutation AS Salutation,
    l.Status AS STATUS,
    l.Website AS Website
FROM
    Lead_Salesforce l