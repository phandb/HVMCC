/*
Name: usp_DisplayAllUsers
Description: display all records and columns in hvmcclogin table
Author: Dalton Phan	
Modification Log: CHANGE 


Description						Date					Changed By
Created procedure				12/28/2015				Dalton Phan
*/
DELIMITER //
CREATE PROCEDURE `usp_DisplayAllUsers`(

@user_name varchar(25),
@user_password varchar(25),
@user_type varchar(25),
@first_name varchar(25),
@last_name varchar(25)
)

BEGIN
SELECT * FROM hvmcclogin
END//
