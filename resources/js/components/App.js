import StyledNavbar from "./NavBar"
import QueryResult from "./QueryResult"
import StyledFooter from "./Footer";
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";
import {Redirect} from "react-router";
import Sidebar from "./layout/Sidebar";
import Navbar from "./layout/Navbar";
import React from "react";
import AllPatients from "./pages/Person/AllPeople";
import AllRegions from "./pages/Region/AllRegions";
import AllAlerts from "./pages/Alert/AllAlerts";
import AllFacilities from "./pages/Facility/FacilitiesForm";
import AllGroupZones from "./pages/GroupZone/GroupZonesForm";
import AllRecommendations from "./pages/Recommendation/AllRecommendations";
import AllWorkers from "./pages/Worker/WorkerForm";
import CreateForm from "./pages/Form/CreateForm";

function App() {
    return (
        <div className="flex h-screen antialiased text-gray-900 bg-gray-100 dark:bg-dark dark:text-light">
            <BrowserRouter basename="/app">
                <Sidebar/>
                <div className="flex flex-col flex-1 min-h-screen overflow-x-hidden overflow-y-auto">
                    <Navbar/>
                    <div className="flex flex-1 flex-col p-5">
                        <Switch>
                            <Route path="/query-result" component={QueryResult}/>
                            <Route path="/patients" component={AllPatients}/>  {/*      */}
                            <Route path="/workers" component={AllWorkers}/>
                            <Route path="/facilities" component={AllFacilities}/>
                            <Route path="/regions" component={AllRegions}/>
                            <Route path="/groupzones" component={AllGroupZones}/>
                            <Route path="/recommendations" component={AllRecommendations}/>
                            <Route path="/alerts" component={AllAlerts}/>
                            <Route path="/follow-up-form" component={CreateForm}/>
                            <Route render={() => <Redirect to={'/query-result'}/>}/>
                        </Switch>
                    </div>
                    <StyledFooter/>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
