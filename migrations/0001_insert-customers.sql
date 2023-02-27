-- Migration number: 0001 	 2023-02-27T22:23:42.366Z
INSERT INTO customers (
  customerID, companyName, contactName
)
VALUES
  (1, 'Alfreds Futterkiste', 'Maria Anders'),
  (4, 'Around the Horn', 'Thomas Hardy'),
  (11, 'Bs Beverages', 'Victoria Ashworth'),
  (13, 'Bs Beverages', 'Random Name')
;
