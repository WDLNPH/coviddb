import axios from 'axios';

export function fetchSymptoms() {
    return axios.get('symptoms');
}

export function createPatient(patient) {
    return axios.post('patients', patient);
}
export function updatePatient(patientId, patient) {
    return axios.put(`patients/${patientId}`, patient);
}
