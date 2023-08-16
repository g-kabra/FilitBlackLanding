import React from "react";

import HowItWorksItem from "../atoms/howitworks__item";

const HowItWorks = () => {
  const items = [
    {
      heading: "Daily Savings",
      content: (
        <p>
          Watch your money grow, day by day! <br /> Set a daily amount to save
          and watch your savings grow like magic.
        </p>
      ),
    },
    {
      heading: "Save",
      content: (
        <p>
          Grow your savings, penny by penny! <br /> We round up your purchases
          and save the difference for you <br /> Kyunki &rdquo;Boond boond se
          ghada bharta hai&rdquo;
        </p>
      ),
    },
    {
      heading: "Invest",
      content: (
        <p>
          Secure your dreams with ease, save sudden bonuses or that extra cash
          for your future goals. <br /> Save instantly with just two clicks.
        </p>
      ),
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
