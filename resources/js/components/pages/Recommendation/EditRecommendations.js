import React, {useEffect, useState} from 'react';
import RecommendationsForm from "./RecommendationsForm";
import {readOneRecommendations, updateRecommendations} from "../../../api";
import {useParams} from "react-router";

export default function () {
    const [recommendations, setRecommendations] = useState(null);
    const [loading, setLoading] = useState(false);
    const {recommendationsId} = useParams();
    useEffect(() => {
        async function loadRecommendations() {
            setLoading(true);
            try {
                const {data} = await readOneRecommendations(parseInt(recommendationsId))
                setRecommendations(data)
            } catch (e) {}
            setLoading(false);
        }
        loadRecommendations();
    }, [recommendationsId]);

    return loading ? <>please wait</> : <RecommendationsForm recommendationsRequestPromise={values => updateRecommendations(recommendationsId, values)} recommendations={recommendations}/>
}
