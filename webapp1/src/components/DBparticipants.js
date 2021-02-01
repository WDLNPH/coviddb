import React, {useState} from 'react';
import {div, Button, Row, Col} from "react-bootstrap";
import "../css/generalStyling.css";
import ReactDOM from 'react-dom';

const axios = require('axios').default;

export function DBparticipants() {
    const [person, setPerson] = useState(null);
    const [people, setPeople] = useState([]);

    let count =0;
    axios.get('https://swapi.dev/api/people/')
        .then(function (response) {
            count = response.data.count;
            console.log("1. this is a count : ", count);

        })
        .catch(function (error) {console.log("ERROR");})
        .then(function () {console.log(people);})
    let i=0;
/*
    function printOut(count) {
        for(i=1; i<=count; i++){
            let abc = document.getElementById("DBdiv1");
            let rowid = "Row"+i;
            console.log(rowid);
            let rows = document.createElement('Row');
            rows.id=rowid;
            abc.appendChild(rows)

            let strAdd = 'https://swapi.dev/api/people/' + i;
            console.log("this is strAdd : ", strAdd);
            let eleRow = <Row>
                <Col>test1</Col>
                <Col>test2</Col>
            </Row>
            ReactDOM.render(eleRow, document.getElementByID(rows));
        }
    }
*/
    return (
        <div id="DBdiv1">
            <p>  participants is exported </p>
            <Row>
                <column id="DBcol" >serial ID</column>
                <column id="DBcol">First Name</column>
                <column id="DBcol">Last Name</column>
                <column id="DBcol">Date of Birth</column>
                <column id="DBcol">Medicare ID</column>
                <column id="DBcol">Phone</column>
                <column id="DBcol">Address</column>
                <column id="DBcol">City</column>
                <column id="DBcol">Province</column>
                <column id="DBcol">Postal Code</column>
                <column id="DBcol">Citizenship</column>
                <column id="DBcol">E-mail</column>
            </Row>
            <Row >
                {person ? (<div id="displayer">{person.name}</div>) : (<div ></div>)}
                {people.map(function (people) {return (<div> <p>test</p>{people.name}</div>)})}
            </Row>

        </div>

    );
}

export default DBparticipants;