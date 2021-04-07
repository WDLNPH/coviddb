import React, {useEffect, useMemo, useState} from 'react';
import {NavLink, Route, Switch} from "react-router-dom";
import CreateFacility from "./CreateFacility";
import EditFacility from "./EditFacility";
import {useHistory, useRouteMatch} from "react-router";
import Table from "../../Table";
import {readAllFacilities} from "../../../api";

const FACILITIES_COLUMNS = ['name', 'type', 'address', 'phone'];


export default function () {
    // Facilities
    const match = useRouteMatch();
    return  (
        <>
            <Switch>
                <Route path={`${match.url}/create`} component={CreateFacility}/>
                <Route path={`${match.url}/:facilityId`} component={EditFacility}/> {/* const {facilitiesId} = useParams(); */}
                <Route render={() => (
                    <>
                        <div className="mp-page-header">
                            <h1 className="mp-page-header-title">List of All Facilities</h1>
                            <NavLink to={`${match.url}/create`} className="mp-button w-max">Create a new Facility</NavLink>
                        </div>
                        <ListFacilities/>
                    </>
                )}/>
            </Switch>
        </>
    )
}

function ListFacilities() {
    const [facilities, setFacilities] = useState([]);
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    // componentDidMount
    useEffect(() => {
        async function loadFacilities() {
            setLoading(true);
            try {
                const {data} = await readAllFacilities();
                setFacilities(data);
            } catch (e) {
                // skip
            }
            setLoading(false);
        }
        loadFacilities()
    }, []);

    const memoizedColumns = useMemo(() => FACILITIES_COLUMNS.map(col => ({
        Header: col,
        accessor: col
    })), []);

    return loading ? '...' : <Table onClick={(facility) => history.push(`/facilities/${facility.health_center_id}`)} columns={memoizedColumns} data={facilities}/>;
}
