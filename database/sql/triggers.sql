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