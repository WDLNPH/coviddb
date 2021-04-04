import React, {useEffect, useMemo, useState} from 'react';
import {NavLink, Route, Switch} from "react-router-dom";
import CreateGroupZones from "./CreateGroupZone";
import EditGroupZones from "./EditGroupZones";
import {useRouteMatch} from "react-router";
import Table from "../../Table";
import {readAllGroupZones} from "../../../api";


const GROUP_ZONES_COLUMNS = ['name','type'];


export default function () {
    //groupZones
    const match = useRouteMatch();
    return  (
        <>
            <Switch>
                <Route path={`${match.url}/create`} component={CreateGroupZones}/>
                <Route path={`${match.url}/:GroupZoneId`} component={EditGroupZones}/> {/* const {patientId} = useParams(); */}
                <Route render={() => (
                    <>
                        <NavLink to={`${match.url}/create`}>Create a new group zone</NavLink>
                        <ListGroupZones/>
                    </>
                )}/>
            </Switch>
        </>
    )
}

function ListGroupZones() {
    const [groupZones, setGroupZones] = useState([]);
    const [loading, setLoading] = useState(false);

    // componentDidMount
    useEffect(() => {
        async function loadGroupZones() {
            setLoading(true);
            try {
                const {data} = await readAllGroupZones();
                setGroupZones(data);
            } catch (e) {
                // skip
            }
            setLoading(false);
        }
        loadGroupZones()
    }, []);

    const memoizedColumns = useMemo(() => GROUP_ZONES_COLUMNS.map(col => ({
        Header: col,
        accessor: col
    })), []);

    return loading ? '...' : <Table columns={memoizedColumns} data={groupZones}/>;
}
