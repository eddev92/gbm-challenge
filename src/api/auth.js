import { ROUTE_PROVIDER, HEADERS_REQUEST } from '../constants/routes'
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8000';
const catchFn = error => {
	console.log('error: ', error);
	return console.log(error.response);
};

class Auth {
    AuthUser() {
        // return axios.get('/auth.json', HEADERS_REQUEST)
        //     .then(response => {
        //         return response.data;
        //     })
        //     .catch(catchFn);
    }
}

export default Auth;
