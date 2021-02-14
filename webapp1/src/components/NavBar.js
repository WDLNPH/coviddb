import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

function StyledNavbar(){
    return (
        <Navbar
                style={{
                    backgroundImage: "linear-gradient(15deg, #B40808 0%, #FF7373 90%)",
                    height: "60px",
                }}
                variant="dark">
            <Navbar.Brand to="/home">COVID-19 Database</Navbar.Brand>
            <Nav className="mr-auto">
                <NavLink className="nav-link" to="/query-result">
                    Query/Result
                </NavLink>
                {/*<NavLink className="nav-link" to="/application">*/}
                {/*    Application*/}
                {/*</NavLink>*/}
            </Nav>
        </Navbar>
    );
}

export default StyledNavbar;
