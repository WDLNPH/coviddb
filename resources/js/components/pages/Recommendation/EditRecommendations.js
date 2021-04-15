import React, {useEffect, useState} from 'react';
import RecommendationsForm from "./RecommendationsForm";
import {readOneRecommendation, updateRecommendation} from "../../../api";
import {useParams} from "react-router";

export default function () {
    const [recommendation, setRecommendation] = useState(null);
    const [loading, setLoading] = useState(false);
    const {recommendationId} = useParams();
    useEffect(() => {
        async function loadRecommendation() {
            setLoading(true);
            try {
                const {data} = await readOneRecommendation(parseInt(recommendationId))
                setRecommendation(data)
            } catch (e) {}
            setLoading(false);
        }
        loadRecommendation();
    }, [recommendationId]);

    return loading ? <>please wait</> : <RecommendationsForm recommendationsRequestPromise={values => updateRecommendation(recommendationId, values)} recommendation={recommendation}/>
}
