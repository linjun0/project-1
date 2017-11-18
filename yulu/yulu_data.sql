DROP DATABASE IF EXISTS yulu;
CREATE DATABASE yulu CHARSET=UTF8;
USE yulu;
CREATE TABLE floor1(
  f1id INT PRIMARY KEY AUTO_INCREMENT,
  imgl VARCHAR(128),
  headl VARCHAR(32),
  contl VARCHAR(128),
  imgr VARCHAR(128),
  headr VARCHAR(32),
  contr VARCHAR(128)
);
INSERT INTO floor1 VALUES
(NULL,"img/f1l1.jpg","格瑞斯国际高中","提供一个安全而愉快的教育与学习环境，激发孩子对世界的好奇心。","img/f1r1.jpg","北京高中国际部","隶属于中国幼教国际化旗舰品牌——伊顿国际教育集团"),
(NULL,"img/f1l2.jpg","黑利伯瑞国际高中","澳洲分校，澳大利亚本校指派外教教学，不出国的澳洲学校。   ","img/f1r2.jpg","力迈中美国际学校","中美双学籍，70%外教授课，多种班型确保留学成功"),
(NULL,"img/f1l3.jpg","北京海淀区尚丽外国语学校","低成本留学最佳选择，超高性价比学校。","img/f1r3.jpg","北京中加","20年办学经验，加拿大政府支持，直接对接加拿大优质大学！"),
(NULL,"img/f1l4.jpg","北京君城双语国际学校","提供一个安全而愉快的教育与学习环境，激发孩子对世界的好奇心。","img/f1r4.jpg","常春藤国际学校幼儿园","隶属于中国幼教国际化旗舰品牌——伊顿国际教育集团");

CREATE TABLE floor2(
  f2id INT PRIMARY KEY AUTO_INCREMENT,
  imgl VARCHAR(128),
  headl VARCHAR(32),
  contl VARCHAR(128),
  imgr VARCHAR(128),
  headr VARCHAR(32),
  contr VARCHAR(128),
  title VARCHAR(32)
);
INSERT INTO floor2 VALUES
(NULL,"img/f2l1.jpg","2017年高考志愿填报指南","为您提供高考志愿填报指南，高考如何选大学、如何选专业等技巧","img/f2r1.jpg","高考历年分数线查询","为考生提供2017年高考成绩查询时间及入口,高考历年分数线等信息","院校排行榜"),
(NULL,"img/f2l2.jpg","2017年重点大学招生简章","全国高校招生网为考生及家长推荐全国各个省份重点院校","img/f2r2.jpg","2017年高考热门专业汇总","为考生和家长推荐高考生热报的专业及院校，为大家解读热门专业","专业排行榜"),
(NULL,"img/f2l3.jpg","2017年人大成考培训","为考生提供中国人民大学成人高考面授课程，成考辅导","img/f2r3.jpg","2017年成人高考培训班","为您提供2017成人高考培训,成人高考网络培训等辅导课程","课程排行榜"),
(NULL,"img/f2l4.jpg","北京交通大学远程教育","北京交通大学是教育部直属的重点大学，也是教育部批准进行现代远程","img/f2r4.jpg","中国地质大学远程教育","中国地质大学（北京）是教育部直属的独立开展现代远程教育试点院校","院校排行榜");

CREATE TABLE f2_title(
  f2tid INT PRIMARY KEY AUTO_INCREMENT,
  ftid INT,
  f2p VARCHAR(64),
  f2num INT,
  f2nid INT
);
INSERT INTO f2_title VALUES
(NULL,1,"沈阳航空航天大学",658,1),
(NULL,2,"哈尔滨工程大学",622,1),
(NULL,3,"大连海事大学",596,1),
(NULL,4,"太原理工大学",516,1),
(NULL,5,"浙江外国语大学",489,1),
(NULL,6,"广东财经大学",411,1),
(NULL,7,"四川外国语大学",238,1),
(NULL,8,"北京印刷",298,1),
(NULL,1,"空乘专业",658,2),
(NULL,2,"高铁乘务专业",622,2),
(NULL,3,"ui设计专业",596,2),
(NULL,4,"影视表演专业",516,2),
(NULL,5,"飞机维修专业",489,2),
(NULL,6,"护理专业",411,2),
(NULL,7,"广播电视编导",238,2),
(NULL,8,"学前教育",298,2),
(NULL,1,"成考名校强化班",1285,3),
(NULL,2,"成考vip培训",1192,3),
(NULL,3,"人大成考专升本",1008,3),
(NULL,4,"人大成考高起点",889,3),
(NULL,5,"人大高升本",489,3),
(NULL,6,"人大英语三级",411,3),
(NULL,7,"成考冲刺集训班",238,3),
(NULL,8,"人大会计培训",298,3),
(NULL,1,"中国传媒大学",658,4),
(NULL,2,"北京科技大学",622,4),
(NULL,3,"北京外国语大学",596,4),
(NULL,4,"对外经济贸易大学",516,4),
(NULL,5,"北京语言大学",489,4),
(NULL,6,"中国石油大学",411,4),
(NULL,7,"东北师范大学",238,4),
(NULL,8,"东北大学",298,4);


