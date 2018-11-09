import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Origin': 'http://localhost:3000'
    }
});

// Add a request interceptor
api.interceptors.request.use((config) => {
    // Do something before request is sent

    config.headers = config.headers || {};
    config.headers.Accept = 'application/json';
    console.log('entro REQUES CONFIG')

    return config;
}, (error) => {
    // Do something with request error
    console.log(error)
    return Promise.reject(error);
});

// Add a response interceptor
api.interceptors.response.use((response) => {

    return response;
}, (error) => {

    return Promise.reject(error);
    // Do something with response error
    // return Promise.reject(error);
  });

export default api;
