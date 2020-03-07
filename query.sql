create table users(
	UserID int NOT NULL,
	FirstName varchar(255) NOT NULL,
    MiddleName varchar(255),
    LastName varchar(255) NOT NULL,
    Email varchar(255) NOT NULL,
    BirthDate date NOT NULL,
    UNIQUE (UserID)
);

ALTER TABLE users
ADD PRIMARY KEY (UserID);

create table dailyStats(
	UserID int,
    CurrentDate date NOT NULL,
    StepsWalked int,
    
    FOREIGN KEY (UserID) REFERENCES user(UserID),
    PRIMARY KEY (UserID, CurrentDate)
);