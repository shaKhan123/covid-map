import React, { Component } from "react";
import styles from "./App.module.css";

import CovidMap from "./component/CovidMap/CovidMap";
import { Cards, Chart, CountryPicker } from "./component";
import { fetchData } from "./api";

class App extends Component {
  state = {
    country: "India",
    countryList: [],
    data: [],
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    const list = await fetchedData.map(function ({ country }) {
      return country;
    });
    this.setState({ data: fetchedData, countryList: list });
  }

  handleCountryChange = async (country) => {
    this.setState({ country });
  };

  render = () => {
    return (
      <div>
        <CovidMap data={this.state.data} />
        <div className={styles.container}>
          <CountryPicker
            handleCountryChange={this.handleCountryChange}
            countries={this.state.countryList}
          />
          <Chart className={styles.chart} country={this.state.country} />
        </div>
      </div>
    );
  };
}

export default App;
