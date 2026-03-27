CREATE TYPE account_type AS ENUM ('Client', 'Admin');

CREATE TABLE classification (
  classification_id SERIAL PRIMARY KEY,
  classification_name VARCHAR(50) NOT NULL
);

CREATE TABLE inventory (
  inv_id SERIAL PRIMARY KEY,
  inv_make VARCHAR(50),
  inv_model VARCHAR(50),
  inv_description TEXT,
  inv_image VARCHAR(100),
  inv_thumbnail VARCHAR(100),
  classification_id INT REFERENCES classification(classification_id)

);

CREATE TABLE account (
  account_id SERIAL PRIMARY KEY,
  account_firstname VARCHAR(50),
  account_lastname VARCHAR(50),
  account_email VARCHAR(100) UNIQUE NOT NULL,
  account_password VARCHAR(100) NOT NULL,
  account_type account_type DEFAULT 'Client'
);


INSERT INTO classification (classification_name) VALUES ('SUV'), ('Sport'), ('Truck');

UPDATE inventory
SET inv_description = REPLACE(inv_description, 'small interiors', 'a huge interior')
WHERE inv_make = 'GM' AND inv_model = 'Hummer';

UPDATE inventory
SET inv_image = REPLACE(inv_image, '/images/', '/images/vehicles/'),
    inv_thumbnail = REPLACE(inv_thumbnail, '/images/', '/images/vehicles/');
