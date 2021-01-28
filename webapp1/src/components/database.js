import React from 'react';
import {body, Col, Row, Button, ButtonGroupProps, ButtonGroup, Nav} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

const axios = require('axios').default;

function gUA() {
    let abc = document.getElementById("displayer");
    let bcd = document.createElement("p");
    bcd.className = "bg-red rounded-pill";
return(
    axios.get('https://swapi.dev/api/people/1/')
        .then(function (response) {
            console.log(response.data);
            console.log(JSON.stringify(response.data));
           /* let test = JSON.parse(response.data);
            for (let i = 0; i < test.length; i++) {
                console.log(test[i]['price']);
            }
*/
            bcd.innerHTML = JSON.stringify(response.data);
            abc.appendChild(bcd);
        })
        .catch(function (error) {
            console.log(error)
            console.log("ERROR");
        })
        .then(function () {console.log("hi");})
    );
}
function patients() {
    let abc = document.getElementById("displayer");
    let cbd = document.createElement("p");
    cbd.className="bg-red rounded-pill";
    cbd.innerHTML="test";
    return (
        abc.appendChild(cbd)
    );
}

function database() {

    return (
        <body className="container" style={{border: "solid"}}>
            <p>Database tabs</p>
            <Row style={{margin:"10px"}}>
            <ButtonGroup aria-label="Basic example">
                <Button variant="secondary" onClick={patients}>Participants</Button>
                <Button variant="secondary" onClick={gUA}>Parental Links</Button>
                <Button variant="secondary">Administered Tests</Button>
                <Button variant="secondary">Health Care Workers</Button>
                <Button variant="secondary">Health Care Facilities</Button>
                <Button variant="secondary">Employees</Button>
            </ButtonGroup>
            </Row>
        <Row >
            <div id="displayer"></div>
        </Row>
        <Row></Row>

        </body>
    );
}

export default database;