import { API_PREFIX } from "./http";

export const ENDPOINTS_KEYS = {
    LOGIN : 'login',
    GET_QUEUE : 'getNextTransmissionInQueue',
    SUMIT_TRANSCRIPTION : 'submitTranscription',
}


const API_ENDPOINTS = {
    [ENDPOINTS_KEYS.LOGIN] : `${API_PREFIX}/login`,
    [ENDPOINTS_KEYS.GET_QUEUE] : `${API_PREFIX}/getNextTransmissionInQueue`,
    [ENDPOINTS_KEYS.SUMIT_TRANSCRIPTION] : `${API_PREFIX}/submitTranscription`,
}

export default API_ENDPOINTS;