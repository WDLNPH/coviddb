import React, {useState, useEffect} from 'react';
import {div, Button, Row, Col, Table} from "react-bootstrap";

const axios = require('axios').default;
// Whenever you return react elements, the function must be capitalized
const Person = props =>{
    return (
        <Row>
            <Col>{props.person.birth_year}</Col>
            <Col>{props.person.name}</Col>
            <Col>{props.person.gender}</Col>
        </Row>
    )
};

export function DBparticipants() {
    // If you remember, this is what I used last time to get the array in the Database Component
    const [people, setPeople] = useState([])

    // This is the key to everything, and we'll need to explain through vc how it works
    // Basically, this makes it so when the component runs for the first time, it loads
    // the API call to initialize your values. its a replacement for componentDidMount
    // See it here: https://reactjs.org/docs/hooks-effect.html
        useEffect(() => {
            axios.get('https://swapi.dev/api/people/')
                .then((response) => {
                    // Instead of doing the foreach, i add all of my results here
                    // I then run 1 call instead of 10, which is more efficient
                    setPeople(response.data.results);
                })
                .catch(function (error) {console.log("ERROR");})
                .then(function () {console.log("hi1");})
        },[])

    /**
     *
     * These are no longer needed, and you'll see by the way the state is used below
*/


    return (
        <div id="DBdiv1">
            <p>participants is exported </p>
            <Table>
            <Row>
                <column id="DBcol" >serial ID</column>
                <column id="DBcol">First Name</column>
                <column id="DBcol">Last Name</column>
            </Row>

            {/*<Row>{printOut()}</Row>*/}


            {/*
                Alright, so using the state, i'm passing over each array object
                to the component you've created. no need for the printOut! :)
            */}
            {people.map(person => <Person person={person}/>)}
            </Table>
        </div>

    );
}

export default DBparticipants;
