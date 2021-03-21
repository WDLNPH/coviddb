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
                <StyledNavbar/>
                <Container className="content">
                    <Switch>
                        <Route path="/query-result" component={QueryResult}/>
                        <Route path="/application" component={Search}/>
                        <Route path="/persons" component={}/>
                        <Route path="/workers" component={}/>
                        <Route path="/facilities" component={}/>
                        <Route path="/regions" component={}/>
                        <Route path="/groupzones" component={}/>
                        <Route path="/recommendationd" component={}/>
                        <Route path="/alerts" component={}/>
                        <Route path="/follow-up-form" component={}/>
                        <Route render={() => <Redirect to={'/query-result'}/>}/>
                    </Switch>
                </Container>
                <StyledFooter/>
            </BrowserRouter>
        </div>
    );
}

export default App;
