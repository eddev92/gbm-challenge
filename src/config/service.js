import _api from '../config/axios';
import { ROUTE_PROVIDER } from '../constants/routes/index'

export class Service {

    get api() {
		return _api;
	}

	get(next) {
        _api.get(ROUTE_PROVIDER, {})
        .then((response) => {
            next(null, response.data);
        })
        .catch((error) => {
            return next(error);
        });
	}
}
