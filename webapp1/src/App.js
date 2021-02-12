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


function App() {
    return (
        <div>
            <BrowserRouter basename="/portal">
                <header>
                    <StyledNavbar/>
                </header>
                <body>
                    <Switch>
                        <Route path="/query-result" component={QueryResult}/>
                        <Route path="/application" component={Search}/>
                        <Route component={Home}/>
                    </Switch>
                </body>
                <StyledFooter/>
            </BrowserRouter>
        </div>
  );
}

export default App;
