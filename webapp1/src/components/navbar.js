import React from "react";
import { Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'

function StyledNavbar(){
    return (
        <Navbar
                style={{
                    backgroundImage: "linear-gradient(15deg, #B40808 0%, #FF7373 90%)",
                    height: "60px",
                }}
                variant="dark">
            <Navbar.Brand href="/home">Covid Database</Navbar.Brand>
            <Nav className="mr-auto">
                <LinkContainer to="/database"><Nav.Link>Our Database</Nav.Link></LinkContainer>
                <Nav.Link href="/search">Search Our DataBase</Nav.Link>
            </Nav>
            <Nav style={{fontColor:"black"}}>
            <Nav.Link href="/aboutus" > About Us</Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default StyledNavbar;
