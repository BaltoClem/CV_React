import React from 'react';

const ProgressBar = (props) => {
    console.log(props);

    return (
        <div className={props.className}>
            <h3>{props.title}</h3>
            <div className="years">
                <span>Années d'expériences</span>
                <span>1 an</span>
                <span>2 ans</span>
            </div>

            <div>
                {
                    //On appelle les propriétés des tableaux avec map et chaque élément sera un item
                    props.languages.map((item) =>{

                        let xpYears = 2; // A changer selon le nombre d'années d'expériences voulu
                        let progressBar = item.xp / xpYears * 100 + '%';

                        return(
                            <div key={item.id} className="languagesList">
                                <li>{item.value}</li>
                                <div className="progressBar" style={{width:progressBar}}></div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    );
};

export default ProgressBar;