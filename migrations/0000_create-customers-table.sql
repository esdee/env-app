-- Migration number: 0000 	 2023-02-27T22:23:02.571Z
DROP TABLE IF EXISTS customers;

CREATE TABLE customers (
  customerID INT,
  companyName TEXT,
  contactName TEXT,
  PRIMARY KEY (`CustomerID`)
);
