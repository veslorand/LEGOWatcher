import axios from 'axios';
import {BASE_URL, API_KEY} from '../config/BaseURL';

export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {'Content-Type': 'application/json'},
    params: {key: API_KEY}
});

// LEGO Sets
export const getLegoSets = params => {
    const url = `/sets?${params}`;
    return axiosInstance.get(url);
};

// LEGO Minifigs
export const getLegoMinifigs = params => {
    const url = `/minifigs?${params}`;
    return axiosInstance.get(url);
};

// Next Api Call for Sets or Parts - for pagination
// URL comes whith its token! from API, they did the work for us ;-)
export const getNextApiCall = absoluteUrl => {
    return axiosInstance.get(absoluteUrl);
};

// LEGO Themes
export const getLegoThemes = (params) => {
    const url = `/themes?${params}`;
    return axiosInstance.get(url);
};