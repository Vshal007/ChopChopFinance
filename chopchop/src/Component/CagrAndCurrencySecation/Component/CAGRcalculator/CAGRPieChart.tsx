import {
  Chart as ChartJS,
  BarElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  ArcElement,
} from "chart.js";
import { useEffect, useState } from "react";
import { Chart, Doughnut } from "react-chartjs-2";

ChartJS.register(
  BarElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  ArcElement
);

interface CAGRPieChartProps {
  presentValue: number;
  expectedValue: number;
  CAGRPercentage: number;
}

const CAGRPieChart = ({
  expectedValue,
  presentValue,
  CAGRPercentage,
}: CAGRPieChartProps) => {
  const [cagrState, setCagrState] = useState(CAGRPercentage.toFixed(2));
  useEffect(() => {
    console.log("CAGRPercentage", CAGRPercentage.toFixed(2));
  }, [CAGRPercentage]);

  const doughnutLabel = {
    id: "doughnutLabel",
    afterDatasetsDraw: (chart: any, args: any, pluginOptions: any) => {
      const { ctx, data } = chart;

      ctx.save();
      const xCoor = chart.getDatasetMeta(0).data[0].x;
      const yCoor = chart.getDatasetMeta(0).data[0].y;

      ctx.font = "bold 12px Arial";
      ctx.fillStyle = "rgb(254, 102, 0)";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fontColor = "white";
      ctx.fillText(cagrState, xCoor, yCoor);
    },
  };
  const data = {
    labels: ["Present Value", "Expected Value"],
    datasets: [
      {
        label: "Cagr Pie Chart",
        data: [
          presentValue ? presentValue : 10,
          expectedValue ? expectedValue : 100,
          //   duration ? duration : 5,
        ],
        backgroundColor: ["rgb(254, 102, 0)", "rgb(29, 111, 71)"],
        borderColor: "transparent",
        hoverOffset: 4,
      },
    ],
  };
  const myChart = new ChartJS("myChart", {
    type: "doughnut",
    data: {
      labels: ["Present Value", "Expected Value"],
      datasets: [
        {
          label: "Cagr Pie Chart",
          data: [
            presentValue ? presentValue : 10,
            expectedValue ? expectedValue : 100,
          ],
          backgroundColor: ["rgb(254, 102, 0)", "rgb(29, 111, 71)"],
          borderColor: "transparent",
          hoverOffset: 4,
        },
      ],
    },

    // Plugins: [doughnutLabel],
  });

  const plugins = [doughnutLabel];

  return <Doughnut id="myChart" data={data} plugins={plugins} />;
};

export default CAGRPieChart;
