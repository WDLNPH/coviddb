
CREATE TABLE `Person`
(
    `person_id`   INTEGER(16) UNSIGNED NOT NULL,
    `medicare`    VARCHAR(16),
    `first_name`  VARCHAR(32) NOT NULL,
    `last_name`   VARCHAR(32) NOT NULL,
    `address`     VARCHAR(64) NOT NULL,
    `city`        VARCHAR(32) NOT NULL,
    `postal_code` VARCHAR(8)  NOT NULL,
    `province`    VARCHAR(4)  NOT NULL,
    `citizenship` VARCHAR(32) NOT NULL,
    `email`       VARCHAR(64),
    `phone`       VARCHAR(16) NOT NULL,
    `dob`         DATE        NOT NULL,
    PRIMARY KEY (`person_id`)
);

CREATE TABLE `Facility`
(
    `facility_id`   INTEGER(16) UNSIGNED NOT NULL,
    `facility_name` VARCHAR(32)  NOT NULL,
    `phone`         VARCHAR(16)  NOT NULL,
    `address`       VARCHAR(32)  NOT NULL,
    `city`          VARCHAR(32)  NOT NULL,
    `province`      VARCHAR(4)   NOT NULL,
    `postal_code`   VARCHAR(8)   NOT NULL,
    `type`          VARCHAR(32)  NOT NULL,
    `website`       VARCHAR(256) NOT NULL,
    PRIMARY KEY (`facility_id`)
);

CREATE TABLE `Employee`
(
    `employee_id` INTEGER(16) UNSIGNED NOT NULL,
    `person_id`   INTEGER(16) UNSIGNED NOT NULL,
    `medicare`    VARCHAR(16) NOT NULL,
    `position`    VARCHAR(32) NOT NULL,
    `schedule`    VARCHAR(256),
    `facility_id` INTEGER(16) UNSIGNED NOT NULL,
    PRIMARY KEY (`employee_id`)
        #FOREIGN KEYS needed(facility_id, person_id, medicare)
);

CREATE TABLE `Diagnostic`
(
    `diagnostic_id` INTEGER(32) UNSIGNED NOT NULL,
    `patient_id`    INTEGER(16) UNSIGNED NOT NULL,
    `employee_id`   INTEGER(32) UNSIGNED NOT NULL,
    `facility_id`   INTEGER(16) UNSIGNED NOT NULL,
    `result`        BOOLEAN,
    PRIMARY KEY (`diagnostic_id`)
        #FOREIGN KEYS needed(employee_id, facility_id, patient_id)
);


CREATE TABLE `GroupZone`
(
    `group_id`  INTEGER(16) UNSIGNED NOT NULL,
    `name`      VARCHAR(32) NOT NULL,
    `activity`  VARCHAR(32) NOT NULL,
    PRIMARY KEY (`group_id`)
);

CREATE TABLE `GroupZonePersonPivot`
(
    `group_id`  INTEGER(16) UNSIGNED NOT NULL,
    `person_id` INTEGER(16) UNSIGNED NOT NULL,
    #FOREIGN KEYS needed(person_id, group_id)
);

CREATE TABLE `Patient`
(
    `patient_id`    INTEGER(16) UNSIGNED NOT NULL,
    `person_id`     INTEGER(16) UNSIGNED NOT NULL,
    `facility_id`   INTEGER(16) UNSIGNED NOT NULL,
    `diagnostic_id` INTEGER(32) UNSIGNED NOT NULL,
    PRIMARY KEY (`patient_id`)
        #FOREIGN KEYS needed(diagnostic_id, person_id, facility_id)
);



CREATE TABLE `Parental`
(
    `parental_id` INTEGER(16) UNSIGNED NOT NULL,
    `person_id`   INTEGER(16) UNSIGNED NOT NULL,
    `parent_1_id` INTEGER(16) UNSIGNED NOT NULL,
    `parent_2_id` INTEGER(16) UNSIGNED NOT NULL,
    `guardian_id` INTEGER(16) UNSIGNED NOT NULL,
    `child_id`    INTEGER(16),
    PRIMARY KEY (`parental_id`)
);
