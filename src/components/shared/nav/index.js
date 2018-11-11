import React from 'react';
import '../../../styles/nav.css';

const NavComponent = ({ user = {}, handleFinishSession = () => {} }) => {
    let fullName;
    fullName = (user) ? `${user.firstName || ''} ${user.secondName || ''}` : '';
        return (
            <div class="main-nav container">
                <div className="row">
                    <div className="col-md-2">Administrador</div>
                    <div className="col-md-8 options">Hola, {fullName}</div>
                    <div className="col-md-2 options session-out"><span onClick={handleFinishSession}>Cerrar sesión</span></div>
                </div>        
            </div>
        )
}

export default NavComponent;
