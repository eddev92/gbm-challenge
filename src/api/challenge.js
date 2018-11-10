// import Api from './api';
import { ROUTE_PROVIDER, HEADERS_REQUEST } from '../constants/routes'
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8000';
const catchFn = error => {
	console.log('error: ', error);
	return console.log(error.response);
};

class ChallengeGbm {
	getData(){
        return axios.get(ROUTE_PROVIDER, HEADERS_REQUEST)
            .then(response => {
                return response.data;
            })
            .catch(catchFn);
    }
    getUser(auth){
        return axios.post('/user', auth, HEADERS_REQUEST)
            .then(response => {
                return response.data;
            })
            .catch(catchFn);
    }
}

export default ChallengeGbm;
