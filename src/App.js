import React, { Component } from "react";
import './App.css';
import {
  Map,
  CircleMarker,
  TileLayer,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

class App extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    fetch("https://corona.lmao.ninja/countries")
      .then((res) => res.json())
      .then((resdata) => {
        //console.log(resdata);
        this.setState({ data: resdata });
      })
      .catch(console.log);
  }

  render = () => {
    const { data = [] } = this.state;
    const formatNumber = (num) => {
      return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    };
    return (
      <div className="map">
        <Map
          style={{ height: "550px", width: "100%", zIndex:0, top:2}}
          zoom={2}
          center={[-0.09, 51.505]}
        >
          <TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {data.map((country = {}) => {
            const {
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
                      <li><strong>cases: </strong> {formatNumber(cases)}</li>
                      <li><strong>deaths:</strong> {formatNumber(deaths)}</li>
                      <li><strong>recovered:</strong> {formatNumber(recovered)}</li>
                      <li><strong>cases today:</strong> {formatNumber(todayCases)}</li>
                      <li><strong>deaths today:</strong> {formatNumber(todayDeaths)}</li>
                      <li><strong>tests:</strong> {formatNumber(tests)}</li>
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

export default App;
