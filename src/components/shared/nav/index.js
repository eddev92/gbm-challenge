import React from 'react';
import '../../../styles/nav.css';

const NavComponent = ({ user = {}, token, handleFinishSession = () => {} }) => {
    console.log('nav', user)
    let fullName;
    fullName = (user) ? `${user.firstName || ''} ${user.secondName || ''}` : '';
        return (
            <div class="main-nav container">
                <div className="row">
                    <div className="col-md-10">Hola, {fullName}</div>
                    <div className="col-md-2 options"><span onClick={handleFinishSession}>Cerrar sesión</span></div>
                </div>        
            </div>
        )
}

export default NavComponent;
