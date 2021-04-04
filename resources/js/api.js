import axios from 'axios';

export function fetchSymptoms() {
    return axios.get('symptoms');
}

export function readAllPatients() {
    return axios.get('patients');
}

export function readOnePatient(patientId) {
    return axios.get('patients');
}

export function createPatient(patient) {
    return axios.post('patients', patient);
}

export function updatePatient(patientId, patient) {
    return axios.put(`patients/${patientId}`, patient);
}


export function readAllWorkers() {
    return axios.get('workers');
}

export function readOneWorker(healthWorkerId) {
    return axios.get('workers');
}

export function createWorker(worker) {
    return axios.post('workers', worker);
}

export function updateWorker(worker_Id, worker) {
    return axios.put(`workers/${worker_Id}`, worker);
}

export function readAllFacilities() {
    return axios.get('facilities');
}

export function readOneFacilities(facilitiesId) {
    return axios.get('facilities');
}

export function createFacilities(facilities) {
    return axios.post('facilities', facilities);
}

export function updateFacilities(facilities_Id, facilities) {
    return axios.put(`facilities/${facilities_Id}`, facilities);
}
