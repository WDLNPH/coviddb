import React from 'react';
import {body, Col, Row, Button, ButtonGroupProps, ButtonGroup, Nav} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

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
                <Button variant="secondary" onClick={patients}>Parental Links</Button>
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