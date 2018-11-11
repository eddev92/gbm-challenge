import React from 'react';
import '../../../styles/nav.css';

const NavComponent = ({ user = {}, handleFinishSession = () => {} }) => {
    let fullName;
    fullName = (user) ? `${user.firstName || ''} ${user.secondName || ''}` : '';
        return (
            <div class="main-nav container">
                <div className="row">
                    <div className="col-md-3">Administrador</div>
                    <div className="col-md-6 options">Hola, {fullName}</div>
                    <div className="col-md-3 options session-out"><span onClick={handleFinishSession}>Cerrar sesión</span></div>
                </div>        
            </div>
        )
}

export default NavComponent;
