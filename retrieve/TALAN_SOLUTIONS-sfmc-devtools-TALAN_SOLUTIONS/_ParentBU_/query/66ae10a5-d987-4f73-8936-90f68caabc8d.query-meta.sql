SELECT
    IdClient,
    CASE
        WHEN LastOpenText = 'NULL' THEN NULL
        ELSE LastOpenText
    END AS LastOpenDate,
    CASE
        WHEN LastSendText = 'NULL' THEN NULL
        ELSE LastSendText
    END AS LastSendDate,
    CASE
        WHEN LastClickText = 'NULL' THEN NULL
        ELSE LastClickText
    END AS LastClickDate,
    CASE
        WHEN FirstOptoutText = 'NULL' THEN NULL
        ELSE FirstOptoutText
    END AS FirstOptout,
    CASE
        WHEN FirstBouncesText = 'NULL' THEN NULL
        ELSE FirstBouncesText
    END AS FirstBounces
FROM
    Cheetah_DE