SET NAMES UTF8;
DROP DATABASE IF EXISTS nba;
CREATE DATABASE nba CHARSET UTF8;
use nba;
CREATE TABLE teamInfo(
tid INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(32),
lm BOOLEAN,
area VARCHAR(32),
wins INT,
losts INT
);
INSERT INTO teamInfo VALUES(NULL,'骑士',1,'中央分区',51,31);
INSERT INTO teamInfo VALUES(NULL,'步行者',1,'中央分区',42,40);
INSERT INTO teamInfo VALUES(NULL,'活塞',1,'中央分区',37,45);
INSERT INTO teamInfo VALUES(NULL,'公牛',1,'中央分区',41,41);
INSERT INTO teamInfo VALUES(NULL,'雄鹿',1,'中央分区',42,40);
INSERT INTO teamInfo VALUES(NULL,'凯尔特人',1,'大西洋分区',53,31);
INSERT INTO teamInfo VALUES(NULL,'猛龙',1,'大西洋分区',51,31);
INSERT INTO teamInfo VALUES(NULL,'尼克斯',1,'大西洋分区',31,51);
INSERT INTO teamInfo VALUES(NULL,'76人',1,'大西洋分区',28,54);
INSERT INTO teamInfo VALUES(NULL,'篮网',1,'大西洋分区',20,62);
INSERT INTO teamInfo VALUES(NULL,'热火',1,'东南分区',49,33);
INSERT INTO teamInfo VALUES(NULL,'奇才',1,'东南分区',43,39);
INSERT INTO teamInfo VALUES(NULL,'老鹰',1,'东南分区',41,41);
INSERT INTO teamInfo VALUES(NULL,'黄蜂',1,'东南分区',36,46);
INSERT INTO teamInfo VALUES(NULL,'魔术',1,'东南分区',29,53);
INSERT INTO teamInfo VALUES(NULL,'掘金',0,'西北分区',40,42);
INSERT INTO teamInfo VALUES(NULL,'爵士',0,'西北分区',51,31);
INSERT INTO teamInfo VALUES(NULL,'森林狼',0,'西北分区',31,51);
INSERT INTO teamInfo VALUES(NULL,'雷霆',0,'西北分区',47,35);
INSERT INTO teamInfo VALUES(NULL,'开拓者',0,'西北分区',41,41);
INSERT INTO teamInfo VALUES(NULL,'太阳',0,'太平洋分区',24,58);
INSERT INTO teamInfo VALUES(NULL,'湖人',0,'太平洋分区',32,50);
INSERT INTO teamInfo VALUES(NULL,'国王',0,'太平洋分区',26,56);
INSERT INTO teamInfo VALUES(NULL,'勇士',0,'太平洋分区',67,15);
INSERT INTO teamInfo VALUES(NULL,'快船',0,'太平洋分区',51,31);
INSERT INTO teamInfo VALUES(NULL,'马刺',0,'西南分区',61,21);
INSERT INTO teamInfo VALUES(NULL,'火箭',0,'西南分区',55,27);
INSERT INTO teamInfo VALUES(NULL,'小牛',0,'西南分区',33,49);
INSERT INTO teamInfo VALUES(NULL,'鹈鹕',0,'西南分区',34,48);
INSERT INTO teamInfo VALUES(NULL,'灰熊',0,'西南分区',43,39);