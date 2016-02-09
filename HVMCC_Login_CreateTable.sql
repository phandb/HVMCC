use hvmcc; 
drop table hvmcclogin;
create table hvmcclogin(
id int NOT NULL auto_increment key,

user_name varchar(25) NOT NULL,
user_password varchar(25) NOT NULL,
user_type varchar(25) NOT NULL,
first_name varchar(25) NULL,
last_name varchar(25) NULL
);


INSERT  into hvmcclogin ( user_name , user_password, user_type, first_name, last_name)
VALUES ( 'admin',  'password',  'admin', 'Dalton','Phan');

INSERT  into hvmcclogin ( user_name , user_password, user_type, first_name, last_name)
VALUES ( 'phandb72',  'Natalie07',  'admin', 'Dalton','Phan');
INSERT  into hvmcclogin ( user_name , user_password, user_type, first_name, last_name)
VALUES ( 'dphan',  'Thaihoa92',  'guest', 'Dalton','Phan');
