import { ContainerBox } from "../../styled";
import { useState } from "react";
import "./Styles.css";
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
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Box } from "@mui/material";

ChartJS.register(
  BarElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler
);

const GraphStocks = () => {
  const [isLoading] = useState(true);
  const data = {
    labels: [
      "a",
      "b",
      "c",
      "d",
      "f",
      "2017",
      "2018",
      "2019",
      "2020",
      "g",
      "h",
      "i",
      "j",
      "k",
      "1",
      "2",
      "3",
      "2021",
      "2022",
      "2023",
      "2024",
      new Date().getFullYear().toString(),
      new Date().getFullYear() + 1,
      new Date().getFullYear() + 2,
      new Date().getFullYear() + 3,
      new Date().getFullYear() + 4,
      new Date().getFullYear() + 14,
      new Date().getFullYear() + 23,
      new Date().getFullYear() + 32,
      new Date().getFullYear() + 24,
    ],
    datasets: [
      {
        label: "Stock prices (K)",
        data: [
          ,
          112,
          66,
          1119,
          347,
          811,
          919,
          565,
          988,
          512,
          94,
          145,
          241,
          242,
          243,
          254,
          275,
          26,
          217,
          162,
          326,
          49,
          57,
          611,
          419,
          385,
          84,
          125,
          95,
          15,
          21,
          252,
          234,
          224,
          625,
          246,
          627,
        ],

        fill: true,
        height: 60,
        borderColor: "oange  ",
        backgroundColor: ["rgb(195, 111, 37)"],
        pointBackgroundColor: "#FEF1F1",
        tension: 0.1,
      },
    ],
    options: {
      plugins: {
        filler: {
          propagate: true,
        },
      },
      title: {
        display: true,
        text: "Finance stock chart",
      },
      scales: {
        xAxes: [
          {
            type: "category",
            ticks: {
              min: 0,
              max: 20,
              stepSize: 3,
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              min: 0,
              max: 20,
              stepSize: 3,
            },
          },
        ],
      },
    },
  };

  return (
    <>
      <ContainerBox height={"400px"} width={"800px"} scrollable={false}>
        {isLoading ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",

              height: "100%",
              width: "100%",
            }}
          >
            <Box
              sx={{
                height: "2rem",
                width: "100%",
                display: "flex",
                justifyContent: "start",
                fontSize: "20px",
                // border: "2px solid green",
              }}
            >
              Sensex : ₹ 50,000 <br />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",

                height: "90%",
                width: "60rem",
              }}
            >
              <Line data={data} />
            </Box>
          </Box>
        ) : (
          <div>Finance Service</div>
        )}
      </ContainerBox>
    </>
  );
};

export default GraphStocks;
