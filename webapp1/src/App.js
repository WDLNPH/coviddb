import logo from './logo.svg';
import StyledNavbar from "./components/navbar"
import home from "./components/home";
import aboutus from "./components/aboutus";
import database from "./components/database";
import searchform from "./components/searchform"
import StyledFooter from "./components/footer";
import {header,} from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";


function App() {
    const BrowserRouter = require("react-router-dom").BrowserRouter;
    const Route = require("react-router-dom").Route;
    const Link = require("react-router-dom").Link;

    return (
    <div>
        <Router>
        <header>
            <StyledNavbar/>
                <div>
                    <Route path="/home" exact component={home}/>
                    <Route path="/database" exact component={database}/>
                    <Route path="/search" exact component={searchform}/>
                    <Route path="/aboutus" exact component={aboutus}/>
                </div>
        </header>
        <StyledFooter/>
    </Router>
</div>
  );
}

export default App;
