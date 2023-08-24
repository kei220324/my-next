import React from "react";
import { Chart, registerables } from "chart.js";
import { Pie } from "react-chartjs-2";
Chart.register(...registerables);

const DoughnutChart = ({ expenceItems }) => {
  const chartData = {
    labels: expenceItems.map((item) => item.text),
    datasets: [
      {
        data: expenceItems.map((item) => item.amount),
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
        ],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: "right",
        align: "center",
        labels: {
          usePointStyle: true, 
        },
      },
    },
  };

  return (
    <div>
      <h1>DoughnutChart</h1>
      <div style={{ width: "300px", margin: "0 auto" }}>
        <Pie data={chartData} options={options} />
      </div>
    </div>
  );
};

export default DoughnutChart;