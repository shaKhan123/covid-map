import React, { Component } from "react";
import styles from "./CovidMap.module.css";
import { Map, CircleMarker, TileLayer, Popup } from "react-leaflet";
import Moment from "moment";

import "leaflet/dist/leaflet.css";
import { fetchData } from "../../api";

class CovidMap extends Component {

  formatNumber = (num) => {
    return num != null
      ? num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
      : num;
  };

  formatDate = (date) => {
    const timestamp = Date(date);
    return Moment(timestamp).format("lll");
    // Outputs as "Feb 17, 2017 1:30 PM"
  };

  /*  async componentDidMount() {
    const fetchedData = await fetchData();
     this.setState({ data: fetchedData });
  } */

  render = () => {
    const data = this.props.data;

    return (
      <div className="map">
        <Map
          style={{ height: "80vh", width: "100%", zIndex: 0, top: 2 }}
          zoom={2}
          center={[0.09, 20.505]}
        >
          <TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {data.map((country = {}) => {
            const {
              updated,
              casesPerOneMillion: perMillion,
              cases,
              todayCases,
              deaths,
              todayDeaths,
              recovered,
              active,
              critical,
              tests,
            } = country;
            const { countryInfo = {} } = country;
            const { lat, long: lng } = countryInfo;
            return (
              <CircleMarker
                center={[lat, lng]}
                radius={Math.log(cases)}
                color="#f03"
                fillColor="#f03"
                fillOpacity={0.5}
                stroke={false}
              >
                <Popup>
                  <ul>
                    <li>
                      <strong>{this.formatDate(updated)} </strong>
                    </li>
                    <li>
                      <strong>cases: </strong> {this.formatNumber(cases)}
                    </li>
                    <li>
                      <strong>deaths:</strong> {this.formatNumber(deaths)}
                    </li>
                    <li>
                      <strong>recovered:</strong> {this.formatNumber(recovered)}
                    </li>
                    <li>
                      <strong>cases today:</strong>{" "}
                      {this.formatNumber(todayCases)}
                    </li>
                    <li>
                      <strong>deaths today:</strong>{" "}
                      {this.formatNumber(todayDeaths)}
                    </li>
                    <li>
                      <strong>tests:</strong> {this.formatNumber(tests)}
                    </li>
                  </ul>
                </Popup>
              </CircleMarker>
            );
          })}
        </Map>
      </div>
    );
  };
}

export default CovidMap;
