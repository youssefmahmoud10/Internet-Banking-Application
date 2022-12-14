CREATE DATABASE INTERNET_BANKING;
USE INTERNET_BANKING;

CREATE TABLE USER
(
NID VARCHAR(14) PRIMARY KEY,
NAME VARCHAR(50),
BIRTH_DATE DATE,
ADDRESS VARCHAR(50),
MARITAL_STATUS VARCHAR(10),
MOBILE_NUMBER VARCHAR(11),
EMAIL VARCHAR(50),
NATIONALITY VARCHAR(50)
);

CREATE TABLE ACCOUNT
(
ACCOUNT_NUMBER VARCHAR(10) PRIMARY KEY,
CURRENCY VARCHAR(20),
TYPE VARCHAR(20),
BALANCE DOUBLE,
USER_NID VARCHAR(14),
HAS_IB VARCHAR(1),
PASSWORD VARCHAR(50)
);

ALTER TABLE ACCOUNT
ADD CONSTRAINT USER_ID_FK FOREIGN KEY (USER_NID) REFERENCES USER (NID);

CREATE TABLE TRANSACTION
(
TRANSACTION_ID INT PRIMARY KEY,
AMOUNT DOUBLE,
DATE DATE,
TRANSACTION_TYPE VARCHAR(20),
RECEIVER VARCHAR(10),
ACCOUNT_NUMBER VARCHAR(14)
);

ALTER TABLE TRANSACTION
ADD CONSTRAINT ACCOUNT_NUMBER_FK FOREIGN KEY (ACCOUNT_NUMBER) REFERENCES ACCOUNT (ACCOUNT_NUMBER);

SELECT * FROM USER;
SELECT * FROM ACCOUNT;
SELECT * FROM TRANSACTION;

INSERT INTO ACCOUNT
VALUES ("21", "foreign", "current", 7000, "124","y", "12345");

INSERT INTO ACCOUNT
VALUES ("9", "local", "current", 7000, "123","n", null);

INSERT INTO TRANSACTION	(AMOUNT, DATE, TRANSACTION_TYPE, RECEIVER, ACCOUNT_NUMBER)
VALUES (3000, "2022-11-27", "transfer", "15151", "14");

INSERT INTO USER
VALUES ("124", "Yousseffff", "2000-10-12", "ALEX", "SINGLE", "01005600618", "YOU@GMAIL", "EGTYPT");