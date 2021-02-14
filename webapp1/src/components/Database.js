import React, {useState} from 'react';
import {body, Col, Row, Button, ButtonGroupProps, ButtonGroup, Nav} from "react-bootstrap";
import DBtests from "./DBtests";
import DBlinks from "./DBlinks";
import DBhcworker from "./DBhcworker";
import DBfacilities from "./DBfacilities";
import DBemployees from "./DBemployees";
import DBparticipants from "./DBparticipants";

export function Database() {

    const[option, setOption] = useState(0);

    return (
        <body className="container">
            <Row style={{margin:"10px"}}>
            <ButtonGroup aria-label="Basic example">
                <Button variant="secondary" onClick={() => {return setOption(1)}}>Participants</Button>
                <Button variant="secondary" onClick={() => {return setOption(2)}}>Parental Links</Button>
                <Button variant="secondary" onClick={() => {return setOption(3)}}>Administered Tests</Button>
                <Button variant="secondary" onClick={() => {return setOption(4)}}>Health Care Workers</Button>
                <Button variant="secondary" onClick={() => {return setOption(5)}}>Health Care Facilities</Button>
                <Button variant="secondary" onClick={() => {return setOption(6)}}>Employees</Button>
            </ButtonGroup>
            </Row>
            <Row style={{marginLeft:"10px"}}>
                {option==1 ? (<p><br/> participants works 1 <br/> <DBparticipants/></p>) : (<p></p>)}
                {option == 2 ? (<p><br/> links works <br/> <DBlinks/> </p>) : (<p><br/></p>)}
                {option == 3 ?(<p> <br/> test works <br/> <DBtests/> </p>):(<p><br/></p>)}
                {option == 4 ? (<p><br/> hs cowkrers works <br/> <DBhcworker/></p>) : (<p><br/></p>)}
                {option == 5? (<p><br/> facilities works <br/> <DBfacilities/></p>) : (<p><br/></p>)}
                {option == 6 ? (<p><br/> employees works <br/> <DBemployees/></p>) : (<p><br/></p>)}
            </Row>
            <Row></Row>
        </body>
    );
}

export default Database;
