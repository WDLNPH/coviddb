/*
    Given queries expected to return stuff


*/

# Dump of table GroupZone
# ------------------------------------------------------------

INSERT INTO `GroupZone` (`group_id`, `name`, `activity`)
VALUES
(1,'MontrealPrimaryGrade1_Group_1','Education'),
(2,'MontrealPrimaryGrade1_Group_2','Education'),
(3,'MontrealChurch_Group_1','House Of Worship'),
(4,'MontrealChurch_Group_2','House Of Worship'),
(5,'Basketball_Group_1','Sports'),
(6,'WeightLifting_Group_1','Sports'),
(7,'Soccer_Group_1','Sports'),
(8,'SainteCatherineRetail_Group_1','Shopping'),
(9,'QuartierDixTrente_Group_1','Shopping'),
(10,'Rockland_Group_1','Shopping'),
(11,'MontrealPrimaryGrade1_Group_1','Education'),
(12,'MontrealPrimaryGrade1_Group_2','Education'),
(13,'MontrealChurch_Group_1','House Of Worship'),
(14,'MontrealChurch_Group_2','House Of Worship'),
(15,'Basketball_Group_1','Sports'),
(16,'WeightLifting_Group_1','Sports'),
(17,'Soccer_Group_1','Sports'),
(18,'SainteCatherineRetail_Group_1','Shopping'),
(19,'QuartierDixTrente_Group_1','Shopping'),
(20,'Rockland_Group_1','Shopping');

# Dump of table PublicHealthCenter
# ------------------------------------------------------------

INSERT INTO `PublicHealthCenter` (`health_center_id`, `name`, `phone`, `address`, `city`, `province`, `postal_code`, `type`, `website`)
VALUES
(1,'Pelletier, Gilbert and Gingras','464-325-3448','340 Patrice Rue','Perreaultburgh','NU','R8M-8M3','CLINIC','http://morin.com/'),
(2,'Viau','(395) 998-0000','16492 Champagne Camp','Sophieview','NS','J0G-7Y4','SPECIAL INSTALLMENT','http://www.arsenault.com/repellendus-ea-alias-odio-dolores-voluptates-tempore-rem'),
(3,'Desrosiers-Vachon','(770) 266-7676','197 Christiane Crossroad Suite 678','North Élise','NB','C8J 7X0','HOSPITAL','http://www.nadeau.com/quidem-nam-sint-asperiores-ut-a-ipsam'),
(4,'Therrien Group','652-803-4032','76834 Gingras Extensions Apt. 959','South Monique','BC','V9K 9N5','HOSPITAL','http://langlois.com/numquam-consequuntur-exercitationem-laborum-eos-autem'),
(5,'Paquette Group','(650) 598-0815','2258 Léon Springs Apt. 873','Étienneton','BC','R4L-7N1','CLINIC','http://www.champagne.org/'),
(6,'Bouchard, Martin and Lambert','+18763586286','693 Michel Square Suite 752','Fourniermouth','AB','L7C 7S4','SPECIAL INSTALLMENT','http://lambert.com/et-aut-nesciunt-modi-ea-iusto'),
(7,'Lemay-Giguère','+1-560-942-7885','174 Paulette Key Apt. 564','East Bernard','AB','R2N 3A9','CLINIC','http://www.jean.info/consectetur-itaque-fuga-illum-sit-molestiae-maxime-aut-dolorum.html'),
(8,'Goulet Group','1-629-416-3945','4563 Carrier Course Apt. 494','North Marguerite','NB','E1B-9B5','CLINIC','http://www.carrier.com/omnis-aut-amet-ut-cum-repellat'),
(9,'Caron, Nguyen and Lalonde','(813) 562-9856','5332 Poulin Key','Martineport','PE','N0H-2H8','SPECIAL INSTALLMENT','http://www.bertrand.biz/mollitia-a-libero-deleniti-sunt-necessitatibus.html'),
(10,'Boudreau, Renaud and Beaulieu','+1-248-707-1293','7050 Lapointe Curve Suite 357','Lake Alfredton','SK','B8H 4S9','CLINIC','http://www.robert.com/fugiat-accusantium-nam-voluptatem-nisi.html'),
(11,'Perreault-Thibault','+18706759613','969 Jacques Shoal Apt. 048','Gilbertborough','AB','R4L4A8','HOSPITAL','http://www.leclerc.net/adipisci-facilis-quia-quod-quod.html'),
(12,'Fillion-Gilbert','1-519-986-0816','3693 René Fields Suite 835','Huguesborough','NB','L5V-5P4','HOSPITAL','http://www.villeneuve.biz/sed-perferendis-accusamus-aliquid.html'),
(13,'Rousseau Inc','+1.442.453.4384','53882 Bernier Creek','Moreauborough','NU','C9J7M2','CLINIC','http://leblanc.org/'),
(14,'Dion, Roy and Bérubé','653.389.9807','789 Rolande Lock Apt. 106','Gosselinton','NS','K1G3K1','HOSPITAL','http://www.turcotte.com/veritatis-reiciendis-ullam-amet-ipsam-voluptate-debitis-dolore.html'),
(15,'Labelle, Gagné and Plante','+1-313-609-5565','93886 Jacques Rest Apt. 656','South Rolande','MB','C4V 8K1','SPECIAL INSTALLMENT','http://www.lambert.com/'),
(16,'Simard-Lauzon','878.979.9748','222 Moreau Springs Apt. 480','Martinefort','AB','N0M 9S9','CLINIC','http://www.boudreau.com/ad-harum-voluptatem-placeat-et-reiciendis-saepe-est'),
(17,'Mercier and Sons','1-568-596-7358','39269 Desjardins Mission Apt. 698','South Arianne','PE','L4H 8E1','HOSPITAL','http://www.rioux.com/cumque-et-quae-molestias-architecto-ullam-tempora'),
(18,'Simard and Sons','(243) 789-1851','550 Blais Gardens Apt. 197','East Agathe','MB','N6H 4J8','SPECIAL INSTALLMENT','http://perreault.net/sint-repudiandae-corrupti-quis-saepe.html');

# Dump of table Person
# ------------------------------------------------------------

INSERT INTO `Person` (`person_id`, `medicare`, `first_name`, `last_name`, `address`, `city`, `postal_code`, `province`, `citizenship`, `email`, `phone`, `dob`)
VALUES
(1,'YNPI 6824 6266','Christine','Tessier','489 Pauline Shoals Suite 850','New Eugénieshire','Y5M2M5','QC','SD','vaillancourt.emile@benoit.com','1-813-595-0684','1988-08-15'),
(2,'VBBV 2920 3617','Nathalie','Giguère','5846 Jules Road','Port Thérèse','C5K-3M3','AB','IS','gauthier.remy@legault.com','(368) 357-0955','1992-12-29'),
(3,'IZGD 8509 2086','Jules','Langlois','278 Corrine Summit','South Timothée','N3M 3B9','AB','MA','laurent27@gmail.com','+1.610.409.2501','1982-07-15'),
(4,'KBUW 4009 8201','Gilbert','Rousseau','6114 Céline Forks','Olivierville','L0B-2Y0','YT','AW','claudine.bergeron@rousseau.biz','+1-791-434-3635','1974-07-23'),
(5,'EMIS 5961 7808','Lucas','Lalonde','798 Manon Landing Apt. 638','Bernierville','H1R 8X8','MB','HU','frederique70@fillion.com','+18865024589','1986-10-23'),
(6,'XHLL 8636 0748','Adrienne','Larouche','117 Xavier Estate Apt. 872','West Christophefurt','Y4G6H9','BC','SA','honoree01@gmail.com','235-351-8369','1996-06-01'),
(7,'QLCS 8988 5623','Agathe','Bouchard','96651 Drouin Walk','Gabriellehaven','J1B2M6','ON','VI','bedard.timothee@dionne.biz','1-880-939-9519','1996-09-30'),
(8,'NNVY 0663 9306','Valérie','Boivin','7207 Roy Centers','Renéeview','T7C 5E4','MB','IM','allard.suzanne@yahoo.com','604.439.4385','2004-08-14'),
(9,'MJOQ 7587 0702','Marcel','Caron','841 Lucas Glen Suite 684','South Patrice','L7K3A6','NT','UY','ydubois@gmail.com','+1 (797) 696-1763','2009-06-28'),
(10,'OACO 8242 1364','Anne','Rousseau','44268 Patrick Creek','North Martinestad','P3R3J2','AB','LB','annie.giroux@gmail.com','928.410.9499','2008-06-09'),
(11,'MJNO 9912 0411','Andrée','Tessier','95 Robert St.','North Érikaside','N8T0P5','NT','CK','giguere.marthe@bernier.com','(447) 682-0040','1999-11-22'),
(12,'IDCH 8991 5939','Luce','Pelletier','99841 Demers Circle Suite 261','New Xavier','P7T3G0','QC','CY','nathalie.robert@hotmail.com','+1 (995) 747-3206','1996-03-21'),
(13,'LNTA 2295 2108','Marianne','Paquette','5348 André Road Apt. 726','Port Catherinemouth','M8T-0S5','ON','IM','gingras.colette@gilbert.biz','223.560.3831','2019-07-02'),
(14,'HSEA 9131 9613','Honorée','Charbonneau','95 Robert St.','East Madeleineborough','T5L 9R1','NB','TF','jfortier@dube.com','473-696-9956','1990-04-12'),
(15,'UDRZ 8707 0490','Alexandra','St-Pierre','4047 Albert Place','Lake Josephtown','M8J-3L8','NB','GW','marie.dion@lalonde.net','1-817-391-4893','2006-04-17'),
(16,'EUEB 3754 4998','Émile','Plante','5458 Fortin Walks','New Guybury','T9J 9A6','NT','SN','jbernard@girard.com','250.928.0633','1979-06-12'),
(17,'BJLJ 7672 3289','Auguste','Thibault','182 Audrey Loaf','West Édouard','N3K7S0','NS','CK','gabrielle.guay@cyr.org','287-823-3791','2016-10-19'),
(18,'WZKD 4560 8746','François','Roy','456 Claudine Way','Raymondfort','J6C 6X6','NB','NO','patrick28@hotmail.com','(525) 864-3852','2010-07-21'),
(19,'FAMP 9481 5229','Alexandre','Bergeron','2182 Arsenault Port Suite 351','Lake Patrice','E2H3C7','NS','NP','alexandra47@parent.info','964.201.7494','2010-02-21'),
(20,'YSJT 6844 4454','Émile','Dubé','52384 Gravel Courts','Richardhaven','Y7S 9L4','NS','CL','jtheriault@gmail.com','+1.232.463.1261','1987-06-29'),
(21,'DHZA 5881 7256','Michelle','Demers','45766 Labelle Stream Suite 734','Frédéricport','A9T-7T1','PE','IT','nancy.savard@lachance.com','470.518.0375','2018-01-04'),
(22,'PNDU 2911 1941','Daniel','Beaulieu','66811 Bérubé Brooks','Lake Gillesview','M2V5G0','ON','SD','stephane16@parent.com','(468) 700-7841','2009-07-26'),
(23,'WHIN 5703 2725','Martine','Caron','15675 Jacqueline Mission','West Alexandra','X0G8A1','MB','MK','stephanie09@gmail.com','+1.386.722.4847','1986-03-10'),
(24,'RTUY 6813 6522','Chantal','Mercier','7393 Patricia Divide','Lavoiemouth','H0Y-3E2','YT','SD','houle.annette@lalonde.com','1-570-730-7062','1973-06-26'),
(25,'RYTZ 0763 1481','Simone','Ouellet','68771 Danielle Rue Suite 220','Vachonfort','G6P 8R8','YT','SA','vrobert@tremblay.com','851-236-1474','2001-02-21'),
(26,'YNQW 8970 9327','Édith','Michaud','925 Harvey Shoal Apt. 679','Paulport','C2B-2X1','NL','GQ','andree.lacroix@yahoo.com','(620) 328-9956','2012-06-02'),
(27,'THBA 4761 7530','Olivier','Theriault','735 Matthieu Trace Suite 859','Laurentfort','K6M-4X3','SK','AM','otheriault@villeneuve.net','223-367-7087','2013-08-19'),
(28,'UFCL 0740 7507','Élise','Nguyen','24469 Frédérique Causeway Apt. 136','New Arthurport','T8V 6P4','BC','MM','william.bernard@gmail.com','853.653.1339','1997-12-24'),
(29,'FHEW 0801 5362','Mathilde','Lemay','379 Arianne Forks Apt. 508','Savardview','K5T6A9','BC','BG','ttremblay@gmail.com','419-778-1980','1991-03-16'),
(30,'NMSJ 2958 5668','Maggie','Fillion','1690 Lambert Mill Apt. 233','Houletown','K7K 1H7','YT','LK','ppelletier@hotmail.com','(748) 420-9991','1971-06-12'),
(31,'OZAL 8992 7437','Alice','Beaudoin','578 Tardif Vista Suite 460','Alyssonfurt','H1Y-2X0','SK','VG','girard.alfred@yahoo.com','1-630-794-8157','2011-06-20'),
(32,'OAFL 7805 3018','Manon','Harvey','546 Bertrand Mills Apt. 567','Adèleville','Y6L 5N5','NS','KG','xlapierre@leblanc.com','374.408.1216','1972-10-13'),
(33,'XOOD 0150 7985','Catherine','Vaillancourt','64737 Goulet Forges Apt. 997','Paquetteside','M8T9G6','BC','OM','aurore03@thibault.com','+13656967909','2011-10-06'),
(34,'GKKG 0252 0479','Philippe','Renaud','8255 Labelle Mountain Apt. 855','Sophieshire','J5E0A6','MB','JE','yvan18@hotmail.com','637.563.6468','1994-04-10'),
(35,'PLXH 8114 3235','Gabriel','Lapierre','272 Audet Forges','Leblancton','S9E 3B3','ON','CC','victor.boucher@carrier.net','464.835.2367','1992-07-05'),
(36,'DFSV 3104 5067','Hélène','Tardif','6278 Denise Ford','Picardmouth','S8V8H6','NT','AT','marthe.benoit@gmail.com','+1-731-593-4372','2016-10-31'),
(37,'AVYJ 8352 3197','Albert','Therrien','28411 Paquette Pine Suite 545','East Françisbury','V3X6J5','NS','ST','sgagne@hotmail.com','+1-671-887-6672','2011-09-18'),
(38,'JSUH 8623 8211','Patricia','Dupuis','46112 Yvan Harbor Suite 255','Trudelstad','Y7P1S7','SK','DO','robert.richard@gmail.com','(230) 231-0705','2008-06-11'),
(39,'OXGD 8831 2232','David','Lacroix','969 Adèle Drives Suite 424','Lake Marie','C5M7L0','YT','MP','louis31@lauzon.org','(519) 475-8941','1974-05-06'),
(40,'SFWO 4643 5432','Roger','Macdonald','511 Cyr Parks','Lake Guymouth','V7S-0K2','NL','BB','rgilbert@jean.com','979.701.2991','1999-06-29');


# Dump of table GroupZonePersonPivot
# ------------------------------------------------------------

INSERT INTO `GroupZonePersonPivot` (`group_id`, `person_id`)
VALUES
(2,11),
(10,11),
(7,12),
(5,12),
(2,12),
(7,13),
(5,13),
(6,14),
(6,14),
(7,14),
(3,15),
(6,16),
(2,16),
(5,16),
(10,17),
(6,17),
(6,18),
(2,18),
(1,18),
(6,19),
(2,20),
(6,20),
(2,20),
(19,31),
(20,31),
(20,32),
(20,33),
(12,33),
(12,33),
(14,34),
(20,35),
(18,35),
(18,36),
(18,37),
(20,37),
(17,37),
(15,38),
(20,38),
(15,38),
(13,39),
(13,39),
(19,39),
(18,40),
(13,40),
(18,40);


# Dump of table Patient
# ------------------------------------------------------------

INSERT INTO `Patient` (`patient_id`, `person_id`)
VALUES
(1,11),
(2,12),
(3,13),
(4,14),
(5,15),
(6,16),
(7,17),
(8,18),
(9,19),
(10,20),
(11,31),
(12,32),
(13,33),
(14,34),
(15,35),
(16,36),
(17,37),
(18,38),
(19,39),
(20,40);


# Dump of table PublicHealthWorker
# ------------------------------------------------------------

INSERT INTO `PublicHealthWorker` (`health_worker_id`, `person_id`, `position`, `schedule`, `health_center_id`)
VALUES
(1,1,'PSYCHO','01:00:00-01:00:00',4),
(2,2,'INTERN','01:00:00-01:00:00',1),
(3,3,'NURSE','01:00:00-01:00:00',2),
(4,4,'NURSE','01:00:00-01:00:00',2),
(5,5,'NURSE','01:00:00-01:00:00',7),
(6,6,'JANITOR','01:00:00-01:00:00',2),
(7,7,'INTERN','01:00:00-01:00:00',3),
(8,8,'JANITOR','01:00:00-01:00:00',6),
(9,9,'NURSE','01:00:00-01:00:00',9),
(10,10,'NURSE','01:00:00-01:00:00',9),
(11,21,'JANITOR','02:00:00-02:00:00',11),
(12,22,'DOCTOR','02:00:00-02:00:00',14),
(13,23,'JANITOR','02:00:00-02:00:00',18),
(14,24,'JANITOR','02:00:00-02:00:00',11),
(15,25,'NURSE','02:00:00-02:00:00',10),
(16,26,'INTERN','02:00:00-02:00:00',11),
(17,27,'INTERN','02:00:00-02:00:00',14),
(18,28,'NURSE','02:00:00-02:00:00',13),
(19,29,'JANITOR','02:00:00-02:00:00',13),
(20,30,'JANITOR','02:00:00-02:00:00',10);

# Dump of table Diagnostic
# ------------------------------------------------------------

INSERT INTO `Diagnostic` (`diagnostic_id`, `patient_id`, `diagnostic_date`, `health_worker_id`, `health_center_id`, `result`)
VALUES
(1,1,'2021-01-10 10:22:34',6,8,1),
(2,2,'2020-05-06 11:06:11',4,6,0),
(3,2,'2020-07-29 17:17:19',10,1,0),
(4,2,'2020-11-29 14:35:59',7,5,0),
(5,3,'2020-05-27 18:13:22',4,1,1),
(6,3,'2020-08-25 00:55:29',1,4,0),
(7,3,'2020-05-31 02:37:07',10,6,0),
(8,4,'2020-06-18 12:39:06',1,8,0),
(9,4,'2020-06-12 03:29:10',7,1,0),
(10,4,'2020-05-07 11:47:09',3,2,0),
(11,5,'2021-01-10 04:25:09',3,6,1),
(12,6,'2020-05-27 21:43:57',2,2,1),
(13,6,'2020-03-01 21:48:43',6,9,0),
(14,6,'2020-09-08 01:57:43',8,1,1),
(15,7,'2020-06-16 12:09:26',6,4,0),
(16,8,'2021-01-19 10:03:39',4,1,0),
(17,8,'2020-09-10 04:47:08',5,2,1),
(18,8,'2020-06-05 20:30:18',3,8,1),
(19,9,'2020-07-17 14:34:26',9,2,0),
(20,9,'2020-07-29 18:51:31',8,7,1),
(21,9,'2020-11-08 21:06:45',4,3,1),
(22,10,'2020-09-22 17:59:07',10,2,1),
(23,10,'2020-11-09 14:51:22',9,2,1),
(24,10,'2020-03-09 16:31:04',5,8,0),
(25,11,'2020-03-09 01:20:11',13,13,0),
(26,11,'2020-04-02 01:49:59',12,15,1),
(27,11,'2020-02-20 06:20:46',18,10,1),
(28,12,'2020-06-09 00:35:07',16,14,0),
(29,12,'2020-08-17 00:59:54',15,11,1),
(30,12,'2020-03-04 06:32:44',12,16,0),
(31,13,'2020-09-28 05:17:31',17,11,1),
(32,14,'2020-12-13 00:59:54',19,12,1),
(33,15,'2020-12-26 17:27:36',14,12,1),
(34,16,'2020-04-08 04:33:18',15,17,0),
(35,16,'2020-04-30 09:34:04',13,12,1),
(36,17,'2021-02-05 13:21:32',19,16,1),
(37,17,'2020-05-28 22:24:07',18,14,1),
(38,18,'2021-01-10 17:25:49',17,16,1),
(39,19,'2020-08-21 12:43:54',17,11,1),
(40,19,'2020-07-23 12:31:22',18,17,0),
(41,19,'2020-04-25 05:02:36',14,13,0),
(42,20,'2020-12-22 12:10:31',11,12,0),
(43,20,'2020-03-26 21:24:08',13,16,0),
(44,20,'2020-09-28 00:50:07',20,10,0);

# Dump of table Parental
# ------------------------------------------------------------



