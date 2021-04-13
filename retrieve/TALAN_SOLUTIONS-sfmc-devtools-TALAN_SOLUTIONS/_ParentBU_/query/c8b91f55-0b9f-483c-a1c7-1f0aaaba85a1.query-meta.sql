SELECT
    Data1.FirstName,
    Data1.[E-mail] AS EmailAddress,
    Data1.[Optin email] AS STATUS,
    Data1.[Region Main Store] AS Region_Main_Store,
    Data1.[Main Store] AS Region_Main,
    Data1.ID_Segment
FROM
    Test_Data_Extension AS Data1
    INNER JOIN [_Subscribers] AS allsub WITH (nolock) ON Data1.[E-mail] = allsub.SubscriberKey
    INNER JOIN [_EnterpriseAttribute] AS ent WITH (nolock) ON allsub.SubscriberID = ent._SubscriberID