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
import AllSymptoms from "./pages/Symptoms/AllSymptoms";
import AllDiagnostics from "./pages/Diagnostics/AllDiagnostics";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <div className="flex h-screen antialiased text-gray-900 bg-gray-100 dark:bg-dark dark:text-light">
            <BrowserRouter basename={process.env.MIX_APP_ENV === 'production' ? '/coviddb/portal' : '/portal'}>
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
                            <Route path="/symptoms" component={AllSymptoms}/>
                            <Route path="/follow-up-form" component={CreateForm}/>
                            <Route path="/diagnostics" component={AllDiagnostics}/>
                            <Route exact path="/" component={Dashboard}/>
                            <Route component={NotFound}/>
                        </Switch>
                    </div>
                    <StyledFooter/>
                </div>
                <ToastContainer />
            </BrowserRouter>
        </div>
    );
}

export default App;

