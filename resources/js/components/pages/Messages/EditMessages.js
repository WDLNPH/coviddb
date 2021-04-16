import React, {useEffect, useState} from 'react';
import MessagesForm from "./MessagesForm";
import {readOneMessages, deleteMessages, updateMessages} from "../../../api";
import {useHistory, useParams} from "react-router";
import {toast} from "react-toastify";

export default function () {
    const [messages, setMessages] = useState(null);
    const [loading, setLoading] = useState(false);
    const {messagesId} = useParams();
    const history = useHistory();

    useEffect(() => {
        async function loadMessages() {
            setLoading(true);
            try {
                const {data} = await readOneMessages(parseInt(messagesId))
                setMessages(data)
            } catch (e) {

                toast.error("Could not find messages");
                history.push('/messages');
            }
            setLoading(false);
        }
        loadMessages();
    }, [messagesId]);

    return loading ? <>please wait</> : <MessagesForm removePromise={() => deleteMessages(messagesId)} upsertPromise={values => updateMessages(messagesId, values)} messages={messages}/>
}
