import axios from 'axios';

export function fetchSymptoms() {
    return axios.get('symptoms');
}

////////////////////// Regions

export function fetchStats(postalCode) {
    return axios.get('dashboard-stats');
}

export function autocompleteRegions(postalCode) {
    return axios.get('regions/autocomplete', {params: {
        postal_code: postalCode
    }});
}

export function readAllRegions() {
    return axios.get('regions');
}

export function readOneRegion(regionId) {
    return axios.get(`regions/${regionId}`);
}

export function createRegion(region) {
    return axios.post('regions', region);
}

export function updateRegion(regionId, regions) {
    return axios.put(`regions/${regionId}`, regions);
}


////////////////////// Patients
export function readAllPatients() {
    return axios.get('patients');
}

export function readOnePatient(patientId) {
    return axios.get(`patients/${patientId}`);
}

export function createPatient(patient) {
    return axios.post('patients', patient);
}

export function updatePatient(patientId, patient) {
    return axios.put(`patients/${patientId}`, patient);
}

////////////////////// Workers
export function readAllWorkers(params) {
    return axios.get('workers',{params});
}

export function readOneWorker(healthWorkerId) {
    return axios.get(`workers/${healthWorkerId}`);
}

export function createWorker(worker) {
    return axios.post('workers', worker);
}

export function updateWorker(worker_Id, worker) {
    return axios.put(`workers/${worker_Id}`, worker);
}
////////////////////// Facilities
export function readAllFacilities() {
    return axios.get('facilities');
}

export function readOneFacility(facilityId) {
    return axios.get(`facilities/${facilityId}`);
}

export function createFacility(facility) {
    return axios.post('facilities', facility);
}

export function updateFacility(facilityId, facility) {
    return axios.put(`facilities/${facilityId}`, facility);
}

////////////////////// Positions

export function readAllPositions() {
    return axios.get('positions');
}

////////////////////// Group Zone

export function readAllGroupZones() {
    return axios.get('group-zones');
}

export function readOneGroupZone(groupZoneId) {
    return axios.get(`group-zones/${groupZoneId}`);
}

export function createGroupZone(groupZones) {
    return axios.post('group-zones', groupZones);
}

export function updateGroupZone(groupZonesId, groupZones) {
    return axios.put(`group-zones/${groupZonesId}`, groupZones);
}
////////////////////// Symptoms

export function readAllSymptoms() {
    return axios.get('symptoms');
}

export function readOneSymptoms(symptomsId) {
    return axios.get(`symptoms/${symptomsId}`);
}

export function createSymptoms(symptoms) {
    return axios.post('symptoms', symptoms);
}

export function updateSymptoms(symptomsId, symptoms) {
    return axios.put(`symptoms/${symptomsId}`, symptoms);
}
//////////////////////Recommendations

export function readAllRecommendations() {
    return axios.get('recommendations');
}

export function readOneRecommendation(recommendationId) {
    return axios.get(`recommendations/${recommendationId}`);
}

export function createRecommendation(recommendation) {
    return axios.post('recommendations', recommendation);
}

export function updateRecommendation(recommendationId, recommendations) {
    return axios.put(`recommendations/${recommendationId}`, recommendations);
}
//////////////////////Diagnostics

export function readAllDiagnostics() {
    return axios.get('diagnostics');
}

export function readOneDiagnostics(diagnosticsId) {
    return axios.get(`diagnostics/${diagnosticsId}`);
}

export function createDiagnostics(diagnostics) {
    return axios.post('diagnostics', diagnostics);
}

