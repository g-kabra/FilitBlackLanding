"use client";
import React, { useState } from "react";

import Slider from "../helpers/slider";

import { Chart as ChartJS, registerables } from "chart.js/auto";
import { Chart } from "react-chartjs-2";
import Card from "../helpers/card";

ChartJS.register(...registerables);

export const options = {
  type: "bar",
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
      stacked: true,
    },
    x: {
      ticks: {
        font: {
          size: 10,
        },
        callback: function (value: any, index: any, ticks: any) {
          return value + 1 + "Yr";
        },
      },
      min: 1,
      stacked: true,
    },
  },
};

function indianconversion(val: number) {
  let s = val.toString();
  if (val >= 10000000) s = (val / 10000000).toFixed(2) + " Cr";
  else if (val >= 100000) s = (val / 100000).toFixed(2) + " Lac";
  else if (val >= 1000) s = (val / 1000).toFixed(2) + " K";
  else s = val.toFixed(2);
  return s;
}

function InteractiveGraph() {
  const [baseAmount, setBaseAmount] = useState<number>(10);
  const [numYears, setNumYears] = useState<number>(9);
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
      {
        label: "Profit",
        data: [100, 200, 300, 400],
        borderColor: "#667DF0",
        backgroundColor: "#6F6BB2",
      },
    ],
  });

  let labels: number[] = [];
  let xData: number[] = [];
  let profitData: number[] = [];

  React.useEffect(() => {
    labels = [1];
    xData = [baseAmount * 365];
    profitData = [xData[0] * 0.12];
    let totalAmount = baseAmount * 365;
    for (let i = 1; i < numYears; i++) {
      labels.push(i + 1);
      xData.push(365 * baseAmount + xData[i - 1]);
      profitData.push(
        (xData[i] + profitData[i - 1]) * 0.12 + profitData[i - 1]
      );
      totalAmount += xData[i];
    }
    setData({
      labels,
      datasets: [
        {
          label: "Invested amount",
          data: xData,
          borderColor: "#667DF0",
          backgroundColor: "#464646",
        },
        {
          label: "Profit amount",
          data: profitData,
          borderColor: "#ffffff",
          backgroundColor: "#6F6BB2",
        },
      ],
    });
    setTotalAmount(profitData[numYears - 1]);
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
            maxVal={1000}
            step={1}
          ></Slider>
          <Slider
            title="Number of Years"
            valSuffix="Yr"
            value={numYears}
            setValue={(value) => {
              setNumYears(value);
            }}
            minVal={1}
            maxVal={30}
            step={1}
          ></Slider>
          <div className="p-10 flex-col flex gap-5 rounded-xl border border-white">
            <div className="flex justify-between w-full gap-2 text-xl">
              <p>Amount Invested</p>
              <p className="text-xl whitespace-nowrap">
                {"₹ " + indianconversion(baseAmount * 365 * (numYears))}
              </p>
            </div>
            <hr />
            <div className="flex justify-between w-full gap-2 text-xl">
              <p>Estimated Returns</p>
              <p className="text-xl whitespace-nowrap">
                {"₹ " + indianconversion(totalAmount)}
              </p>
            </div>
            <hr />
            <div className="flex justify-between w-full gap-2 text-xl">
              <p>Maturity Value</p>
              <p className="text-xl whitespace-nowrap">
                {"₹ " +
                  indianconversion(
                    totalAmount + baseAmount * 365 * (numYears)
                  )}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 justify-center">
          <Card className="md:p-10 md:py-10 my-2 flex-col gap-3" tilt={false}>
            <h1 className="ml-auto text-2xl font-semibold">
              {"₹ " +
                indianconversion(
                  totalAmount + baseAmount * 365 * (numYears + 1)
                )}
            </h1>
            <Chart type="bar" options={options} data={data} redraw={true} />
          </Card>
          <p className="p-5 md:ml-10 bg-[#FFFFFF0F] w-fit text-sm text-[#ffffff36]">
            *The calculations are based on to historical performance of Gold
            over last 10 years
          </p>
        </div>
      </div>
    </div>
  );
}

export default InteractiveGraph;
