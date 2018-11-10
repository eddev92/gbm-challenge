import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
axios.defaults.headers.post['Content-Type'] = 'application/json';

class Api {

    static init(){
            global.axiosApi = axios.create({
                baseURL: 'http://localhost:8000/',
                headers: { 
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                } 
            });
            // Add request interceptor
            global.axiosApi.interceptors.request.use((config) => {
                console.log('\x1b[36m%s\x1b[34m%s\x1b[0m', `${config.method.toUpperCase()}  - ${config.url} :`, JSON.stringify(config));
                return config;
            }, (error) => {
                return Promise.reject(error);
            });
            // Add a response interceptor
            global.axiosApi.interceptors.response.use((response) => {
                console.log('HAY RESPONSE INTERCEPTOR', response)
                console.log('\x1b[36m%s\x1b[34m%s\x1b[0m', `${response.status}  -  ${response.config.url} :`, JSON.stringify(response.data));
                return response;
            }, (error) => {
                return Promise.reject(error);
            });
        }
        static mockAxios(){
            return new MockAdapter(global.axiosApi);
        }
        constructor(){
            this.api = global.axiosApi;
        }
        get Api(){
            return this.api;
        }
}

export default Api;
