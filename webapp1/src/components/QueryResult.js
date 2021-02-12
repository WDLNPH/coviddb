import React, {useEffect, useState} from 'react';
import { Col, Row, Button, Tabs, Tab, ButtonGroup, Nav, Container} from "react-bootstrap";
import {useParams, useRouteMatch} from "react-router";
import {NavLink, Switch, Route} from "react-router-dom";
import axios from 'axios';

export default function QueryResult() {
    const match = useRouteMatch();
    const [option, setOption] = useState(0);

    return (
        <Container>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <NavLink className="nav-link" to={`${match.url}/case-one`}>Case One</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to={`${match.url}/case-two`}>Case Two</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to={`${match.url}/case-three`}>Case Three</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to={`${match.url}/case-four`}>Case Four</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to={`${match.url}/case-five`}>Case Five</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to={`${match.url}/case-six`}>Case Six</NavLink>
                </li>
            </ul>
            <Switch>
                <Route path={`${match.url}/:caseNumber`} component={CaseView}/>
            </Switch>
            <Row></Row>
        </Container>
    );
}

function CaseView() {
    const {caseNumber} = useParams();
    const [loading, setLoading] = useState(false);
    const [tuples, setTuples] = useState([]);
    const [query, setQuery] = useState("");
    useEffect(() => {
        setLoading(true);
        axios.get('https://swapi.dev/api/people/')
            .then((response) => {
                // Instead of doing the foreach, i add all of my results here
                // I then run 1 call instead of 10, which is more efficient
                console.log(response.data.results);
                setTuples(response.data.results);

                // setPeople(response.data.results);
            })
            .catch(function (error) {console.log("ERROR");})
            .finally(function () {
                setLoading(false);
            })
        console.log(caseNumber);
    },[caseNumber])
    return loading ? (
            <>loading</>
        ) : tuples.map(tuple => <>{JSON.stringify(tuple)}<br/></>);
}
