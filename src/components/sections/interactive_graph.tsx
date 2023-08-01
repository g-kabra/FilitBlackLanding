"use client";
import React, { useState } from "react";

import Slider from "../helpers/slider";

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
import Card from "../helpers/card";

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
      display: false,
    },
  },
  scales: {
    y: {
      ticks: {
        font: {
          size: 10,
        },
        callback: function (value: any, index: any, ticks: any) {
          return "₹" + indianconversion(value);
        },
      },
    },
    x: {
      ticks: {
        font: {
          size: 10,
        },
        callback: function (value: any, index: any, ticks: any) {
          return value + "Yr";
        },
      },
    },
  },
};

function indianconversion(val: number) {
  let s = val.toString();
  if (val >= 10000000) s = (val / 10000000).toFixed(2) + " Cr";
  else if (val >= 100000) s = (val / 100000).toFixed(2) + " Lac";
  else if (val >= 1000) s = (val / 1000).toFixed(2) + " K";
  return s;
}

function InteractiveGraph() {
  const [baseAmount, setBaseAmount] = useState<number>(10);
  const [numYears, setNumYears] = useState<number>(10);
  const [totalAmount, setTotalAmount] = useState<number>(1000);
  const [data, setData] = useState({
    labels: [1, 2, 3, 4],
    datasets: [
      {
        label: "Investment Value",
        data: [100, 200, 300, 400],
        borderColor: "#667DF0",
        backgroundColor: "#6F6BB2",
      },
    ],
  });

  let labels: number[] = [];
  let xData: number[] = [];

  React.useEffect(() => {
    labels = [1];
    xData = [baseAmount*365];
    let totalAmount = baseAmount*365;
    for (let i = 1; i < numYears + 1; i++) {
      labels.push(i + 1);
      xData.push((baseAmount*365 + xData[i - 1]) * 1.12);
      totalAmount += xData[i];
    }
    setData({
      labels,
      datasets: [
        {
          label: "Investment Value",
          data: xData,
          borderColor: "#667DF0",
          backgroundColor: "#6F6BB2",
        },
      ],
    });
    setTotalAmount(xData[numYears]);
    console.log(labels, xData, totalAmount);
  }, [baseAmount, numYears]);

  return (
    <div className="flex flex-col items-center py-40">
      <div className="bg-white-text-gradient bg-clip-text text-transparent pb-20">
        <h1 className="md:text-[3vw] text-[50px] font-bold font-manrope text-center">
          How Your Money Grows with Filit
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] py-20">
        <div className="flex flex-col md:w-[80%] w-full gap-20">
          <Slider
            title="Base Amount"
            subtitle="(daily savings)"
            valPrefix="₹"
            value={baseAmount}
            setValue={(value) => {
              setBaseAmount(value);
            }}
            minVal={1}
            maxVal={100}
            step={1}
          ></Slider>
          <Slider
            title="Number of Years"
            valSuffix="Yr"
            value={numYears}
            setValue={(value) => {
              setNumYears(value);
            }}
            minVal={2}
            maxVal={30}
            step={1}
          ></Slider>
          <div className="p-10 flex-col flex gap-5 rounded-xl border border-white">
            <div className="flex justify-between w-full text-xl">
              <p>Amount Invested</p>
              <p className="text-xl">{baseAmount}</p>
            </div>
            <hr />
            <div className="flex justify-between w-full text-xl">
              <p>Total Amount</p>
              <p className="text-xl">{indianconversion(totalAmount)}</p>
            </div>
            <hr />
            <div className="flex justify-between w-full text-xl">
              <p>Gold Amount</p>
              <p className="text-xl">{(totalAmount / 100).toFixed(2) + "gms"}</p>
            </div>
            <hr />
            <div className="flex justify-between w-full text-xl">
              <p>Price of Gold</p>
              <p className="text-xl">{100}</p>
            </div>
            <hr />
            <div className="flex justify-between w-full text-xl">
              <p>Profit</p>
              <p>{indianconversion(totalAmount - baseAmount * numYears)}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 justify-center">
          <Card className="md:p-10 md:py-10 my-2">
            <Line options={options} data={data} redraw={true} />
          </Card>
          <p className="p-5 ml-10 bg-[#FFFFFF0F] w-fit text-xl">
            Live price of Gold <span className="font-semibold">100/0.0002gm</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default InteractiveGraph;
