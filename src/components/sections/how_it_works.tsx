import React from "react";

import HowItWorksItem from "../atoms/howitworks__item";

const HowItWorks = () => {
  const items = [
    {
      heading: "Spend",
      content:
        "Connect your UPI, and boom! Filit becomes your money detective. Track those expenses like a pro and unravel the mysteries of your spending habits!",
    },
    {
      heading: "Save",
      content:
        "Filit takes saving to the next level. It is like having a digital piggy bank that automatically sneaks away a bit of cash from your income every single day. Genius, right?",
    },
    {
      heading: "Invest",
      content:
        "Prepare for gold rush vibes! Your hard-earned money gets a VIP treatment. Filit cleverly invests it in 24-carat gold, that's right, the real deal! Watch your wealth sparkle and shine.",
    },
  ];
  return (
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
  );
};

export default HowItWorks;
