import logo from './logo.svg';
import StyledNavbar from "./components/navbar"
import Home from "./components/Home";
import QueryResult from "./components/QueryResult"
import Search from "./components/Search"
import StyledFooter from "./components/footer";
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";


function App() {
    const Route = require("react-router-dom").Route;
    const Link = require("react-router-dom").Link;

    return (
    <div>
        <BrowserRouter>
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
