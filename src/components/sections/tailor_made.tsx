import React from "react";
import Image from "next/image";

import Card from "../helpers/card";

function TailorMade() {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-white-text-gradient bg-clip-text text-transparent pb-20">
        <h1 className="md:text-[3vw] text-[50px] font-bold font-manrope text-center">
          Your One-Stop Savings Solution
        </h1>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 max-w-[80%] gap-5">
        <Card className="flex-col gap-5">
          <div className="bg-white-text-gradient bg-clip-text text-transparent max-w-[60%] text-center mx-auto flex flex-col">
            <p className="text-3xl font-bold font-manrope">
              Keep an eye on your money
            </p>
          </div>
          <div className="w-[80%] mx-auto relative aspect-[1.4]">
            <Image src="/images/Tailormade__graph.svg" fill alt=""></Image>
          </div>
        </Card>
        <Card className="flex-col gap-5 md:col-span-2">
          <div className="bg-white-text-gradient bg-clip-text text-transparent max-w-[60%] text-center mx-auto flex flex-col">
            <p className="text-3xl font-bold font-manrope">
              Save a little daily
            </p>
          </div>
          <div className="w-[80%] mx-auto flex flex-col gap-10">
            <div className="bg-white-text-gradient bg-clip-text text-transparent max-w-[60%] text-center mx-auto flex flex-col">
              <p className="text-xl font-bold font-manrope">Active Savings</p>
            </div>
            <div className="relative aspect-[2.9] w-[60%] mx-auto">
              <Image src="/images/Tailormade__daily.svg" fill alt=""></Image>
            </div>
            <div className="bg-white-text-gradient bg-clip-text text-transparent max-w-[60%] text-center mx-auto flex flex-col">
              <p className="text-xl font-manrope">
                You are saving <span className="font-bold">₹100 every day</span>
              </p>
            </div>
          </div>
        </Card>
        <Card className="flex-col gap-5 md:col-span-2">
          <div className="bg-white-text-gradient bg-clip-text text-transparent max-w-[60%] text-center mx-auto flex flex-col">
            <p className="text-3xl font-bold font-manrope">
              Collect your spare changes
            </p>
          </div>
          <div className="w-[80%] mx-auto flex flex-col gap-10">
            <div className="bg-white-text-gradient bg-clip-text text-transparent max-w-[60%] text-center mx-auto flex flex-col">
              <p className="text-xl font-bold font-manrope">Active Savings</p>
            </div>
            <div className="relative aspect-[2.9] w-[60%] mx-auto">
              <Image src="/images/Tailormade__roundup.svg" fill alt=""></Image>
            </div>
            <div className="bg-white-text-gradient bg-clip-text text-transparent max-w-[60%] text-center mx-auto flex flex-col">
              <p className="text-xl font-manrope">
                You are saving avg ₹42 from roundups{" "}
                <span className="font-semibold">daily</span>
              </p>
            </div>
          </div>
        </Card>
        <Card className="flex-col gap-5">
          <div className="bg-white-text-gradient bg-clip-text text-transparent text-center mx-auto flex flex-col">
            <p className="text-2xl leading-relaxed font-bold font-manrope">
              More features <br />
              <span className="w-full text-3xl">coming soon</span>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default TailorMade;
