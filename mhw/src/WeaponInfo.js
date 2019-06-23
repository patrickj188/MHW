import React from "react";
// import ArmorService from './services/armor.service.js'
import WeaponStats from "./WeaponStats";
import "../src/styles.css";

class WeaponInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      weapon: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/weapon")
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        this.setState({
          weapon: data.map(item => ({
            name: item.name,
            type: item.type
            // pieces: item.pieces['defense[3]'],
          }))
        });
        console.log(this.state.weapon);
      })
      .catch(error => console.log(error));
  }

  render() {
    const renderedWeapon = this.state.weapon.map((weapon, index) => {
      return <WeaponStats key={index} weapon={weapon} />;
    });
    
    return (
      <div className="wrapper">
        <div className="header">
          <div className="header-title" />
        </div>

        <div className="dropdown">
          <button className="dropbtn">Dropdown</button>
          <div className="dropdown-content">
            <a href="#">{renderedWeapon}</a>
          </div>
        </div>
      </div>
    );
  }
}

export default WeaponInfo;
