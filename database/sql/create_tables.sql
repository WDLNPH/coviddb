DROP TABLE IF EXISTS `Diagnostic`;
DROP TABLE IF EXISTS `GroupZonePersonPivot`;
DROP TABLE IF EXISTS `Carer`;
DROP TABLE IF EXISTS `GroupZone`;
DROP TABLE IF EXISTS `PublicHealthWorker`;
DROP TABLE IF EXISTS `PublicHealthCenter`;
DROP TABLE IF EXISTS `Position`;
DROP TABLE IF EXISTS `Administrator`;
DROP TABLE IF EXISTS `RegionPostalPivot`;
DROP TABLE IF EXISTS `ProvinceCityPivot`;
DROP TABLE IF EXISTS `PostalCityPivot`;


DROP TABLE IF EXISTS `FollowUpFormSymptomPivot`;
DROP TABLE IF EXISTS `FollowUpForm`;
DROP TABLE IF EXISTS `Symptom`;

DROP TABLE IF EXISTS `Messages`;
DROP TABLE IF EXISTS `Patient`;
DROP TABLE IF EXISTS `Person`;
DROP TABLE IF EXISTS `PostalCode`;
DROP TABLE IF EXISTS `City`;
DROP TABLE IF EXISTS `Region`;
DROP TABLE IF EXISTS `Province`;
DROP TABLE IF EXISTS `Alert`;
DROP TABLE IF EXISTS `Recommendation`;


CREATE TABLE `Recommendation`
(
    `recommendation_id` INT(16) UNSIGNED NOT NULL AUTO_INCREMENT,
    `recommendation` TEXT NOT NULL,
    PRIMARY KEY (`recommendation_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `Alert`
(
    `alert_id` INT(16) UNSIGNED NOT NULL AUTO_INCREMENT,
    `alert_info`  VARCHAR(255) NOT NULL,
    PRIMARY KEY (`alert_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `Province`
(
    `province_code` VARCHAR(2) NOT NULL,
    `province` VARCHAR(64) NOT NULL,
    PRIMARY KEY (`province_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `Region`
(
    `region_id` INT(16) UNSIGNED NOT NULL AUTO_INCREMENT,
    `region_name` VARCHAR(255) NOT NULL,
    `alert_id`  INT(16) UNSIGNED NOT NULL,
    `province_code` VARCHAR(2) NOT NULL,
    PRIMARY KEY (`region_id`),
    KEY `alert_id` (`alert_id`),
    KEY `province_code` (`province_code`),
    CONSTRAINT `region_al_fk_1` FOREIGN KEY (`alert_id`) REFERENCES `Alert` (`alert_id`) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `pcpiv_province_code_fk_idx` FOREIGN KEY (`province_code`) REFERENCES `Province` (`province_code`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `City`
(
    `city_id` INT(16) UNSIGNED NOT NULL AUTO_INCREMENT,
    `city` VARCHAR(255) NOT NULL,
    `region_id` INT(16) UNSIGNED NOT NULL,
    PRIMARY KEY (`city_id`),
    CONSTRAINT `pcpiv1_region_id_fk_idx` FOREIGN KEY (`region_id`) REFERENCES `Region` (`region_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `PostalCode`
(
    `postal_code_id` VARCHAR(3) NOT NULL,
    `city_id` INT(16) UNSIGNED NOT NULL,
    KEY `postal_code_id` (`postal_code_id`),
    KEY `city_id` (`city_id`),
    PRIMARY KEY (`postal_code_id`),
    CONSTRAINT `pcpiv1_city_id_fk_idx` FOREIGN KEY (`city_id`) REFERENCES `City` (`city_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `Person`
(
    `person_id`   INT(16) UNSIGNED NOT NULL AUTO_INCREMENT,
    `medicare`    VARCHAR(16) NOT NULL,
    `password`    VARCHAR(64) NOT NULL,
    `api_token`   VARCHAR(80) DEFAULT NULL,
    `first_name`  VARCHAR(32) NOT NULL,
    `last_name`   VARCHAR(32) NOT NULL,
    `address`     VARCHAR(128) NOT NULL,
    `postal_code` VARCHAR(8) NOT NULL,
    `postal_code_id`  VARCHAR(3) NOT NULL,
    `citizenship` VARCHAR(32) NOT NULL,
    `email`       VARCHAR(64) NOT NULL,
    `phone`       VARCHAR(32) NOT NULL,
    `dob`         DATE        NOT NULL,
    PRIMARY KEY (`person_id`),
    KEY         `postal_code_id` (`postal_code_id`),
    CONSTRAINT `person_pc_id_fk_idx` FOREIGN KEY (`postal_code_id`) REFERENCES `PostalCode` (`postal_code_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `PublicHealthCenter`
(
    `health_center_id` INT(16) UNSIGNED NOT NULL AUTO_INCREMENT,
    `name`             VARCHAR(128) NOT NULL DEFAULT '',
    `phone`            VARCHAR(32)  NOT NULL,
    `address`          VARCHAR(128)  NOT NULL,
    `postal_code` VARCHAR(8) NOT NULL,
    `postal_code_id`   VARCHAR(255) NOT NULL,
    `type`             VARCHAR(32)  NOT NULL,
    `website`          VARCHAR(256) NOT NULL,
    `method`           VARCHAR(16) NOT NULL,
    `drive_thru`       TINYINT(1) DEFAULT 0,
    PRIMARY KEY (`health_center_id`),
    KEY                `postal_code_id` (`postal_code_id`),
    CONSTRAINT `publichealth_postal_id_fk_idx` FOREIGN KEY (`postal_code_id`) REFERENCES `PostalCode` (`postal_code_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `Position`
(
    `position_id` INT(16) UNSIGNED NOT NULL AUTO_INCREMENT,
    `position` VARCHAR(64) NOT NULL,
    PRIMARY KEY (`position_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `PublicHealthWorker`
(
    `health_worker_id` INT(16) UNSIGNED NOT NULL AUTO_INCREMENT,
    `person_id`        INT(16) UNSIGNED NOT NULL,
    `position_id`      INT(16) UNSIGNED NOT NULL,
    `schedule`         VARCHAR(256) DEFAULT NULL,
    `health_center_id` INT(16) UNSIGNED NOT NULL,
    PRIMARY KEY (`health_worker_id`),
    KEY                `person_id` (`person_id`),
    KEY                `health_center_id` (`health_center_id`),
    KEY                `position_id` (`position_id`),
    CONSTRAINT `publichealthworker_person_id_fk_idx` FOREIGN KEY (`person_id`) REFERENCES `Person` (`person_id`) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `publichealthworker_hc_id_fk_idx` FOREIGN KEY (`health_center_id`) REFERENCES `PublicHealthCenter` (`health_center_id`) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `publichealthworker_pos_id_fk_idx` FOREIGN KEY (`position_id`) REFERENCES `Position` (`position_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE `Administrator`
(
    `admin_id` INT(16) UNSIGNED NOT NULL AUTO_INCREMENT,
    `person_id`INT(16) UNSIGNED NOT NULL,
    PRIMARY KEY (`admin_id`),
    KEY                `person_id` (`person_id`),
    CONSTRAINT `administrator_ibfk_1` FOREIGN KEY (`person_id`) REFERENCES `Person` (`person_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `Patient` (
  `patient_id` int(16) unsigned NOT NULL AUTO_INCREMENT,
  `person_id` int(16) unsigned NOT NULL,
  PRIMARY KEY (`patient_id`),
  KEY `person_id` (`person_id`),
  CONSTRAINT `patient_person_id_fk_idx` FOREIGN KEY (`person_id`) REFERENCES `Person` (`person_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `GroupZone`
(
    `group_id` INT(16) UNSIGNED NOT NULL AUTO_INCREMENT,
    `name`     VARCHAR(32) NOT NULL,
    `activity` VARCHAR(32) NOT NULL,
    PRIMARY KEY (`group_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `GroupZonePersonPivot` (
  `group_id` int(16) unsigned NOT NULL,
  `person_id` int(16) unsigned NOT NULL,
  KEY `group_id` (`group_id`),
  KEY `person_id` (`person_id`),
  CONSTRAINT `groupzonepersonpivot_group_id_fk_idx` FOREIGN KEY (`group_id`) REFERENCES `GroupZone` (`group_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `groupzonepersonpivot_person_id_fk_idx` FOREIGN KEY (`person_id`) REFERENCES `Person` (`person_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `Carer`
(
    `child_id`   INT(16) UNSIGNED NOT NULL,
    `parent_id` INT(16) UNSIGNED NOT NULL,
    KEY `child_id` (`child_id`),
    KEY `parent_id` (`parent_id`),
    CONSTRAINT `carer_child_id_fk_idx` FOREIGN KEY (`child_id`) REFERENCES `Person` (`person_id`) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `carer_parent_id_fk_idx` FOREIGN KEY (`parent_id`) REFERENCES `Person` (`person_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `Diagnostic` (
  `diagnostic_id` int(32) unsigned NOT NULL AUTO_INCREMENT,
  `patient_id` int(16) unsigned NOT NULL,
  `diagnostic_date` datetime NOT NULL,
  `health_worker_id` int(16) unsigned NOT NULL,
  `health_center_id` int(16) unsigned NOT NULL,
  `result` tinyint(1) DEFAULT 0,
  PRIMARY KEY (`diagnostic_id`),
  KEY `patient_id` (`patient_id`),
  KEY `health_worker_id` (`health_worker_id`),
  KEY `health_center_id` (`health_center_id`),
  CONSTRAINT `diagnostic_hc_id_fk_idx` FOREIGN KEY (`health_center_id`) REFERENCES `PublicHealthCenter` (`health_center_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `diagnostic_hw_id_fk_idx` FOREIGN KEY (`health_worker_id`) REFERENCES `PublicHealthWorker` (`health_worker_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `diagnostic_patient_id_fk_idx` FOREIGN KEY (`patient_id`) REFERENCES `Patient` (`patient_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `FollowUpForm`
(
    `form_id` INT(16) UNSIGNED NOT NULL AUTO_INCREMENT,
    `filled_by` INT(16) UNSIGNED NOT NULL,
    `patient_id` INT(16) UNSIGNED NOT NULL,
    `created_at` datetime NOT NULL,
    PRIMARY KEY (`form_id`),
    KEY `filled_by` (`filled_by`),
    KEY `patient_id` (`patient_id`),
    CONSTRAINT `followupform_filled_by_fk_idx` FOREIGN KEY (`filled_by`) REFERENCES `Person` (`person_id`) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `followupform_patient_id_fk_idx` FOREIGN KEY (`patient_id`) REFERENCES `Patient` (`patient_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `Symptom`
(
    `symptom_id` INT(16) UNSIGNED NOT NULL AUTO_INCREMENT,
    `symptom`  VARCHAR(32)  NOT NULL,
    PRIMARY KEY (`symptom_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `FollowUpFormSymptomPivot`
(
    `symptom_id` INT(16) UNSIGNED NOT NULL,
    `form_id`   INT(16) UNSIGNED NOT NULL,
    KEY `symptom_id` (`symptom_id`),
    KEY `form_id` (`form_id`),
    CONSTRAINT `followupformpiv_symptom_id_id_fk_idx` FOREIGN KEY (`symptom_id`) REFERENCES `Symptom` (`symptom_id`) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `followupformpiv_form_id_id_fk_idx` FOREIGN KEY (`form_id`) REFERENCES `FollowUpForm` (`form_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `Messages`
(
    `msg_id` INT(16) UNSIGNED NOT NULL AUTO_INCREMENT,
    `region_id`  INT(16) UNSIGNED DEFAULT NULL,
    `msg_date`  DATETIME NOT NULL,
    `alert_id`  INT(16) UNSIGNED DEFAULT NULL,
    `person_id`  INT(16) UNSIGNED NOT NULL,
    `message`   TEXT(1024) NOT NULL,
    PRIMARY KEY (`msg_id`),
    KEY `region_id` (`region_id`),
    KEY `alert_id` (`alert_id`),
    KEY `person_id` (`person_id`),
    CONSTRAINT `message_region_id_id_fk_idx` FOREIGN KEY (`region_id`) REFERENCES `Region` (`region_id`) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `message_alert_id_id_fk_idx` FOREIGN KEY (`alert_id`) REFERENCES `Alert` (`alert_id`) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `message_person_id_id_fk_idx` FOREIGN KEY (`person_id`) REFERENCES `Person` (`person_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

