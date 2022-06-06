import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
    state = {
        languages: [
            {id: 1, value:"HTML 5", xp:1},
            {id: 2, value:"CSS 3", xp:1},
            {id: 3, value:"JavaScript", xp:1},
            {id: 4, value:"PHP", xp:1},
        ],
        frameworks: [
            {id: 1, value:"Bootstrap", xp:1},
            {id: 2, value:"CodeIgniter", xp:1},
            {id: 1, value:"Symfony 5", xp:1},
            {id: 1, value:"React", xp:0.2},
        ]
    }
    render() {
        let {languages, frameworks} = this.state;
        return (
            <div className="languagesFrameworks">
                <ProgressBar 
                    languages={languages}
                    className="languagesDisplay"
                    title="languages"
                />
                <ProgressBar
                    languages={frameworks}
                    title="frameworks & bibliothèques"
                    className="frameworksDisplay"
                />
            </div>
        );
    }
}

export default Languages;