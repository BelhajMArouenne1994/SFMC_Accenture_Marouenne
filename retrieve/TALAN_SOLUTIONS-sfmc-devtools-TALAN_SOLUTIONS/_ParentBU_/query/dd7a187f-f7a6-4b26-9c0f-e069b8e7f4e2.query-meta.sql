SELECT
    SubscriberKey AS Id,
    STATUS
FROM
    _Subscribers
WHERE
    (
        STATUS = 'held'
        OR STATUS = 'bounced'
    )
    AND SubscriberKey LIKE '003%'