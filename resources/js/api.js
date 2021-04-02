import axios from 'axios';

export function fetchSymptoms() {
    return axios.get('symptoms');
}
