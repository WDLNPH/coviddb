import React, {useEffect, useMemo, useState} from 'react';
import {NavLink, Route, Switch} from "react-router-dom";
import CreateRecommendations from "./CreateRecommendations";
import EditRecommendations from "./EditRecommendations";
import {useHistory, useRouteMatch} from "react-router";
import Table from "../../Table";
import {readAllRecommendations} from "../../../api";

const RECOMMENDATIONS_COLUMNS = ['Recommendation'];

export default function () {
    //Recommendations
    const match = useRouteMatch();
    return  (
        <>
            <Switch>
                <Route path={`${match.url}/create`} component={CreateRecommendations}/>
                <Route path={`${match.url}/:recommendationsId`} component={EditRecommendations}/>
                <Route render={() => (
                    <>
                        <div className="mp-page-header">
                            <h1 className="mp-page-header-title">List of All Recommendations</h1>
                            <NavLink to={`${match.url}/create`} className="mp-button w-max">Create a new Recommendations</NavLink>
                        </div>
                        <ListRecommendations/>
                    </>
                )}/>
            </Switch>
        </>
    )
}

function ListRecommendations() {
    const [recommendations, setRecommendations] = useState([]);
    const [loading, setLoading] = useState(false);
    const history = useHistory()

    // componentDidMount
    useEffect(() => {
        async function loadRecommendations() {
            setLoading(true);
            try {
                const {data} = await readAllRecommendations();
                console.log(data);
                setRecommendations(data);
            } catch (e) {
                // skip
            }
            setLoading(false);
        }
        loadRecommendations()
    }, []);

    const memoizedColumns = useMemo(() => RECOMMENDATIONS_COLUMNS.map(col => ({
        Header: col,
        accessor: col
    })), []);

    return loading ? '...' : <Table onClick={(worker) =>  history.push(`/recommendations/${recommendations.recommendations_id}`)} columns={memoizedColumns} data={recommendations}/>;
}
