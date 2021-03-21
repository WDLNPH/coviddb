import StyledNavbar from "./NavBar"
import QueryResult from "./QueryResult"
import StyledFooter from "./Footer";
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";
import {Redirect} from "react-router";
import {Container} from "react-bootstrap";
import React from "react";
import AllPeople from "./pages/Person/AllPeople";
import AllRegions from "./pages/Region/AllRegions";
import AllAlerts from "./pages/Alert/AllAlerts";
import AllFacilities from "./pages/Facility/AllFacilities";
import AllGroupZones from "./pages/GroupZone/AllGroupZones";
import AllRecommendations from "./pages/Recommendation/AllRecommendations";
import AllWorkers from "./pages/Worker/AllWorkers";
import CreateForm from "./pages/Form/CreateForm";

function App() {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <BrowserRouter basename="/app">
                <StyledNavbar/>
                <Container className="content">
                    <Switch>
                        <Route path="/query-result" component={QueryResult}/>
                        <Route path="/persons" component={AllPeople}/>
                        <Route path="/workers" component={AllWorkers}/>
                        <Route path="/facilities" component={AllFacilities}/>
                        <Route path="/regions" component={AllRegions}/>
                        <Route path="/groupzones" component={AllGroupZones}/>
                        <Route path="/recommendationd" component={AllRecommendations}/>
                        <Route path="/alerts" component={AllAlerts}/>
                        <Route path="/follow-up-form" component={CreateForm}/>
                        <Route render={() => <Redirect to={'/query-result'}/>}/>
                    </Switch>
                </Container>
                <StyledFooter/>
            </BrowserRouter>
        </div>
    );
}

export default App;
