DROP TRIGGER IF EXISTS alertTrigger;
DELIMITER //
CREATE TRIGGER alertTrigger
AFTER UPDATE ON Region
FOR EACH ROW
BEGIN
INSERT INTO messages(`message`, `region_id`, `msg_date`,`person_id`, `alert_id`)
SELECT 
  CONCAT('Bonsoir ',ps.first_name, ' this is an automated message to warn you that the alert level in your region went from ', OLD.alert_id, ' to ', NEW.alert_id) AS 'message',
  OLD.region_id AS 'region_id',
  NOW() AS 'msg_date',
  ps.person_id AS 'person_id',
  NEW.alert_id AS 'alert_id'
FROM 
  Person ps
  JOIN PostalCode pc ON pc.postal_code_id = ps.postal_code_id
  JOIN City c ON c.city_id = pc.city_id
  JOIN Region r ON r.region_id = OLD.region_id;
END; //
DELIMITER ;



DROP TRIGGER IF EXISTS diagTrigger;
DELIMITER //
CREATE TRIGGER diagTrigger
AFTER INSERT ON Diagnostic
FOR EACH ROW
BEGIN
IF (NEW.result = 1) THEN
INSERT INTO messages(`message`, `region_id`, `msg_date`,`person_id`, `alert_id`)
SELECT 
  CONCAT('Bonsoir ', ps.first_name, '. You have received a POSITIVE result for your covid diagnostic.'),
  null AS 'region_id',
  NEW.diagnostic_date AS 'msg_date',
  ps.person_id AS 'person_id',
  null AS 'alert_id'
FROM 
  Person ps
  JOIN patient pc ON pc.person_id = ps.person_id AND NEW.patient_id = pc.patient_id;
    INSERT INTO messages(`message`, `region_id`, `msg_date`,`person_id`, `alert_id`)
SELECT 
  CONCAT('Bonsoir ', ps.first_name, '. You have recently received a POSITIVE diagnostic for COVID-19. Here are the public health recommendations that should be followed during 
  14 consecutive day after your diagnostic www.coviddb.com/recommendations. Reminder: Do not forget to fill up the follow-up-form on www.coviddb.com using your medicare <', ps.medicare, '> as username and your date of birth <', ps.dob, '> as password.'),
  null AS 'region_id',
  NEW.diagnostic_date AS 'msg_date',
  ps.person_id AS 'person_id',
  null AS 'alert_id'
FROM 
  Person ps
  JOIN patient pc ON pc.person_id = ps.person_id AND NEW.patient_id = pc.patient_id;
  END IF;
IF (NEW.result = 0) THEN
INSERT INTO messages(`message`, `region_id`, `msg_date`,`person_id`, `alert_id`)
SELECT 
  CONCAT('Bonsoir ', ps.first_name, '. You have received a NEGATIVE result for your covid diagnostic.'),
  null AS 'region_id',
  NEW.diagnostic_date AS 'msg_date',
  ps.person_id AS 'person_id',
  null AS 'alert_id'
FROM 
  Person ps
  JOIN patient pc ON pc.person_id = ps.person_id AND NEW.patient_id = pc.patient_id;
  END IF;
END; //
DELIMITER ;