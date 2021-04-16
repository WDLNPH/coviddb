import React, {useEffect, useMemo, useState} from 'react';
import {NavLink, Route, Switch} from "react-router-dom";
import CreateMessages from "./CreateMessages";
import EditMessages from "./EditMessages";
import {useHistory, useRouteMatch} from "react-router";
import Table from "../../Table";
import {readAllMessages} from "../../../api";

const MESSAGES_COLUMNS = ['Messages'];

export default function () {
    //Messages
    const match = useRouteMatch();
    return  (
        <>
            <Switch>
                <Route path={`${match.url}/create`} component={CreateMessages}/>
                <Route path={`${match.url}/:messagesId`} component={EditMessages}/>
                <Route render={() => (
                    <>
                        <div className="mp-page-header">
                            <h1 className="mp-page-header-title">List of All Messages</h1>
                            <NavLink to={`${match.url}/create`} className="mp-button w-max">Create a new Messages</NavLink>
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
                console.log(data);
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
