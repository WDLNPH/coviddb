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
import AllPatients from "./pages/Person/AllPatients";
import AllAlerts from "./pages/Alert/AllAlerts";
import AllFacilities from "./pages/Facility/AllFacilities";
import AllGroupZones from "./pages/GroupZone/AllGroupZones";
import AllRecommendations from "./pages/Recommendation/AllRecommendations";
import AllWorkers from "./pages/Worker/AllWorker";
import CreateForm from "./pages/Form/CreateForm";
import AllRegions from "./pages/Region/AllRegions";
import Dashboard from "./pages/Dashboard/Dashboard";
import NotFound from "./pages/NotFound/NotFound";

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
                            <Route exact path="/" component={Dashboard}/>
                            <Route component={NotFound}/>
                        </Switch>
                    </div>
                    <StyledFooter/>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;

