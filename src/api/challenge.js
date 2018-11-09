import { ROUTE_PROVIDER } from '../constants/routes/index'
import _api from '../config/axios';
import { Service } from '../config/service';
import * as tunnel from 'tunnel';
import axios, { AxiosInstance } from 'axios';

const agent = tunnel.httpsOverHttp({
    proxy: {
        host: 'proxy.mycorp.com',
        port: 8000,
    },
});
const axiosClient = axios.create({
    baseURL: 'https://some.api.com:443',
    httpsAgent: agent,
    proxy: false,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
     }   
});
class ChallengeGbm {

    getData() {        
            // return new Promise((resolve, reject) => {
            //     this.api.get(ROUTE_PROVIDER, {})
            //     .then((response) => {
            //         return resolve(response.data);
            //     })
            //     .catch((error) => {
            //         return console.log(error)
            //     });
            // })
const  headers = {
    Authorization: '',
    'Content-Type': 'application/json',
    Accept: 'application/json',
 }
            return axios.get(ROUTE_PROVIDER, headers)
            .then((response) => {
                console.log('RESPONSE ChallengeGbm', response)
                         return response.data;
                     })
                     .catch((error) => {
                         return console.log('ERROR ChallengeGbm: ', error)
                     });
    }
}

export default ChallengeGbm;
