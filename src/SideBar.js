import React, { Component } from "react";
import Moment from 'moment';
import './SideBar.css'; 
class SideBar extends Component {
  state = {
    data: {},
  };

  formatNumber = (num) => {
    return num!=null? num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") : num;
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

    
    return (
      <div className="side-bar">
           <div className="logo">STATS</div>
           
            <ul>
    
              <li>
                <strong>Cases:</strong> <span className="case">{this.formatNumber(cases)} </span>
              </li>
              <li>
                <strong>Active:</strong> <span className="case">{this.formatNumber(active)}</span>
              </li>
              <li>
                <strong>Recovered:</strong> <span className="case">{this.formatNumber(recovered)}</span>
              </li>
              <li>
                <strong>Critical:</strong> <span className="case">{this.formatNumber(critical)}</span>
              </li>
              <li>
                <strong>Cases Today:</strong> <span className="case">{this.formatNumber(todayCases)}</span>
              </li>
              <li>
                <strong>Tests:</strong> <span className="case">{this.formatNumber(tests)}</span>
              </li>
              <li>
                <strong>Deaths:</strong> <span className="case">{this.formatNumber(deaths)}</span>
              </li>
              <li>
                <strong>Deaths Today:</strong> <span className="case">{this.formatNumber(todayDeaths)}</span>
              </li>
            </ul>
         <div className="footer">ksha786000@gmail.com</div>
      </div>
    );
  }
}

export default SideBar;
