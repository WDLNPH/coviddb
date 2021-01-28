import React, {useState} from 'react';
import {body, Col, Row, Button, ButtonGroupProps, ButtonGroup, Nav} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

const axios = require('axios').default;

function patients() {
    let abc = document.getElementById("displayer");
    let cbd = document.createElement("p");
    cbd.className="bg-red rounded-pill";
    cbd.innerHTML="test";
    return (
        abc.appendChild(cbd)
    );
}

export function Database() {

    const [person, setPerson] = useState(null);
    const [people, setPeople] = useState([]);

    function gUA() {
        let abc = document.getElementById("displayer");
        let bcd = document.createElement("p");
        bcd.className = "bg-red rounded-pill";
        return (
            axios.get('https://swapi.dev/api/people')
                .then(function (response) {
                    console.log(response.data);
                    console.log(JSON.stringify(response.data));
                    // setPerson(response.data)
                    setPeople(response.data.results);
                    // bcd.innerHTML = JSON.stringify(response.data);
                    // abc.appendChild(bcd);
                })
                .catch(function (error) {
                    console.log(error)
                    console.log("ERROR");
                })
                .then(function () {console.log("hi");})
        );
    }

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
                {person ? (
                <div id="displayer">{person.name}</div>
                ) : <div> there is not a person loaded yet</div>}
                {people.map(function (guy) {
                    return (
                        <>
                        <div>{guy.name}</div><br/>
                        </>
                    );
                })}
            </Row>
            <Row></Row>
        </body>
    );
}

export default Database;
