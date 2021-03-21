import StyledNavbar from "./NavBar"
import QueryResult from "./QueryResult"
import Search from "./Search"
import StyledFooter from "./Footer";
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";
import {Redirect} from "react-router";
import {Container} from "react-bootstrap";
import React from "react";


function App() {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <BrowserRouter basename="/app">
                <header>
                    <StyledNavbar/>
                </header>
                <Container className="content">
                    <Switch>
                        <Route path="/query-result" component={QueryResult}/>
                        <Route path="/application" component={Search}/>
                        <Route render={() => <Redirect to={'/query-result'}/>}/>
                    </Switch>
                </Container>
                <StyledFooter/>
            </BrowserRouter>
        </div>
    );
}

export default App;
