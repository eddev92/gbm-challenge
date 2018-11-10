import React from 'react';
import '../../styles/login.css';

const Login = ({ validateUser = () => {}, isValid, user = {}, handleChange = () => {} }) => {
    console.log(isValid)
        return (
            <div className={isValid ? 'body-login isValid row' : 'body-login row'}>
                <div className="main-login col-xs-12 col-sm-7 col-md-6">
                    <img src="images/img_avatar.png" />
                    <div className="user-inputs">
                        <div className="input-group username">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon3">Username</span>
                            </div>
                            <input type="text" value={user.username} onChange={handleChange.bind(user.username)} className="form-control" id="username" aria-describedby="basic-addon3" />
                        </div>
                        <div className="input-group password">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon3">Password</span>
                            </div>
                            <input type="password" value={user.password} onChange={handleChange.bind(user.password)} className="form-control" id="password" aria-describedby="basic-addon3" />
                        </div>
                        <button type="button" className="btn btn-primary btn-lg btn-block" onClick={validateUser}>Ingresar</button>
                    </div>
                </div>
            </div>
        )
}

export default Login;
