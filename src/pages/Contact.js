import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Contact = () => {
    return (
        <div className="contact">
            <Navigation />
            <div className="contactContent">
                <div className="header"></div>
                <div className="contactBox">
                    <h1>Contactez-moi</h1>
                    <ul>
                        <li>
                        <lord-icon
                            src="https://cdn.lordicon.com/jqnthkou.json"
                            trigger="loop">
                        </lord-icon>
                            <span>Amiens</span>
                        </li>
                        <li>
                            <i className="fas fa-mobile-alt"></i>
                            <CopyToClipboard text="0601234567">
                                <span className="clickInput" 
                                onClick={() => { alert('Numéro copié !');}}>
                                    06.01.23.45.67
                                </span>
                            </CopyToClipboard>
                        </li>
                        <li>
                            <i className="far fa-envelope"></i>
                            <CopyToClipboard text="email@test.fr">
                                <span className="clickInput" 
                                onClick={() => { alert('Email copié !');}}>
                                    email@test.fr
                                </span>
                            </CopyToClipboard>
                        </li>
                    </ul>
                </div>

                <div className="socialNetwork">
                    <ul>
                        <li>

                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;