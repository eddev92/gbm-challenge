import React from 'react';
import '../../styles/login.css';

const Login = ({ validateUser = () => {}, isValid }) => {

        return (
            <div className={isValid ? 'body-login isValid row' : 'body-login row'}>
                <div className="main-login col-xs-12 col-sm-6 col-md-4">
                    <img src="images/img_avatar.png" />
                    <div className="user-inputs">
                        <div class="input-group username">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon3">Username</span>
                            </div>
                            <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" />
                        </div>
                        <div class="input-group password">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon3">Password</span>
                            </div>
                            <input type="password" class="form-control" id="basic-url" aria-describedby="basic-addon3" />
                        </div>
                        <button type="button" class="btn btn-primary btn-lg btn-block" onClick={validateUser}>Ingresar</button>
                    </div>
                </div>
            </div>
        )
}

export default Login;
