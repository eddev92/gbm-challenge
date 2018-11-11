import { HEADERS_REQUEST } from '../constants/routes'
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8000';
const catchFn = error => {
	console.log('error: ', error);
	return console.log(error.response);
};

class Auth {
    AuthUser(user) {
        return axios.post('/auth', user, HEADERS_REQUEST)
            .then(response => {
                return response.data;
            })
           .catch(catchFn);
    }
    getToken() {
        return axios.get('/token', HEADERS_REQUEST)
            .then(response => {
                return response.data;
            })
           .catch(catchFn);
    }
}

export default Auth;
