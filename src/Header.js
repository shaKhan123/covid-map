import React, { Component } from "react";
import './Header.css'; 
class Header extends Component {

  render() {


    return (
      <div className="header">
           <div className="logo">COVID-19-MAP</div>          
           <div className="tag-line">Just wash your hands and help the Doctors by Staying Home! </div>
      </div>
    );
  }
}

export default Header;
