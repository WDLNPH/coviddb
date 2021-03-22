import React, {useEffect, useMemo, useState} from 'react';
import { Col, Row, Container} from "react-bootstrap";
import {useParams, useRouteMatch} from "react-router";
import {NavLink, Switch, Route} from "react-router-dom";
import axios from 'axios';
import Table from "./Table";

function TableHeader({name}) {
    return (
        <th className="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-600 font-bold tracking-wider uppercase text-xs">
            {name}
        </th>
    );
}
function TableTest() {
    return (
        <div className="overflow-x-auto bg-white rounded-lg shadow overflow-y-auto relative"
             style={{height: '405px'}}>
        <table className="border-collapse table-auto w-full whitespace-no-wrap bg-white table-striped relative">
            <thead>
                <tr className="text-left">
                    <th className="py-2 px-3 sticky top-0 border-b border-gray-200 bg-gray-100">
                        <label
                            className="text-teal-500 inline-flex justify-between items-center hover:bg-gray-200 px-2 py-2 rounded-lg cursor-pointer">
                            <input type="checkbox" className="form-checkbox focus:outline-none focus:shadow-outline"/>
                        </label>
                    </th>
                    <th className="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-600 font-bold tracking-wider uppercase text-xs">
                        ID
                    </th>
                    <TableHeader name="firstName"/>
                    <TableHeader name="lastName"/>
                    <TableHeader name="email"/>
                    <TableHeader name="gender"/>
                    <TableHeader name="phone"/>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="border-dashed border-t border-gray-200 px-3">
                        <label
                            className="text-teal-500 inline-flex justify-between items-center hover:bg-gray-200 px-2 py-2 rounded-lg cursor-pointer">
                            <input type="checkbox" className="form-checkbox rowCheckbox focus:outline-none focus:shadow-outline"/>
                        </label>
                    </td>
                    <td className="border-dashed border-t border-gray-200 userId">
                        <span className="text-gray-700 px-6 py-3 flex items-center" x-text="user.userId">User</span>
                    </td>
                    <td className="border-dashed border-t border-gray-200 firstName">
                        <span className="text-gray-700 px-6 py-3 flex items-center" x-text="user.firstName">aa</span>
                    </td>
                    <td className="border-dashed border-t border-gray-200 lastName">
                        <span className="text-gray-700 px-6 py-3 flex items-center" x-text="user.lastName">aa</span>
                    </td>
                    <td className="border-dashed border-t border-gray-200 emailAddress">
                        <span className="text-gray-700 px-6 py-3 flex items-center"
                              x-text="user.emailAddress">aa</span>
                    </td>
                    <td className="border-dashed border-t border-gray-200 gender">
                        <span className="text-gray-700 px-6 py-3 flex items-center"
                              x-text="user.gender">aa</span>
                    </td>
                    <td className="border-dashed border-t border-gray-200 phoneNumber">
                        <span className="text-gray-700 px-6 py-3 flex items-center"
                              x-text="user.phoneNumber">aaa</span>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
    )
}
export default function QueryResult() {
    const match = useRouteMatch();

    return <TableTest/>
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
