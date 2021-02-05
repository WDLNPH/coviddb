DROP TABLE IF EXISTS `Diagnostic`;
DROP TABLE IF EXISTS `GroupZonePersonPivot`;
DROP TABLE IF EXISTS `Parental`;
DROP TABLE IF EXISTS `Patient`;
DROP TABLE IF EXISTS `GroupZone`;
DROP TABLE IF EXISTS `PublicHealthWorker`;
DROP TABLE IF EXISTS `PublicHealthCenter`;
DROP TABLE IF EXISTS `Person`;

CREATE TABLE `Person`
(
    `person_id`   INT(16) UNSIGNED NOT NULL AUTO_INCREMENT,
    `medicare`    VARCHAR(16) DEFAULT NULL,
    `first_name`  VARCHAR(32) NOT NULL,
    `last_name`   VARCHAR(32) NOT NULL,
    `address`     VARCHAR(64) NOT NULL,
    `city`        VARCHAR(32) NOT NULL,
    `postal_code` VARCHAR(8)  NOT NULL,
    `province`    VARCHAR(4)  NOT NULL,
    `citizenship` VARCHAR(32) NOT NULL,
    `email`       VARCHAR(64) DEFAULT NULL,
    `phone`       VARCHAR(16) NOT NULL,
    `dob`         DATE        NOT NULL,
    PRIMARY KEY (`person_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `PublicHealthCenter`
(
    `health_center_id` INT(16) UNSIGNED NOT NULL AUTO_INCREMENT,
    `name`             VARCHAR(32)  NOT NULL DEFAULT '',
    `phone`            VARCHAR(16)  NOT NULL,
    `address`          VARCHAR(32)  NOT NULL,
    `city`             VARCHAR(32)  NOT NULL,
    `province`         VARCHAR(4)   NOT NULL,
    `postal_code`      VARCHAR(8)   NOT NULL,
    `type`             VARCHAR(32)  NOT NULL,
    `website`          VARCHAR(256) NOT NULL,
    PRIMARY KEY (`health_center_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `PublicHealthWorker`
(
    `health_worker_id` INT(16) UNSIGNED NOT NULL AUTO_INCREMENT,
    `person_id`        INT(16) UNSIGNED NOT NULL,
    `position`         VARCHAR(32) NOT NULL,
    `schedule`         VARCHAR(256) DEFAULT NULL,
    `health_center_id` INT(16) UNSIGNED NOT NULL,
    PRIMARY KEY (`health_worker_id`),
    KEY `person_id` (`person_id`),
    KEY `health_center_id` (`health_center_id`),
    CONSTRAINT `publichealthworker_person_id_fk_idx` FOREIGN KEY (`person_id`) REFERENCES `Person` (`person_id`) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `publichealthworker_hc_id_fk_idx` FOREIGN KEY (`health_center_id`) REFERENCES `PublicHealthCenter` (`health_center_id`) ON DELETE CASCADE ON UPDATE CASCADE
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
    `patient_id`       INT(16) UNSIGNED NOT NULL AUTO_INCREMENT,
    `person_id`        INT(16) UNSIGNED NOT NULL,
    `health_center_id` INT(16) UNSIGNED NOT NULL,
    PRIMARY KEY (`patient_id`),
    KEY `person_id` (`person_id`),
    KEY `health_center_id` (`health_center_id`),
    CONSTRAINT `patient_person_id_fk_idx` FOREIGN KEY (`person_id`) REFERENCES `Person` (`person_id`) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `patient_hc_id_fk_idx` FOREIGN KEY (`health_center_id`) REFERENCES `PublicHealthCenter` (`health_center_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `GroupZonePersonPivot`
(
    `group_id`  INT(16) UNSIGNED NOT NULL,
    `person_id` INT(16) UNSIGNED NOT NULL,
    KEY `group_id` (`group_id`),
    KEY `person_id` (`person_id`),
    CONSTRAINT `groupzonepersonpivot_group_id_fk_idx` FOREIGN KEY (`group_id`) REFERENCES `GroupZone` (`group_id`) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `groupzonepersonpivot_person_id_fk_idx` FOREIGN KEY (`person_id`) REFERENCES `Person` (`person_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `Parental`
(
    `parental_id` INT(16) UNSIGNED NOT NULL AUTO_INCREMENT,
    `person_id`   INT(16) UNSIGNED NOT NULL,
    `parent_1_id` INT(16) UNSIGNED NOT NULL,
    `parent_2_id` INT(16) UNSIGNED NOT NULL,
    `guardian_id` INT(16) UNSIGNED NOT NULL,
    `child_id`    INT(16) DEFAULT NULL,
    PRIMARY KEY (`parental_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `Diagnostic`
(
    `diagnostic_id`    INT(32) UNSIGNED NOT NULL AUTO_INCREMENT,
    `patient_id`       INT(16) UNSIGNED NOT NULL,
    `health_worker_id` INT(32) UNSIGNED NOT NULL,
    `health_center_id` INT(16) UNSIGNED NOT NULL,
    `result` BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (`diagnostic_id`),
    KEY `patient_id` (`patient_id`),
    KEY `health_worker_id` (`health_worker_id`),
    KEY `health_center_id` (`health_center_id`),
    CONSTRAINT `diagnostic_patient_id_fk_idx` FOREIGN KEY (`patient_id`) REFERENCES `Patient` (`patient_id`) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `diagnostic_hw_id_fk_idx` FOREIGN KEY (`health_worker_id`) REFERENCES `PublicHealthWorker` (`health_worker_id`) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `diagnostic_hc_id_fk_idx` FOREIGN KEY (`health_center_id`) REFERENCES `PublicHealthCenter` (`health_center_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

