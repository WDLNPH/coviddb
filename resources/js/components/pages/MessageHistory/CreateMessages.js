import React from 'react';
import MessagesForm from "./MessagesForm";
import {createMessages} from "../../../api";

export default function () {
    return <MessagessForm upsertPromise={createMessages}/>
}
