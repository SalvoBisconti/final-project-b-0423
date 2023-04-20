import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import moment from "moment";
import styles from "./index.module.scss";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ChartEl = ({ prices }) => {
  const coinChartData = prices.map((value) => ({
    x: value[0],
    y: value[1].toFixed(2),
  }));
  const data = {
    labels: coinChartData.map((value) => moment(value.x).format("MMM DD")),
    datasets: [
      {
        data: coinChartData.map((val) => val.y),
        borderColor: `${
          prices[0] > prices[7] ? "rgb(255, 0, 0)" : "rgb(134, 218, 8)"
          // CORRETTO:
          // prices[0][1] > prices[7][1] ? "rgb(255, 0, 0)" : "rgb(134, 218, 8)"
        }`,
      },
    ],
  };
  // console.log(coinChartData[0]);

  const options = {
    maintainAspectRatio: false,

    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return <Line className={styles.ChartEl} data={data} options={options} />;
};

export default ChartEl;
