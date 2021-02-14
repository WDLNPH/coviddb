import StyledNavbar from "./components/NavBar"
import Home from "./components/Home";
import QueryResult from "./components/QueryResult"
import Search from "./components/Search"
import StyledFooter from "./components/Footer";
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
            <BrowserRouter basename="/portal">
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
