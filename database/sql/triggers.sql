DROP TRIGGER IF EXISTS alertTrigger;
DELIMITER //
CREATE TRIGGER alertTrigger
AFTER UPDATE ON Region
FOR EACH ROW
BEGIN
INSERT INTO Messages(`message`, `region_id`, `msg_date`,`person_id`, `alert_id`, `diagnostic_id`)
SELECT
  CONCAT(
      'Bonsoir ', ps.first_name, ', (e-mail: ', ps.email, ')\n\n',
      'This is an automated message generated at ', NOW(),' to warn you that the alert level in your region, ', r.region_name,', ',
      'went from ', a.alert_info, ' to ', b.alert_info, '.\n\n ',
      if(NEW.alert_id = 4,
        'This is a RED alert, the maximum alert a region can have.\n\n To read the government guidelines, Please visit www.coviddb.com/guidelines.',
          'Stay Safe!')) AS 'message',
  OLD.region_id AS 'region_id',
  NOW() AS 'msg_date',
  ps.person_id AS 'person_id',
  NEW.alert_id AS 'alert_id',
  null
FROM
  Person ps
  JOIN PostalCode pc ON pc.postal_code_id = ps.postal_code_id
  JOIN City c ON c.city_id = pc.city_id
  JOIN Region r ON r.region_id = c.region_id AND r.region_id = OLD.region_id
  JOIN Alert a ON a.alert_id = OLD.alert_id
  JOIN Alert b ON b.alert_id = NEW.alert_id;
END; //
DELIMITER ;




DROP TRIGGER IF EXISTS diagTrigger;
DELIMITER //
CREATE TRIGGER diagTrigger
AFTER INSERT ON Diagnostic
FOR EACH ROW
BEGIN
INSERT INTO Messages(`message`, `region_id`, `msg_date`,`person_id`, `alert_id`, `diagnostic_id`)
SELECT
  CONCAT('Hello ', ps.first_name, '.\n\n',
      'This is regarding the diagnostic you have taken on ',
      NEW.diagnostic_date,
      ' by health professional ' ,
      pw.first_name, ' ', pw.last_name,
      ' in ', phc.name, '.\n\n'
      'You have received a ',
      if(NEW.result, 'POSITIVE', 'NEGATIVE'),
      ' result for your COVID diagnostic. In other words, YOU ',
      if(NEW.result, 'HAVE COVID-19.', 'DO NOT HAVE COVID-19.'), '\n\n',
      if(NEW.result, 'More information will be provided to you on how to proceed in a following message.\n\n', ''),
      'We encourage to keep following the regulations provided by the government and health officials') as 'message',
      null AS 'region_id',
      NEW.diagnostic_date AS 'msg_date',
      ps.person_id AS 'person_id',
      null AS 'alert_id',
      NEW.diagnostic_id AS 'diagnostic_id'
FROM
  Person ps
  JOIN Patient pc ON pc.person_id = ps.person_id AND NEW.patient_id = pc.patient_id
  JOIN PublicHealthWorker w ON w.health_worker_id = NEW.health_worker_id
  JOIN Person pw ON w.person_id = pw.person_id
  JOIN PublicHealthCenter phc ON phc.health_center_id = NEW.health_center_id;
IF (NEW.result = 1) THEN
    INSERT INTO Messages(`message`, `region_id`, `msg_date`,`person_id`, `alert_id`, `diagnostic_id`)
    SELECT
      CONCAT('Bonsoir ', ps.first_name, ',\n\n'
          'You have recently received a POSITIVE diagnostic for COVID-19.\n\n',
          'Here are the public health recommendations that should be followed during the 14 consecutive days after your diagnostic: www.coviddb.com/recommendations.\n\n',
          'Reminder: Do not forget to fill up the follow-up-form on www.coviddb.com using your medicare <', ps.medicare, '> as username and your date of birth <', ps.dob, '> as password.'),
      null AS 'region_id',
      NEW.diagnostic_date AS 'msg_date',
      ps.person_id AS 'person_id',
      null AS 'alert_id',
      NEW.diagnostic_id AS 'diagnostic_id'
    FROM
      Person ps
      JOIN patient pc ON pc.person_id = ps.person_id AND NEW.patient_id = pc.patient_id;
END IF;

END; //
DELIMITER ;
