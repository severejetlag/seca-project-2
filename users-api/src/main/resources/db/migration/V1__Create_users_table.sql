create table USERS (
    ID serial PRIMARY KEY,
    USER_NAME varchar(100) NOT NULL,
    FIRST_NAME varchar(100) NOT NULL,
    LAST_NAME varchar(100) NOT NULL,
    PASSWORD varchar(100) NOT NULL,
    CITY varchar(100) NOT NULL
);

create table POSTS (
    ID serial PRIMARY KEY,
    TITLE varchar NOT NULL,
    POST varchar NOT NULL,
    USER_ID integer REFERENCES USERS (ID)
)