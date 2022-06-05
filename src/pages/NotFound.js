import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="notFound">
            <div className="notFoundContent">
                <h3>Désolé, cette page n'existe pas...</h3>
                <NavLink exat to="/">
                <lord-icon
                    src="https://cdn.lordicon.com/qhaguvvs.json"
                    trigger="loop">
                </lord-icon>
                <span> Retour à l'accueil</span>
                </NavLink>
            </div>
        </div>
    );
};

export default NotFound;