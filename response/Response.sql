SET NAMES UTF8;
DROP DATABASE IF EXISTS rs;
CREATE DATABASE rs CHARSET=UTF8;
USE rs;

CREATE TABLE rs_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32) UNIQUE,
  upwd VARCHAR(32),
  email VARCHAR(64) UNIQUE,
  phone VARCHAR(64) UNIQUE,
  gender VARCHAR(32) 
);
INSERT INTO rs_user VALUES
(NULL,"tom","123456","1661565425@qq.com","18156250232","1"),
(NULL,"tim","123456","1300980925@qq.com","18156253465","0"),
(NULL,"jerry","123456","2071428526@qq.com","18156253024","1"),
(NULL,"mary","123456","2612456023@qq.com","18156256492","0");




