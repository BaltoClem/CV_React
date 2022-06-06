import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="sidebar">
            <div className="id">
                <div className="idContent">
                    <img src="./media/clementDumas.jpg" alt="profil-pic" />
                    <h3>Clément Dumas</h3>
                </div>
            </div>

            <div className="navigation">
                <ul>
                    <li>
                        <NavLink to="/" className="navActive">
                        <lord-icon trigger="loop" src="https://cdn.lordicon.com/etqbfrgp.json"></lord-icon>
                            <span>Accueil</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/knowledges" className="navActive">
                        <lord-icon trigger="loop" src="https://cdn.lordicon.com/gqqykmqo.json" colors="outline:#000000,primary:#7166ee,secondary:#913710,tertiary:#4faef9,quaternary:#fad3d1"></lord-icon>
                            <span>Compétences</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio" className="navActive">
                        <lord-icon trigger="loop" src="https://cdn.lordicon.com/qfbuijil.json" colors="outline:#121331,primary:#f24c00,secondary:#2ca58d,tertiary:#ebe6ef"></lord-icon>
                            <span>Portfolio</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className="navActive">
                        <lord-icon trigger="loop" src="https://cdn.lordicon.com/gzmgulpl.json" colors="outline:#ffffff,primary:#c69cf4,secondary:#ebe6ef"></lord-icon>
                            <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className="socialNetwork">
                <ul>
                    <li>
                        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                    </li>
                    <li>
                        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                    </li>
                    <li>
                        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
                    </li>
                    <li>
                        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                    </li>
                </ul>
                <div className="signature">
                    <p>Balto - 2022</p>
                </div>
            </div>

        </div>
    );
};

export default Navigation;