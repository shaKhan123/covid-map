import React, { Component } from "react";
import styles from "./CovidMap.module.css";
import { Map, CircleMarker, TileLayer, Popup } from "react-leaflet";
import { formatNumber, formatDate } from '../../util/common'

import "leaflet/dist/leaflet.css";

class CovidMap extends Component {


  render = () => {
    const data = this.props.data;

    return (
      <div>
        <Map
          style={{ height: "75vh", width: "100%", zIndex: 0, top: 2 }}
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
                      <strong>{formatDate(updated)} </strong>
                    </li>
                    <li>
                      <strong>cases: </strong> {formatNumber(cases)}
                    </li>
                    <li>
                      <strong>deaths:</strong> {formatNumber(deaths)}
                    </li>
                    <li>
                      <strong>recovered:</strong> {formatNumber(recovered)}
                    </li>
                    <li>
                      <strong>cases today:</strong>{" "}
                      {formatNumber(todayCases)}
                    </li>
                    <li>
                      <strong>deaths today:</strong>{" "}
                      {formatNumber(todayDeaths)}
                    </li>
                    <li>
                      <strong>tests:</strong> {formatNumber(tests)}
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
