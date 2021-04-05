import React, {useEffect, useMemo, useState} from 'react';
import {NavLink, Route, Switch} from "react-router-dom";
import CreateRegion from "./CreateRegion";
import EditRegion from "./EditRegion";
import {useRouteMatch} from "react-router";
import Table from "../../Table";
import {readAllRegions} from "../../../api";


const REGIONS_COLUMNS = ['region name','alert level'];


export default function () {
    //regions
    const match = useRouteMatch();
    return  (
        <>
            <Switch>
                <Route path={`${match.url}/create`} component={CreateRegion}/>
                <Route path={`${match.url}/:regionId`} component={EditRegion}/> {/* const {patientId} = useParams(); */}
                <Route render={() => (
                    <>
                        <NavLink to={`${match.url}/create`}>Create a new Region</NavLink>
                        <ListRegions/>
                    </>
                )}/>
            </Switch>
        </>
    )
}

function ListRegions() {
    const [Regions, setRegions] = useState([]);
    const [loading, setLoading] = useState(false);

    // componentDidMount
    useEffect(() => {
        async function loadRegions() {
            setLoading(true);
            try {
                const {data} = await readAllRegions();
                setRegions(data);
            } catch (e) {
                // skip
            }
            setLoading(false);
        }
        loadRegions()
    }, []);

    const memoizedColumns = useMemo(() => REGIONS_COLUMNS.map(col => ({
        Header: col,
        accessor: col
    })), []);

    return loading ? '...' : <Table columns={memoizedColumns} data={Regions}/>;
}
