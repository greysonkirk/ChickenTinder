CREATE TABLE userAuth
(
	id int NOT NULL AUTO_INCREMENT,
	username varchar(255) NOT NULL,
    first_name varchar(255) NOT NULL,
    last_name varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    password NVARCHAR(18) not null,
	PRIMARY KEY (id)
);


CREATE TABLE userProfile
(
	id int NOT NULL AUTO_INCREMENT,
	username varchar(255) NOT NULL,
    zipCode int not null,
    partnerID int,
    choices int,
	PRIMARY KEY (id)
);

