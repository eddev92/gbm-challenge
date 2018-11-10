// import Api from './api';
import { ROUTE_PROVIDER } from '../constants/routes'
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8000';
const catchFn = error => {
	console.log('error: ', error);
	// console.log('error: ', string, `${error.request.method} - ${error.config.url} - ${error.response.status ? error.response.status : '' } :`, JSON.stringify(error.response.data));
	return console.log(error.response);
};
const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
}
class ChallengeGbm {
	getData(){
        return axios.get(ROUTE_PROVIDER, headers)
            .then(response => {
                return response.data;
            })
            .catch(catchFn);
	}
}

export default ChallengeGbm;
