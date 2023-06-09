import React from "react";

const howitworks__item = ({
  heading,
  content,
}: {
  heading: string;
  content: string;
}) => {
  return (
    <div className="mt-10">
      <h1 className="md:text-[3vw] text-[30px] text-transparent font-bold font-manrope bg-clip-text bg-gradient-linear w-min">{heading}</h1>
      <p className="text-sm mt-2 md:max-w-[60%] max-w-[90%] text-[#B4BCD0]">{ content}</p>
    </div>
  );
};

export default howitworks__item;
