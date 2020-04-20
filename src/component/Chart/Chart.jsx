import React, { useState, useEffect } from "react";
import { fetchCountryStatsData } from "../../api";
import { Line } from "react-chartjs-2";
import styles from "./Chart.module.css";

const Chart = ({ country }) => {
  const [dailyData, setDailyData] = useState({});
  useEffect(() => {
    const fetchMyAPI = async () => {
      const initialDailyData = await fetchCountryStatsData(country);
      setDailyData(initialDailyData);
    };

    fetchMyAPI();
  }, [country, setDailyData]);

  const lineChart = {
    labels: dailyData.reportedDate,
    datasets: [
      {
        data: dailyData.totalCases,
        label: "Infected",
        borderColor: "#3333ff",
        fill: true,
        pointRadius: 2,
      },
      {
        data: dailyData.totalRecoverd,
        label: "Recovered",
        borderColor: "green",
        fill: true,
        pointRadius: 2,
      },
      {
        data: dailyData.totalDeaths,
        label: "Deaths",
        borderColor: "red",
        fill: true,
        pointRadius: 2,
      },
    ],
  };

  const lineOptions = {
    maintainAspectRatio: false,
    responsive: true,
    title: {
      display: true,
      text: "Covid-19 cases in last 60 days.",
    },
    scales: {
      xAxes: [
        {
          display: true,
          gridLines: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          display: true,
          gridLines: {
            display: false,
          },
          type: "logarithmic",
          ticks: {
            min: 1, //minimum tick

            callback: function (value, index, values) {
              if (
                value === 10 ||
                value === 100 ||
                value === 1000 ||
                value === 10000 ||
                value === 100000 ||
                value === 1000000
              ) {
                return value + "K";
              }
            },
          },
        },
      ],
    },
  };

  return (
    <div className={styles.container}>
      <Line data={lineChart} options={lineOptions} />
    </div>
  );
};

export default Chart;
