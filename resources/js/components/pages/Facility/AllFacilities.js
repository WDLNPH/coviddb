import React, {useEffect, useMemo, useState} from 'react';
import {NavLink, Route, Switch} from "react-router-dom";
import CreateFacilities from "./CreateFacilities";
import EditFacilities from "./EditFacilities";
import {useRouteMatch} from "react-router";
import Table from "../../Table";
import {readAllFacilities} from "../../../api";

const FACILITIES_COLUMNS = ['facility_name', 'type', 'website', 'phone', 'province'];


export default function () {
    // /Facilities
    const match = useRouteMatch();
    return  (
        <>
            <Switch>
                <Route path={`${match.url}/create`} component={CreateFacilities}/>
                <Route path={`${match.url}/:facilityId`} component={EditFacilities}/> {/* const {facilitiesId} = useParams(); */}
                <Route render={() => (
                    <>
                        <NavLink to={`${match.url}/create`}>Create a new Facility</NavLink>
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

    return loading ? '...' : <Table columns={memoizedColumns} data={facilities}/>;
}
