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

export function readOneRegions(regionId) {
    return axios.get('regions');
}

export function createRegion(region) {
    return axios.post('regions', region);
}

export function updateRegions(regionId, regions) {
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
export function readAllWorkers() {
    return axios.get('workers');
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
    return axios.post('facility', facility);
}

export function updateFacility(facilityId, facility) {
    return axios.put(`facility/${facilityId}`, facility);
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
