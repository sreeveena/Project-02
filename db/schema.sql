CREATE DATABASE events_db;
USE events_db;

CREATE TABLE users (
  id int AUTO_INCREMENT,
  email varchar(30) NOT NULL,
  password varchar(100),
  provider varchar(30) NOT NULL,
  PRIMARY KEY(id)
);


CREATE TABLE cards (
  id int AUTO_INCREMENT,
  user_id int,
  cardnum varchar(20),
  expiry varchar(10),
  cvv int,
  zipcode varchar(10)
)