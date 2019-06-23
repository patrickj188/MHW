import React from "react";
// import ArmorService from './services/armor.service.js'
// import ArmorStats from "./ArmorStats";
// import "../src/styles.css";

class Weapons extends React.Component {
  constructor() {
    super();
    this.state = {
      weapons: []
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
            rank: item.rank
            // pieces: item.pieces['defense[3]'],
          }))
        });
        console.log(this.state.weapon);
      })
      .catch(error => console.log(error));
  }

  render() {
    // const renderedAromor = this.state.armor.map((armor, index) => {
    //   return <ArmorStats key={index} armor={armor} />;
    // });
    
    return (
      <div className="wrapper">
        {/* <div className="header">
          <div className="header-title" />
        </div>

        <div className="dropdown">
          <button className="dropbtn">Dropdown</button>
          <div className="dropdown-content">
            <a href="#">{renderedAromor}</a>
          </div>
        </div> */}
      </div>
    );
  }
}

export default Weapons;
