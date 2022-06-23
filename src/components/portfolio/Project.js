import React, { Component } from 'react'

export default class Project extends Component {
  render() {
    let {name, languagesIcons, source, info, picture} = this.props.item; //Permet de ne pas réécrire toute la sémantique pour appeler une propriété

    return (
      <div className="project">
        <div className="icons">
          {languagesIcons.map(icon =>
            <i className={icon} key={icon}></i>
            )}
        </div>
        <h3>{name}</h3>
            <img src={picture} alt="" />
            <span className="infos">
              <i className="fas fa-plus-circle"></i>
            </span>

      </div>
    )
  }
}