import React from 'react';
import RecommendationsForm from "./RecommendationsForm";
import {createRecommendation} from "../../../api";

export default function () {
    return <RecommendationsForm recommendationsRequestPromise={createRecommendation}/>
}
