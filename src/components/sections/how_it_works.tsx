import React from "react";

import HowItWorksItem from "../atoms/howitworks__item";

const HowItWorks = () => {
  const items = [
    {
      heading: "Daily Savings",
      content: (
        <p className="text-sm mt-2 md:max-w-[60%] max-w-[90%] text-[#B4BCD0]">
          Watch Your Money Grow, Day by Day! <br /> Set a Daily Amount to Save
          and Watch Your Savings Grow Like Magic.
        </p>
      ),
    },
    {
      heading: "Fillups",
      content: (
        <p className="text-sm mt-2 md:max-w-[60%] max-w-[90%] text-[#B4BCD0]">
          Grow Your Savings, Penny by Penny! <br />
          We Round Up Your Purchases and Save The Difference For You .
        </p>
      ),
    },
    {
      heading: "One Time Savings",
      content: (
        <p className="text-sm mt-2 md:max-w-[60%] max-w-[90%] text-[#B4BCD0]">
          Secure your dreams with ease, save sudden bonuses or that extra cash
          for your future goals. <br />
          Save instantly with just two clicks.
        </p>
      ),
    },
  ];
  return (
    <div className="my-10">
      <div className="bg-gradient-linear text-transparent bg-clip-text mb-20 md:text-[3vw] text-[30px] font-bold mx-auto text-center">
        Discover Filit: <br /> Where Small Choices Lead to Big Savings
      </div>
      <div className="md:w-[60%] w-[90%] mx-auto grid md:grid-cols-2 grid-cols-1 my-10">
        <div className="md:text-[5vw] text-[50px] font-bold font-manrope sticky top-[10vh] left-0 h-min bg-white-text-gradient bg-clip-text backdrop-blur">
          How it <span className="text-transparent">works</span>
        </div>
        <div className="flex flex-col md:gap-[20vh] gap-[50px] mt-[50vh]">
          {items.map((item, index) => {
            return (
              <HowItWorksItem
                key={index}
                heading={item.heading}
                content={item.content}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
