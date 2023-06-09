import React from "react";

import HowItWorksItem from "../atoms/howitworks__item";

const HowItWorks = () => {
  const items = [
    {
      heading: "Spend",
      content: "As you spend money Filit keeps a track of money.",
    },
    {
      heading: "Save",
      content: "Roundup your spending and save a little daily. So you always have enough for your dreams. ",
    },
    {
      heading: "Invest",
      content: "Get interest on your savings. Your savings get invested that can we withdrawn as money or gold. ",
    },
  ];
  return (
    <div className="md:w-[60%] w-[90%] mx-auto grid md:grid-cols-2 grid-cols-1">
      <div className="md:text-[5vw] text-[50px] font-bold font-manrope sticky top-[10vh] left-0 h-min bg-gradient-linear bg-clip-text backdrop-blur">
        How it <span className="text-transparent">works</span>
      </div>
      <div className="flex flex-col md:gap-[20vh] gap-[50px]">
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
  );
};

export default HowItWorks;
