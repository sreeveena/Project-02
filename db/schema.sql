CREATE DATABASE events_db;
USE events_db;

CREATE TABLE users (
  id int AUTO_INCREMENT,
  email varchar(30) NOT NULL,
  password varchar(100),
  provider varchar(30) NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE registered_events (
  id int AUTO_INCREMENT,
  guid varchar(100) NOT NULL,
  name varchar(100) NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE user_registrations (
  user_id int NOT NULL,
  event_id int NOT NULL,
  reg_date DATE NOT NULL,
  PRIMARY KEY(id)
);


insert into registered_events values('73f583d0-05cf-4031-af74-78738c755976','');
insert into user_registrations values