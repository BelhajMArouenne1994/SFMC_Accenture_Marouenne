## Master_PreferenceCenter_CustomerPreferences

**Description:** Master data extension for users preferences and unsubscribes

**Folder:** Data Extensions/

**Fields in table:** 5

**Sendable:** Yes (`Email_Address` to `_SubscriberKey`)

**Testable:** Yes

| Name | FieldType | MaxLength | IsPrimaryKey | IsNullable | DefaultValue |
| --- | --- | --- | --- | --- | --- |
| Email_Address | EmailAddress | 254 | - | - |  |
| Created_Date | Date |  | - | - | GetDate() |
| Mailable | Text | 50 | - | - |  |
| Preferences | Text | 4000 | - | - |  |
| Last_Modified_Date | Date |  | - | - |  |
