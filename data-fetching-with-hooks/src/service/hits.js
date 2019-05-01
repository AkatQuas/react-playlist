import http from '../http';

export const getHits = (params) => http.get('/hits', { params });