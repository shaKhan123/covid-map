import React, { Component } from "react";
import { formatNumber } from './util/common'
import './SideBar.css'; 

class SideBar extends Component {
  state = {
    data: {},
  };


  componentDidMount() {
    fetch("https://corona.lmao.ninja/v2/all")
      .then((res) => res.json())
      .then((resdata) => {
        //console.log(resdata);
        this.setState({ data: resdata });
      })
      .catch(console.log);
  }
  

  render() {
    const { data = {} } = this.state;
    const {
      updated,
      cases,
      todayCases,
      deaths,
      todayDeaths,
      recovered,
      active,
      critical,
      tests,
    } = data;

    // I know how to loop okay, its just I dont have time to look how to do it in JS.
    return (
      <div className="side-bar">
           <div className="logo">Global Stats</div>          
            <ul>
              <li>
                <strong>Cases:</strong> <span className="case">{formatNumber(cases)} </span>
              </li>
              <li>
                <strong>Active:</strong> <span className="case">{formatNumber(active)}</span>
              </li>
              <li>
                <strong>Recovered:</strong> <span className="case">{formatNumber(recovered)}</span>
              </li>
              <li>
                <strong>Critical:</strong> <span className="case">{formatNumber(critical)}</span>
              </li>
              <li>
                <strong>Cases Today:</strong> <span className="case">{formatNumber(todayCases)}</span>
              </li>
              <li>
                <strong>Tests:</strong> <span className="case">{formatNumber(tests)}</span>
              </li>
              <li>
                <strong>Deaths:</strong> <span className="case">{formatNumber(deaths)}</span>
              </li>
              <li>
                <strong>Deaths Today:</strong> <span className="case">{formatNumber(todayDeaths)}</span>
              </li>
            </ul>
         <div className="footer">ksha786000@gmail.com</div>
      </div>
    );
  }
}

export default SideBar;
