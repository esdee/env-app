DROP TABLE IF EXISTS customers;

CREATE TABLE customers (
  customerID INT,
  companyName TEXT,
  contactName TEXT,
  PRIMARY KEY (`CustomerID`)
);

INSERT INTO customers (
  customerID, companyName, contactName
)
VALUES
  (1, 'Alfreds Futterkiste', 'Maria Anders'),
  (4, 'Around the Horn', 'Thomas Hardy'),
  (11, 'Bs Beverages', 'Victoria Ashworth'),
  (13, 'Bs Beverages', 'Random Name')
;
