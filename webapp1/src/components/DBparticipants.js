import React, {useState} from 'react';
import {div, Button, Row, Col} from "react-bootstrap";
import "../css/generalStyling.css";
import ReactDOM from 'react-dom';

const axios = require('axios').default;

const person= props =>{
    return(
        <Row>
            <Col>{props.serialID}</Col>
            <Col>{props.firstname}</Col>
            <Col>{props.lastname}</Col>
        </Row>
    )
};

export function DBparticipants() {
    let count =0;
    axios.get('https://swapi.dev/api/people/')
        .then(function (response) {
            count = response.data.count;
            console.log("1. this is a count : ", count);
        })
        .catch(function (error) {console.log("ERROR");})
        .then(function () {console.log("hi1");})
    let i=0;

    function printOut() {
        for(i=1; i<=count; i++){
            let strAdd = 'https://swapi.dev/api/people/' + i;
            console.log("this is strAdd : ", strAdd);
            axios.get(strAdd)
                .then(function (response) {
                    let obj1 = response.data;
                    console.log(". this is a obj1: ", obj1);
                    console.dir(obj1);
                })
                .catch(function (error) {console.log("ERROR");})
                .then(function () {console.log("hi");})
//            ReactDOM.render(eleRow, document.getElementByID(rows));
        }
    }

    return (
        <div id="DBdiv1">
            <p>  participants is exported </p>
            <Row>
                <column id="DBcol" >serial ID</column>
                <column id="DBcol">First Name</column>
                <column id="DBcol">Last Name</column>
            </Row>
            <Row>{printOut()}
            </Row>
        </div>

    );
}

export default DBparticipants;