import React, {useEffect, useMemo, useState} from 'react';
import {NavLink, Route, Switch} from "react-router-dom";
import EditRegion from "../Region/EditRegion";
import {useHistory, useRouteMatch} from "react-router";
import Table from "../../Table";
import {readAllRegions} from "../../../api";

const REGIONS_COLUMNS = ['region_id', 'region_name', 'alert_info','cities','postal_codes'];

export default function () {
    // Regions
    const match = useRouteMatch();
    return  (
        <>
            <Switch>
                <Route path={`${match.url}/:regionId`} component={EditRegion}/> {/* const {regionsId} = useParams(); */}
                <Route render={() => (
                    <>
                        <div className="mp-page-header">
                            <h1 className="mp-page-header-title">All Regions</h1>
                        </div>
                        <ListRegions/>
                    </>
                )}/>
            </Switch>
        </>
    )
}

function ListRegions() {
    const [regions, setRegions] = useState([]);
    const [loading, setLoading] = useState(false);
    const history = useHistory();

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

    return loading ? '...' : <Table onClick={(region) =>  history.push(`/regions/${region.region_id}`)} columns={memoizedColumns} data={regions}/>;
}
