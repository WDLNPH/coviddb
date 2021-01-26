
CREATE TABLE Person(
serialID     	INT,
firstName    	VARCHAR(30),
lastName     	VARCHAR(30),
dob    	  	DATE,
medicare     	INT,
phone  	  	CHAR(16),
address	  	VARCHAR(50),
city   	  	VARCHAR(30),
province     	VARCHAR(15),
postalCode   	CHAR(6),
citizenship 	VARCHAR(20),
email  	  	VARCHAR(30)
);
CREATE TABLE Parental(
serialID        	INT,
firstName       	VARCHAR(30),
lastName        	VARCHAR(30),
parent1SID       	INT,
parent2SID  	 	INT,
legalGuardianSID 	INT,
childSID        	INT
);
 
CREATE TABLE GroupZone(
serialID    	INT,
groupZone   	VARCHAR(30),
city        	VARCHAR(30),
activity    	VARCHAR(30)
);
