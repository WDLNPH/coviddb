import React, {useEffect, useState} from 'react';
import RecommendationsForm from "./RecommendationsForm";
import {readOneRecommendation, deleteRecommendation, updateRecommendation} from "../../../api";
import {useHistory, useParams} from "react-router";
import {toast} from "react-toastify";

export default function () {
    const [recommendation, setRecommendation] = useState(null);
    const [loading, setLoading] = useState(false);
    const {recommendationId} = useParams();
    const history = useHistory();

    useEffect(() => {
        async function loadRecommendation() {
            setLoading(true);
            try {
                const {data} = await readOneRecommendation(parseInt(recommendationId))
                setRecommendation(data)
            } catch (e) {

                toast.error("Could not find recommendation");
                history.push('/recommendations');
            }
            setLoading(false);
        }
        loadRecommendation();
    }, [recommendationId]);

    return loading ? <>please wait</> : <RecommendationsForm removePromise={() => deleteRecommendation(recommendationId)} upsertPromise={values => updateRecommendation(recommendationId, values)} recommendation={recommendation}/>
}
