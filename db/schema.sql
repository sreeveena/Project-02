CREATE DATABASE events_db;
USE events_db;

CREATE TABLE users (
  id int AUTO_INCREMENT,
  email varchar(30) NOT NULL,
  password varchar(30) NOT NULL,
  PRIMARY KEY(id)
);