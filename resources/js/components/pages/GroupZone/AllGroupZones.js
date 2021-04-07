import React, {useEffect, useMemo, useState} from 'react';
import {NavLink, Route, Switch} from "react-router-dom";
import CreateGroupZone from "./CreateGroupZone";
import EditGroupZone from "./EditGroupZone";
import {useHistory, useRouteMatch} from "react-router";
import Table from "../../Table";
import {readAllGroupZones} from "../../../api";


const GROUP_ZONES_COLUMNS = ['name','type'];


export default function () {
    //groupZones
    const match = useRouteMatch();
    return  (
        <>
            <Switch>
                <Route path={`${match.url}/create`} component={CreateGroupZone}/>
                <Route path={`${match.url}/:groupZoneId`} component={EditGroupZone}/>
                <Route render={() => (
                    <>
                        <div className="mp-page-header">
                            <h1 className="mp-page-header-title">List of All Group Zones</h1>
                            <NavLink to={`${match.url}/create`} className="mp-button w-max">Create a new GroupZone</NavLink>
                        </div>
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
    const history = useHistory();
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

    return loading ? '...' : <Table onClick={(groupZone) => history.push(`/groupzones/${groupZone.group_id}`)} columns={memoizedColumns} data={groupZones}/>;
}
