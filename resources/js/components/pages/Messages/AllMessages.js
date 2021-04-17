import React, {useEffect, useMemo, useState} from 'react';
import {NavLink, Route, Switch} from "react-router-dom";
import CreateMessages from "./CreateMessages";
import EditMessages from "./EditMessages";
import {useHistory, useRouteMatch} from "react-router";
import Table from "../../Table";
import {readAllMessages} from "../../../api";

const MESSAGES_COLUMNS = ['message','msg_date'];

export default function () {
    //Messages
    const match = useRouteMatch();
    return  (
        <>
            <Switch>
                <Route render={() => (
                    <>
                        <div className="mp-page-header">
                            <h1 className="mp-page-header-title">List of All Messages</h1>
                        </div>
                        <ListMessages/>
                    </>
                )}/>
            </Switch>
        </>
    )
}

function ListMessages() {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const history = useHistory()

    // componentDidMount
    useEffect(() => {
        async function loadMessages() {
            setLoading(true);
            try {
                const {data} = await readAllMessages();
                setMessages(data);
            } catch (e) {
                // skip
            }
            setLoading(false);
        }
        loadMessages()
    }, []);

    const memoizedColumns = useMemo(() => MESSAGES_COLUMNS.map(col => ({
        Header: col,
        accessor: col
    })), []);

    return loading ? '...' : <Table onClick={(messages) =>  history.push(`/messages/${messages.messages_id}`)} columns={memoizedColumns} data={messages}/>;
}
