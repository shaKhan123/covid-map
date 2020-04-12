import React, { Component } from "react";
import './SideBar.css'; 
class SideBar extends Component {
  state = {
    data: {},
  };

  componentDidMount() {
    fetch("https://corona.lmao.ninja/v2/all")
      .then((res) => res.json())
      .then((resdata) => {
        console.log(resdata);
        this.setState({ data: resdata });
      })
      .catch(console.log);
  }
  

  render() {
    const { data = {} } = this.state;
    const {
      cases,
      todayCases,
      deaths,
      todayDeaths,
      recovered,
      active,
      critical,
      tests,
    } = data;

    const formatNumber = (num) => {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
      };
    return (
      <div className="side-bar">
           <div className="logo">STATS</div>
           
            <ul>
              <li>
                <strong>Cases:</strong> <span className="case">{cases} </span>
              </li>
              <li>
                <strong>Active:</strong> <span className="case">{active}</span>
              </li>
              <li>
                <strong>Recovered:</strong> <span className="case">{recovered}</span>
              </li>
              <li>
                <strong>Critical:</strong> <span className="case">{critical}</span>
              </li>
              <li>
                <strong>Cases Today:</strong> <span className="case">{todayCases}</span>
              </li>
              <li>
                <strong>Tests:</strong> <span className="case">{tests}</span>
              </li>
              <li>
                <strong>Deaths:</strong> <span className="case">{deaths}</span>
              </li>
              <li>
                <strong>Deaths Today:</strong> <span className="case">{todayDeaths}</span>
              </li>
            </ul>
         <div className="footer">ksha786000@gmail.com</div>
      </div>
    );
  }
}

export default SideBar;
