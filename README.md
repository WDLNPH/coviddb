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

![ERD](https://github.com/wdlnph/coviddb/blob/feature/ERD/imgs/ERD.PNG?raw=true)
<!---
Some notes about cardinality in the *ERD*:


- One `Person` may be related to more than one `Group Zone`, and one `Group Zone` may be related to more than one `Person`.
- If a `Group Zone` exists then a `Person` **must exist**. 
- One `Person` may be related to **at most one** `Region`, and one `Region` may be related to more than one `Person`.
- One `PostalCode` may be related to **at most one** `Region`, and one `Region` may be related to more than one `PostalCode`.
- One `PostalCode` may be related to more than one `Group Zone`, and one `Group Zone` may be related to more than one `Person`.

- If a `Region` exists then an `Alert` **must exist**.
- One `Alert` may be related to more than one `Region`, and one `Region` may be related to more than one `Alert`.
- If a `Message` exists then a `Region` **must exist**.
- One `Message` may be related to more than one `Region`, and one `Region` may be related to more than one `Message`.
- One `Message` may be related to **at most one** `Diagnostic`, and one `Diagnostic` may be related to more than one `Message`.
- If a `Diagnostic` exists then a `Patient` **must exist**.
- If a `Diagnostic` exists then a `PublicHealthWorker` **must exist**.
- If a `Diagnostic` exists then a `PublicHealthCenter` **must exist**.


-->

## 2. Constraints & what's not captured by the *ERD*.

Representation of elements used in the notation of the *ERD* given above.

| Element  |          Representation           |
|:---:|:----------------------------------:|
| Entity | ![Entity](https://github.com/wdlnph/coviddb/blob/feature/ERD/imgs/entity.PNG?raw=true)  |
| Weak Entity | ![Weak Entity](https://github.com/wdlnph/coviddb/blob/feature/ERD/imgs/weak_entity.PNG?raw=true) |
| Attribute  | ![Attribute](https://github.com/wdlnph/coviddb/blob/feature/ERD/imgs/attribute.PNG?raw=true)  |
| Primary Key  | ![Primary Key](https://github.com/wdlnph/coviddb/blob/feature/ERD/imgs/pk.PNG?raw=true)  |
| Foreign Key  | ![Foreign Key](https://github.com/wdlnph/coviddb/blob/feature/ERD/imgs/fk.PNG?raw=true) |
| Relationship  | ![Foreign Key](https://github.com/wdlnph/coviddb/blob/feature/ERD/imgs/relationship.PNG?raw=true)  |
| Weak Relationship | ![Weak Relationship](https://github.com/wdlnph/coviddb/blob/feature/ERD/imgs/weak_relationship.PNG?raw=true)  |
| Multiplicity of Relationships | ![MR](https://github.com/wdlnph/coviddb/blob/feature/ERD/imgs/mrelationships.PNG?raw=true) |
| Referential Integrity | ![RI](https://github.com/wdlnph/coviddb/blob/feature/ERD/imgs/integrity.PNG?raw=true)  |


The *ERD* given captured most constraints. We represented *weak entities*, *weak relationships*, *primary keys*, *foreign keys*, *cardinality of relationhips*. 

However, *functional dependency* was not shown. This is shown later in this text.

There are cases where *referential integrity* and *multiplicity of relationships* conflicted, we have prioritized showing the *referential integrity* constraint. Both constraints are already listed in notes about cardinality.

We did not show *referential integrity* on the ERD when it comes to inherited entity sets.

## 3. Relational database schema + normalisation

<br>

| Before Normalisation                                                                                                                      |
|:------------------------------------------------------------------------------------------------------------------------------------------|
| **Person** (person_id, medicare, first_name, last_name, address, city, postal_code, province, citizenship, email, phone, DOB, password) 
| **Patient**(patient_id, person_id, main_symptoms, other_symptoms, symptoms_history)|
| **PublicHealthWorker**(health_worker_id, position, schedule, health_center_id, person_id) |
| **Adminstrator**(person_id, admin_id)|
| **Parental** (parental_id, person_id, parent_1_id, parent_2_id, guardian_id, child_id) |
| **PublicHealthCenter**(health_center_id, phone, name, address, city, province, postal_code, type, website) |
| **Diagnostic** (diagnostic_id, diagnostic_date, result, health_worker_id, health_center_id, person_id) |
| **Forms**(form_id, health_worker_id, patient_id)|
| **Symptoms**(main_symptoms, other_symptoms, history)|
| **GroupZone**(group_id, activity, name)|
| **Region**(region_id, region_name, city, posta_code, province)|
| **Alert**(alert_name, alert_level, region, status, date, time, current_alert, past_alert, message, person_id, guidelines)|


## Third Normal Form *3NF*
| After Normalisation                                                                                                                      |
|:------------------------------------------------------------------------------------------------------------------------------------------|
| **Person** (<ins>person_id</ins>, medicare, first_name, last_name, address, `postal_code_id`, citizenship, email, phone, DOB, `region_id`) 
| **Patient**(<ins>patient_id</ins>,`person_id`)|
| **PublicHealthWorker**(<ins>health_worker_id</ins>, `position_id`, schedule, `health_center_id`, `person_id`) |
| **Position**(<ins>position_id</ins>, position)
| **Adminstrator**(<ins>admin_id</ins>, `person_id`)|
| **Carer**(<ins>parental_id<ins>, `person_id`, parent_id, child_id)| 
| **PublicHealthCenter**(<ins>health_center_id</ins>, phone, name, address, website, `region_id`, type, method, drive-thru) |
| **Diagnostic** (<ins>diagnostic_id</ins>, diagnostic_date, result, `health_worker_id`, `health_center_id`, `patient_id`) |
| **Region**(<ins>region_id</ins>, `alert_id`)|
| **RegionPostalPivot** (`region_id`, `postal_code_id`)|
| **ProvinceCityPivot**(`city_id`, `province_id`)|
| **Province**(<ins>province_id</ins>, province)|
| **City**(<ins>city_id</ins>, city)|
| **PostalCityPivot**(`postal_code_id`, `city_id`)|
| **PostalCode**(<ins>postal_code_id<ins>, postal_code)|
| **Forms**(<ins>form_id</ins>, `health_worker_id`, `patient_id`, form_date)
| **FormsSymptomsPivot**(`symptom_id`, `form_id` symptom_date)
| **Symptoms**(<ins>symptom_id</ins>, symptom)
| **GroupZonePivot**(`person_id`,`group_id`)
| **GroupZone**(<ins>group_id<ins>, activity, name)|
| **Alert**(<ins>alert_id<ins>, `recommendation_id`, alert_info)|
| **Messages**(<ins>msg_id<ins> `region_id`, msg_date, `alert_id`, `person_id`)|
| **Recommendation**(<ins>recommendation_id<ins>, recommendation)|

<br>

The non-trivial functional dependencies are : <br>
**person_id**                   &#8594; medicare, first_name, last_name, citizenship, `region_id`, email, phone, DOB, address, `postal_code_id`.<br>
**patient_id**                  &#8594; `person_id`.                                                                                   <br>              
**position_id**                 &#8594;  position                                                                                      <br>
**admin_id**                    &#8594; `person_id`.                                                                                   <br>
**parental_id**                 &#8594; `person_id`, parent_id, child_id                                                               <br>
**health_center_id**            &#8594;  phone, name, address, website, `region_id`, type, method, drive-thru.                         <br>
**diagnostic_id**               &#8594;  diagnostic_date, result, `health_worker_id`, `health_center_id`, `patient_id`                 <br>                                     
**region_id**                   &#8594; `postal_code_id`, `alert_id`.                                                                  <br>
**province_id**                 &#8594;  province                                                                                      <br>
**city_id**                     &#8594;  city                                                                                          <br>
**postal_code_id**              &#8594;  postal_code                                                                                   <br>
**form_id**                     &#8594; `health_worker_id`, `patient_id`                                                               <br>
**symptom_id**                  &#8594;  symptom                                                                                       <br>
**group_id**                    &#8594;  activity, name                                                                                <br>
**alert_id**                    &#8594;  `recommendation_id`, alert_info                                                               <br>
**msg_id**                      &#8594;  msg_date, `region_id`, `alert_id`, `person_id`                                                <br>
**recommendation_id**           &#8594;  recommendation                                                                                <br>


There is no attributes that depend on non-key attributes in our tables. All dependent non-key attributes, do depend on the table's primary key.
There is functional dependency of the form `A`&#8594;`B`, `B` &#8594; `C`, `C` &#8594; `A`, so no violations here either.

## 4. Is the database in BCNF? Explain why or why not? show that it is in 3NF if not.

The database is already in *BCNF* normal form because for every functional dependency `X`&#8594;`Y`, `X` will be the *superkey* of the table.

As our schema is in *BCNF* form, all data redundancy based on functional dependencies have been removed.

## References
https://opentextbc.ca/dbdesign01/chapter/chapter-12-normalization/