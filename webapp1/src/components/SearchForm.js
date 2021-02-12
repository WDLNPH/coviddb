import React from "react";
import {StyledButton} from "../components/StyledButton"
import {Row, Col} from 'react-bootstrap';

export default function SearchForm(){
    return(
        <div className="container productwrap shadow-lg rounded mb-0"
             style={{padding: '20px', width: '40%', marginTop: '50px'}}>
        <form>
            <Row>
                <Col>
                    <forminput
                        label="Username"
                        name="username"
                        type="text"
                        placeholder="Username"
                    ></forminput>
                </Col>
                <Col>
                    <forminput
                        label="TEST"
                        name="username"
                        type="text"
                        placeholder="Username"
                    />
                </Col>
            </Row>
            <Row></Row>
            <Row>
                <StyledButton
                    type="submit"
                    label="Search"
                    className="button btn-block"
                    style={{width: '100px'}}
                    block="true"
                />
            </Row>

        </form>
        </div>

    );
}
