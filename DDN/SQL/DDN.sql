/*
Navicat MySQL Data Transfer

Source Server         : Private
Source Server Version : 50703
Source Host           : localhost:3306
Source Database       : ddn

Target Server Type    : MYSQL
Target Server Version : 50703
File Encoding         : 65001

Date: 2015-10-11 20:39:02
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `base_dictionaries`
-- ----------------------------
DROP TABLE IF EXISTS `base_dictionaries`;
CREATE TABLE `base_dictionaries` (
  `ID` varchar(36) NOT NULL,
  `BELONG_TYPE` varchar(50) DEFAULT NULL,
  `BELONG_TYPE_NAME` varchar(50) DEFAULT NULL,
  `TYPE_CODE` varchar(50) DEFAULT NULL,
  `TYPE_NAME` varchar(50) DEFAULT NULL,
  `ALLOW_FIXED` varchar(1) DEFAULT NULL,
  `SORT_NUM` int(3) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of base_dictionaries
-- ----------------------------
INSERT INTO `base_dictionaries` VALUES ('216fbbcb558f4446af2916530c4a24bf', 'houseType', '户型', 'three_two', '三室两厅', '0', '1');
INSERT INTO `base_dictionaries` VALUES ('c22444e329814f2cae68ca1620c30f69', 'houseType', '户型', 'two_two', '两室两厅', '0', '2');

-- ----------------------------
-- Table structure for `base_user`
-- ----------------------------
DROP TABLE IF EXISTS `base_user`;
CREATE TABLE `base_user` (
  `id` varchar(36) NOT NULL,
  `USER_NAME` varchar(50) DEFAULT NULL,
  `NICK_NAME` varchar(50) DEFAULT NULL,
  `TEL_PHONE` varchar(12) DEFAULT NULL,
  `EMAIL` varchar(50) DEFAULT NULL,
  `USER_PWD` varchar(36) DEFAULT NULL,
  `INVITATION_CODE` varchar(6) DEFAULT NULL,
  `CREATE_TIME` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of base_user
-- ----------------------------
INSERT INTO `base_user` VALUES ('918fc07b316e44f5a9e1017deb8b91bb', 'admin', null, null, null, 'E10ADC3949BA59ABBE56E057F20F883E', null, null);

-- ----------------------------
-- Table structure for `contacts_message`
-- ----------------------------
DROP TABLE IF EXISTS `contacts_message`;
CREATE TABLE `contacts_message` (
  `id` varchar(36) NOT NULL,
  `NAME` varchar(16) DEFAULT NULL,
  `EMAIL` varchar(50) DEFAULT NULL,
  `TELPHONE` varchar(11) DEFAULT NULL,
  `CONTENT` varchar(200) DEFAULT NULL,
  `CREATE_TIME` varchar(25) DEFAULT NULL,
  `MESSAGE_FROM` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of contacts_message
-- ----------------------------

-- ----------------------------
-- Table structure for `ddn_encyclopedias`
-- ----------------------------
DROP TABLE IF EXISTS `ddn_encyclopedias`;
CREATE TABLE `ddn_encyclopedias` (
  `id` varchar(36) NOT NULL,
  `QUESTION` varchar(200) DEFAULT NULL,
  `ANSWER` text,
  `CREATE_TIME` varchar(25) DEFAULT NULL,
  `LAST_UPDATE_TIME` varchar(25) DEFAULT NULL,
  `CREATE_USER_ID` varchar(36) DEFAULT NULL,
  `KEY_WORD`      varchar(200) DEFAULT null,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ddn_encyclopedias
-- ----------------------------

-- ----------------------------
-- Table structure for `ddn_example`
-- ----------------------------
DROP TABLE IF EXISTS `ddn_example`;
CREATE TABLE `ddn_example` (
  `ID` varchar(36) NOT NULL,
  `COVER_URL` varchar(200) DEFAULT NULL,
  `NAME` varchar(50) DEFAULT NULL,
  `DESCRIBES` varchar(1000) DEFAULT NULL,
  `STYLE_ID` varchar(36) DEFAULT NULL,
  `PRICE_ID` varchar(36) DEFAULT NULL,
  `HOUSE_TYPE_ID` varchar(36) DEFAULT NULL,
  `CREATE_TIME` varchar(20) DEFAULT NULL,
  `CREATE_USER_ID` varchar(36) DEFAULT NULL,
  `KEYWORD` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ddn_example
-- ----------------------------

-- ----------------------------
-- Table structure for `example_message`
-- ----------------------------
DROP TABLE IF EXISTS `example_message`;
CREATE TABLE `example_message` (
  `ID` varchar(36) NOT NULL,
  `TITLE` varchar(50) DEFAULT NULL,
  `CONTENT` varchar(200) DEFAULT NULL,
  `CREATE_TIME` varchar(25) DEFAULT NULL,
  `EXAMPLE_ID` varchar(36) DEFAULT NULL,
  `FROM_USER_ID` char(10) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of example_message
-- ----------------------------

-- ----------------------------
-- Table structure for `example_pictures`
-- ----------------------------
DROP TABLE IF EXISTS `example_pictures`;
CREATE TABLE `example_pictures` (
  `ID` varchar(36) DEFAULT NULL,
  `TYPE_CODE` varchar(50) DEFAULT NULL,
  `PICTURE_URL` varchar(200) DEFAULT NULL,
  `SORT_NUM` int(11) DEFAULT NULL,
  `EXAMPLE_ID` varchar(36) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of example_pictures
-- ----------------------------
