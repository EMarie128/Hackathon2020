create table users(
	UserID int NOT NULL,
	FirstName varchar(255) NOT NULL,
    MiddleName varchar(255),
    LastName varchar(255) NOT NULL,
    Email varchar(255) NOT NULL,
    BirthDate date NOT NULL,
    UserPassword varchar(50) NOT NULL,
    Height int,
    Weight int,
    PRIMARY KEY (UserID)
);

create table dailyStats(
	UserID int,
    CurrentDate date NOT NULL,
    StepsWalked int,
    FOREIGN KEY (UserID) REFERENCES users(UserID),
    PRIMARY KEY (UserID, CurrentDate)
);

ALTER TABLE dailyStats
ADD CaloriesIn int;