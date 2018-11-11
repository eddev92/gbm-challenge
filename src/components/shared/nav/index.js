import React from 'react';
import '../../../styles/nav.css';
import TransformData from '../../../utils/transform';

const NavComponent = ({ user = {}, handleFinishSession = () => {} }) => {
    const rol = user.roles && TransformData.getRole(user.roles.rol);
    let fullName;

    fullName = (user) ? `${user.firstName || ''} ${user.secondName || ''}` : '';
        return (
            <div className="main-nav container">
                <div className="row">
                    <div className="col-md-3">{rol}</div>
                    <div className="col-md-6 options">Hola, {fullName}</div>
                    <div className="col-md-3 options session-out"><span onClick={handleFinishSession}>Cerrar sesión</span></div>
                </div>        
            </div>
        )
}

export default NavComponent;
