<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework.

If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains over 1500 video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

## Laravel Sponsors

We would like to extend our thanks to the following sponsors for funding Laravel development. If you are interested in becoming a sponsor, please visit the Laravel [Patreon page](https://patreon.com/taylorotwell).

### Premium Partners

- **[Vehikl](https://vehikl.com/)**
- **[Tighten Co.](https://tighten.co)**
- **[Kirschbaum Development Group](https://kirschbaumdevelopment.com)**
- **[64 Robots](https://64robots.com)**
- **[Cubet Techno Labs](https://cubettech.com)**
- **[Cyber-Duck](https://cyber-duck.co.uk)**
- **[Many](https://www.many.co.uk)**
- **[Webdock, Fast VPS Hosting](https://www.webdock.io/en)**
- **[DevSquad](https://devsquad.com)**
- **[Curotec](https://www.curotec.com/)**
- **[OP.GG](https://op.gg)**

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

# C19PHCSDB

## 1. E/R Diagram

Work in progress :sweat_smile:

![Entity](./imgs/ERD.png)
Some notes about cardinality in the *ERD* from assignment instrucstions so far:

- One `Person` may belong to more than one `Group Zone`, and one `Group Zone` can have more than one `Person`.
- More than one `City` may belong to one `Region`, but one particular `City` can belong to one `Region` only. (N:1)
- More than one `Postal Code` may belong to one `City`, but one particular `Postal code` can belong to one `City` only. (N:1)

## 2. Constraints & what's not captured by the *ERD*.

Representation of elements used in the notation of the *ERD* given above.

| Element  |          Representation           |
|:---:|:----------------------------------:|
| Entity | ![Entity](./imgs/entity.png )  |
| Weak Entity | ![Weak Entity](./imgs/weak_entity.png) |
| Attribute  | ![Attribute](./imgs/attribute.png)  |
| Primary Key  | ![Primary Key](./imgs/pk.png)  |
| Foreign Key  | ![Foreign Key](./imgs/fk.png) |
| Foreign Key  | ![Foreign Key](./imgs/relationship.png)  |
| Weak Relationship | ![Weak Relationship](./imgs/weak_relationship.png)  |
| One-to-One | ![One-to-One](./imgs/1_1.png) |
| One-to-Many | ![One-to-Many](./imgs/1_N.png)  |
| Many-to-Many | ![Many-to-Many](./imgs/M_N.png) |


The *ERD* given (will have) has lots of information and captured all constraints. We represented *weak entities*, *weak relationships*, *primary keys*, *foreign keys*, *cardinality of relationhips* and *functional dependency*.

## 3. Relational database schema + normalisation

## First Normal Form *1NF*

The first normal form requires tables to contain only a single value anywhere in the cells, and there should be no repeating groups throughout the rows.

```Steps to normalise to 1NF :
1.  Identify the repeating group(s).
2.  Create a new table by detaching the repeating group from the old table.
3.  Identify the primary key for all tables.
4.  Form composite keys to retain the relationship between tables if necessary.
```
<br>

| Before Normalisation                                                                                                                      |
|:------------------------------------------------------------------------------------------------------------------------------------------|
| **Person** (person_id, medicare, first_name, last_name, address, city, postal_code, province, citizenship, email, phone, DOB) 
| **Patient**(patient_id, person_id, main_symptoms, other_symptoms, symptoms_history)|
| **PublicHealthWorker**(health_worker_id, position, schedule, health_center_id, person_id) |
| **Adminstrator**(person_id, admin_id)|
| **Parental** (parental_id, person_id, parent_1_id, parent_2_id, guardian_id, child_id) |
| **PublicHealthCenter**(health_center_id, phone, name, address, city, province, postal_code, type, website) |
| **Diagnostic** (diagnostic_id, diagnostic_date, result, health_worker_id, health_center_id, person_id) |
| **Forms**(form_id, health_worker_id, patient_id)|
| **Symptoms**(main_symptoms, other_symptoms, history)|
| **GroupZone**(group_id, activity, name)|
| **Region**(region_id, region_name, city, posta_code, province)
| **Alert**(alert_name, alert_level, region, status, date, time, current_alert, past_alert, message, person_id, guidelines)

<br>

```diff 
# underline for primary key
# yellow codeblock for foreignkey
```

| After Normalisation *1NF*                                                                                                               |
|:-----------------------------------------------------------------------------------------------------------------------------------------|
| **Person** (<ins>person_id</ins>, medicare, first_name, last_name, address, `citizenship_id`, email, phone, DOB, `location_id`) 
| **Citizenship**(<ins>citizenship_id</ins>, person_id)
| **Country**(<ins>citizenship_id</ins>, country)
| **Patient**(<ins>patient_id</ins>,`person_id`)|
| **PublicHealthWorker**(<ins>health_worker_id</ins>, `position_id`, `schedule_id`, `health_center_id`, `person_id`) |
| **Schedule**() |
| **Adminstrator**(<ins>admin_id</ins>, `person_id`)|
| **Carer**(<ins>person_id</ins>, parent_id, child_id)| 
| **PublicHealthCenter**(<ins>health_center_id</ins>, phone, name, address, website, `location_id`) |
| **Facility**(<ins>facility_id</ins>, `health_center_id`,   )
| **Location**(<ins>location_id</ins>, `region_id`)|
| **Diagnostic** (<ins>diagnostic_id</ins>, diagnostic_date, result, `health_worker_id`, `health_center_id`, `patient_id`) |
| **Region**(<ins>region_id</ins>,` city_id`,` postal_code_id`, `province_id`, `alert_id`)|
| **Province**(group_id, activity, name)|
| **City**(group_id, activity, name)|
| **PostalCode**(group_id, activity, name)|
| **Forms**(<ins>form_id</ins>, `health_worker_id`, `patient_id`)|
| **MainSymptoms**
| **OtherSymptoms**
| **SymptomHistory**
| **GroupZone**(group_id, activity, name)|
| **Type**
| **Alert**(alert_id, region_id, alert_name, alert_level, status, date, time)|
| **AlertHistory**(alert_id, region_id, alert_name, alert_level, status, date, time)|
| **CurrentStatus**(alert_id, region_id, alert_name, alert_level, status, date, time)|
| **Message**(alert_id, region_id, alert_name, alert_level, status, date, time)|
| **Information**(alert_id, region_id, alert_name, alert_level, status, date, time)|



<br>

## Second Normal Form *2NF*

The second normal form requires each non-key attribute in a table to be completely dependent on whatever primary keys exist in the table. If there is only one primary key in a 1NF table, then it can be considered as a 2NF table.


```
Steps to normalise 1NF to 2NF:
1.  Examine all non-key attributes and their dependencies with the primary/composite key in the table.
2.  Form a new table by detaching all non-key attributes with incomplete dependencies.
3.  Create or appoint a primary/composite key for the new table.
```

Given that all tables only have one primary key each, it is already in 2NF. Now we can extract the set of functional dependency before going to 3NF.

The Functional dependencies are : <br>
**person_id**                   &#8594; medicare, first_name, last_name, `citizenship_id`, `region_id`, email, phone, DOB. <br>
**patient_id**                  &#8594; `person_id`.                                                                                   <br>
**health_worker_id**            &#8594; `person_id`, `position_id`, `schedule_id`, `health_center_id`.                                 <br>
**admin_id**                    &#8594; `person_id`.                                                                                   <br>
**citizenship_id**              &#8594; `person_id`, country.                                                                        <br>
**health_center_id**            &#8594; `phone`, `name`, `region_id`, `website`, `facility_id`.                                        <br>
**facility_id**                 &#8594; `method`, `drivethru`.                                                                         <br>
**location_id**                 &#8594; `region_id`.                                                                                   <br>
**region_id**                   &#8594; `city_id`, `province_id`, `postal_code_id`, `alert_id`.                                        <br> 
**group_id**                    &#8594;  name , `type_id`
**type_id**                     &#8594;  `group_id`, activity
**alert_id**                    &#8594;



## Third Normal Form *3NF*

The third normal form requires no transitive dependencies in a 2NF table. In another words, there should not be any functional dependencies among the non-key attributes in the table.
We cannot have `A`&#8594;`B`, `B` &#8594; `C`, `C` &#8594; `A`

```
Steps to normalise 2NF to 3NF:
1.  Examine all non-key attributes and their dependencies with each other in the table.
2.  Create a new table by detaching all dependent attributes from the table.
3.  Repeat Step 1 and Step 2 until no more inappropriate dependencies in the table(s).
```
There is no attributes that depend on non-key attributes in our tables. All dependent non-key attributes, do depend on the table's primary key.
There is functional dependency of the form `A`&#8594;`B`, `B` &#8594; `C`, `C` &#8594; `A`, so no violations here either.

## 4. Is the database in BCNF? Explain why or why not? show that it is in 3NF if not.

The database is already in *BCNF* normal form because for every functional dependency `X`&#8594;`Y`, `X` will be the *superkey* of the table.

As our schema is in *BCNF* form, all data redundancy based on functional dependencies have been removed.

## References
https://opentextbc.ca/dbdesign01/chapter/chapter-12-normalization/