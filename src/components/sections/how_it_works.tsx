import React from "react";

import HowItWorksItem from "../atoms/howitworks__item";

const HowItWorks = () => {
  const items = [
    {
      heading: "Daily Savings",
      content: (
        <p className="text-sm mt-2 md:max-w-[60%] max-w-[90%] text-[#B4BCD0]">
          Watch your money grow, day by day! <br />
          Set a daily amount to save and watch your savings grow like magic.
        </p>
      ),
    },
    {
      heading: "Fillups",
      content: (
        <p className="text-sm mt-2 md:max-w-[60%] max-w-[90%] text-[#B4BCD0]">
          We round-up your purchases and save the difference for you. These savings get automatically invested into Gold.
        </p>
      ),
    },
    {
      heading: "One Time Savings",
      content: (
        <p className="text-sm mt-2 md:max-w-[60%] max-w-[90%] text-[#B4BCD0]">
          Received a bonus? Got some extra cash?  Save it for your future goals - with just two clicks.
        </p>
      ),
    },
  ];
  return (
    <div className="my-10">
      <div className="bg-gradient-linear text-transparent bg-clip-text mb-20 md:text-[3vw] text-[30px] font-bold mx-auto text-center max-w-[90%]">
        Discover Filit: <br /> Where Small Choices Lead to Big Savings
      </div>
      <div className="md:w-[60%] w-[90%] mx-auto grid md:grid-cols-2 grid-cols-1 my-10">
        <div className="md:text-[5vw] text-[50px] font-bold font-manrope sticky top-[10vh] left-0 h-min bg-white-text-gradient bg-clip-text backdrop-blur">
          How it <span className="text-transparent">works</span>
        </div>
        <div className="flex flex-col md:gap-[20vh] gap-[50px] mt-[20vh]">
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
