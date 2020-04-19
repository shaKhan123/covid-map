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

  const formatNumber = (num) => {
    return num != null
      ? num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
      : num;
  };

  const lineChart = {
    labels: dailyData.reportedDate,
    datasets: [
      {
        data:  dailyData.totalCases,
        label: "Infected",
        borderColor: "#3333ff",
        fill: true,
      },
      {
        data: dailyData.totalRecoverd,
        label: "Recovered",
        borderColor: "green",
        fill: true,
      },
      {
        data: dailyData.totalDeaths,
        label: "Deaths",
        borderColor: "red",
        fill: true,
      },
    ],
  };

  const lineOptions = {
    maintainAspectRatio: true,
    responsive: true,
    // title: {
    //   display: true,
    //   text: "Chart Describing Infected, Recoverd and Deaths",
    // },
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
