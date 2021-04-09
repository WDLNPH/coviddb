import React from 'react';
import RecommendationsForm from "./RecommendationsForm";
import {createRecommendations} from "../../../api";

export default function () {
    return <RecommendationsForm recommendationsRequestPromise={createRecommendations}/>
}
