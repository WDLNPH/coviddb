DROP TABLE IF EXISTS `Recommendation`;
DROP TABLE IF EXISTS `Diagnostic`;
DROP TABLE IF EXISTS `GroupZonePersonPivot`;
DROP TABLE IF EXISTS `Carer`;
DROP TABLE IF EXISTS `Patient`;
DROP TABLE IF EXISTS `GroupZone`;
DROP TABLE IF EXISTS `PublicHealthWorker`;
DROP TABLE IF EXISTS `PublicHealthCenter`;
DROP TABLE IF EXISTS `Position`;
DROP TABLE IF EXISTS `Administrator`;
DROP TABLE IF EXISTS `Region`;
DROP TABLE IF EXISTS `RegionPostalPivot`;
DROP TABLE IF EXISTS `ProvinceCityPivot`;
DROP TABLE IF EXISTS `Province`;
DROP TABLE IF EXISTS `City`;
DROP TABLE IF EXISTS `PostalCityPivot`;
DROP TABLE IF EXISTS `PostalCode`;
DROP TABLE IF EXISTS `Forms`;
DROP TABLE IF EXISTS `FormsSymptomsPivot`;
DROP TABLE IF EXISTS `MainSymptoms`;
DROP TABLE IF EXISTS `Symptoms`;
DROP TABLE IF EXISTS `Alert`;
DROP TABLE IF EXISTS `Messages`;
DROP TABLE IF EXISTS `Person`;

CREATE TABLE `Person`
(
    `person_id`   INT(16) UNSIGNED NOT NULL AUTO_INCREMENT,
    `medicare`    VARCHAR(16) NOT NULL,
    `password`    VARCHAR(64) NOT NULL,
    `first_name`  VARCHAR(32) NOT NULL,
    `last_name`   VARCHAR(32) NOT NULL,
    `address`     VARCHAR(128) NOT NULL,
    `postal_code_id` INT(16)  NOT NULL,
    `citizenship` VARCHAR(32) NOT NULL,
    `email`       VARCHAR(64) DEFAULT NULL,
    `phone`       VARCHAR(32) NOT NULL,
    `dob`         DATE        NOT NULL,
    `region_id`   INT(16)       NOT NULL,
    PRIMARY KEY (`person_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `PublicHealthCenter`
(
    `health_center_id` INT(16) UNSIGNED NOT NULL AUTO_INCREMENT,
    `name`             VARCHAR(128) NOT NULL DEFAULT '',
    `phone`            VARCHAR(32)  NOT NULL,
    `address`          VARCHAR(128)  NOT NULL, 
    `postal_code_id`   VARCHAR(8)   NOT NULL,
    `type`             VARCHAR(32)  NOT NULL,
    `website`          VARCHAR(256) NOT NULL,
    `region_id`        INT(16) NOT NULL,
    `method`           VARCHAR(16) NOT NULL,
    `drive-thru`       BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (`health_center_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `PublicHealthWorker`
(
    `health_worker_id` INT(16) UNSIGNED NOT NULL AUTO_INCREMENT,
    `person_id`        INT(16) UNSIGNED NOT NULL,
    `position_id`      INT(16) NOT NULL,
    `schedule`         VARCHAR(256) DEFAULT NULL,
    `health_center_id` INT(16) UNSIGNED NOT NULL,
    PRIMARY KEY (`health_worker_id`),
    KEY                `person_id` (`person_id`),
    KEY                `health_center_id` (`health_center_id`),
    CONSTRAINT `publichealthworker_person_id_fk_idx` FOREIGN KEY (`person_id`) REFERENCES `Person` (`person_id`) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `publichealthworker_hc_id_fk_idx` FOREIGN KEY (`health_center_id`) REFERENCES `PublicHealthCenter` (`health_center_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `Position`
(
    `position_id` INT(16) UNSIGNED NOT NULL AUTO_INCREMENT,
    `position` VARCHAR(64) NOT NULL,
    PRIMARY KEY (`position_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `Administrator`
(
    `admin_id` INT(16) UNSIGNED NOT NULL AUTO_INCREMENT,
    `person_id`INT(16) UNSIGNED NOT NULL,
    PRIMARY KEY (`admin_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `Region`
(
    `region_id` INT(16) UNSIGNED NOT NULL AUTO_INCREMENT,
    `alert_id`INT(16) UNSIGNED NOT NULL,
    PRIMARY KEY (`region_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `RegionPostalPivot`
(
    `region_id` INT(16) UNSIGNED NOT NULL ,
    `postal_code_id` INT(16) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `PostalCode`
(
    `postal_code_id` INT(16) UNSIGNED NOT NULL AUTO_INCREMENT,
    `postal_code` VARCHAR(8) NOT NULL,
    PRIMARY KEY (`postal_code_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `PostalCityPivot`
(
    `postal_code_id` INT(16) UNSIGNED NOT NULL ,
    `city_id` INT(16) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `City`
(
    `city_id` INT(16) UNSIGNED NOT NULL AUTO_INCREMENT,
    `city` VARCHAR(64) NOT NULL,
    PRIMARY KEY (`city_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `ProvinceCityPivot`
(
    `city_id` INT(16) UNSIGNED NOT NULL ,
    `province_id` INT(16) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `Province`
(
    `province_id` INT(16) UNSIGNED NOT NULL AUTO_INCREMENT,
    `province` VARCHAR(64) NOT NULL,
    PRIMARY KEY (`province_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `GroupZone`
(
    `group_id` INT(16) UNSIGNED NOT NULL AUTO_INCREMENT,
    `name`     VARCHAR(32) NOT NULL,
    `activity` VARCHAR(32) NOT NULL,
    PRIMARY KEY (`group_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `Patient`
(
    `patient_id` INT(16) UNSIGNED NOT NULL AUTO_INCREMENT,
    `person_id`  INT(16) UNSIGNED NOT NULL,
    PRIMARY KEY (`patient_id`),
    KEY          `person_id` (`person_id`),
    CONSTRAINT `patient_person_id_fk_idx` FOREIGN KEY (`person_id`) REFERENCES `Person` (`person_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `GroupZonePersonPivot`
(
    `group_id`  INT(16) UNSIGNED NOT NULL,
    `person_id` INT(16) UNSIGNED NOT NULL,
    KEY         `group_id` (`group_id`),
    KEY         `person_id` (`person_id`),
    CONSTRAINT `groupzonepersonpivot_group_id_fk_idx` FOREIGN KEY (`group_id`) REFERENCES `GroupZone` (`group_id`) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `groupzonepersonpivot_person_id_fk_idx` FOREIGN KEY (`person_id`) REFERENCES `Person` (`person_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `Carer`
(
    `parental_id` INT(16) UNSIGNED NOT NULL AUTO_INCREMENT,
    `person_id`   INT(16) UNSIGNED NOT NULL,
    `parent_id` INT(16) UNSIGNED NOT NULL,
    `child_id`    INT(16) UNSIGNED DEFAULT NULL,
    PRIMARY KEY (`parental_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `Diagnostic`
(
    `diagnostic_id`    INT(32) UNSIGNED NOT NULL AUTO_INCREMENT,
    `patient_id`       INT(16) UNSIGNED NOT NULL,
    `diagnostic_date`  datetime NOT NULL,
    `health_worker_id` INT(32) UNSIGNED NOT NULL,
    `health_center_id` INT(16) UNSIGNED NOT NULL,
    `result`           BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (`diagnostic_id`),
    KEY                `patient_id` (`patient_id`),
    KEY                `health_worker_id` (`health_worker_id`),
    KEY                `health_center_id` (`health_center_id`),
    CONSTRAINT `diagnostic_patient_id_fk_idx` FOREIGN KEY (`patient_id`) REFERENCES `Patient` (`patient_id`) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `diagnostic_hw_id_fk_idx` FOREIGN KEY (`health_worker_id`) REFERENCES `PublicHealthWorker` (`health_worker_id`) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `diagnostic_hc_id_fk_idx` FOREIGN KEY (`health_center_id`) REFERENCES `PublicHealthCenter` (`health_center_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `Forms`
(
    `form_id` INT(16) UNSIGNED NOT NULL AUTO_INCREMENT,
    `health_worker_id`   INT(16) UNSIGNED NOT NULL,
    `patient_id` INT(16) UNSIGNED NOT NULL,
    `form_date`    DATE NOT NULL,
    PRIMARY KEY (`form_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `FormsSymptomsPivot`
(
    `symptom_id` INT(16) UNSIGNED NOT NULL ,
    `form_id`   INT(16) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `MainSymptoms`
(
    `symptom` VARCHAR(32)  NOT NULL,
    `commonality`  VARCHAR(32)  NOT NULL,
    PRIMARY KEY (`symptom`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `Symptoms`
(
    `symptom_id` INT(16) UNSIGNED NOT NULL,
    `symptom`  VARCHAR(32)  NOT NULL,
    PRIMARY KEY (`symptom_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `Alert`
(
    `alert_id` INT(4) UNSIGNED NOT NULL AUTO_INCREMENT,
    `Recommendation_id`  INT(16) UNSIGNED NOT NULL,
    `alert_info`  VARCHAR(1024)  NOT NULL,
    PRIMARY KEY (`alert_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `Recommendation`
(
    `Recommendation_id` INT(16) UNSIGNED NOT NULL AUTO_INCREMENT,
    `Recommendation`  VARCHAR(1024)  NOT NULL,
    PRIMARY KEY (`Recommendation_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `Messages`
(
    `msg_id` INT(16) UNSIGNED NOT NULL AUTO_INCREMENT,
    `region_id`  INT(16) UNSIGNED NOT NULL,
    `msg_date`  DATETIME NOT NULL,
    `alert_id`  INT(16) UNSIGNED NOT NULL,
    `person_id`  INT(16) UNSIGNED NOT NULL,
    PRIMARY KEY (`msg_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;