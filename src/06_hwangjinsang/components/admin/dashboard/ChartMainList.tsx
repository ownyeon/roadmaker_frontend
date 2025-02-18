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
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false, // 레전드 제거
    },
    tooltip: {
      enabled: false, // 툴팁 제거
    },
  },
  scales: {
    x: {
      grid: {
        display: false, // X축 그리드 제거
      },
      ticks: {
        display: false, // X축 라벨 제거
      },
      border: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false, // Y축 그리드 제거
      },
      ticks: {
        display: false, // Y축 라벨 제거
      },
      border: {
        display: false,
      },
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June"];

export const ChartMainList = ({color}:{color:string}) => {
  const data = {
    labels,
    datasets: [
      {
        label: "Dataset",
        data: labels.map(() => faker.number.int({ min: 100, max: 400 })),
        borderColor: color,
        borderWidth: 2,
        pointRadius: 0, // 포인트 제거
        fill: false,
      },
      {
        label: "Dataset",
        data: labels.map(() => faker.number.int({ min: 100, max: 400 })),
        borderColor: "#dedede",
        borderWidth: 2,
        pointRadius: 0, // 포인트 제거
        fill: false,
      },
    ],
  };
  return (
    <div className="widget-content">
      <Line options={options} data={data} />
    </div>
  );
};

export default ChartMainList;
