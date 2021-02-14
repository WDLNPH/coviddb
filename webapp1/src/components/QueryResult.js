import React, {useEffect, useMemo, useState} from 'react';
import { Col, Row, Container} from "react-bootstrap";
import {useParams, useRouteMatch} from "react-router";
import {NavLink, Switch, Route} from "react-router-dom";
import axios from 'axios';
import Table from "./Table";


const COLUMN_NAMES = [
    'first_name',
    'last_name',
    'dob',
    'email',
    'phone',
    'city'
];

export default function QueryResult() {
    const match = useRouteMatch();

    return (
        <>
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
        </>
    );
}

function CaseView() {
    const {caseNumber} = useParams();
    const [loading, setLoading] = useState(false);
    const [tuples, setTuples] = useState([]);
    const [query, setQuery] = useState("");
    const [columns, setColumns] = useState([]);
    const [description, setDescription] = useState("");
    useEffect(() => {
        setLoading(true);
        axios.get(`${process.env.REACT_APP_ENV === 'production' ? '/coviddb' : ''}/api/queries/${caseNumber}`)
            .then((response) => {
                // Instead of doing the foreach, i add all of my results here
                // I then run 1 call instead of 10, which is more efficient
                console.log(response.data.result);
                setTuples(response.data.result);
                setQuery(response.data.query);
                setDescription(response.data.description);
                setColumns(response.data.columns)
            })
            .catch(function (error) {console.log("ERROR");})
            .finally(function () {
                setLoading(false);
            })
        console.log(caseNumber);
    },[caseNumber]);

    const memoizedColumns = useMemo(() => columns.map(col => ({
        Header: col,
        accessor: col
    })), [columns])
    return (
        <>
            <Row className="mt-4">
                <Col>Case Description:</Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <div className="card">
                        <div className="card-body">
                            <Col>{loading ? '...' : description}</Col>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>SQL Query:</Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <div className="card">
                        <div className="card-body">
                            <pre>
                                <code>
                                    {loading ? '...' : query}
                                </code>
                            </pre>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>Result:</Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <div className="card">
                        <div className="card-body">
                            {loading ? '...' : <Table columns={memoizedColumns} data={tuples}/>}
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    );
}
