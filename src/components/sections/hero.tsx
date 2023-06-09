"use client";
import React from "react";
import { motion } from "framer-motion";

import EmailField from "@/components/atoms/email_field";

const Hero = () => {
  const supported_by = [
    "/images/support__founders.png",
    "/images/support__bse.png",
    "/images/support_amfi.png",
    "/images/support__microsoft.png",
    "/images/support__startup.png",
  ];
  return (
    <>
      <div className="p-5 flex items-center flex-col">
        <div className="h-[150vh] w-full flex flex-col items-center">
          <div className="sticky top-[50%] left-0 -translate-y-1/2 h-min">
            <motion.div
              initial={{ opacity: 0, translateY: "100vh" }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 1 }}
              className="bg-clip-text bg-gradient-linear flex flex-col justify-center items-center"
            >
              <h1 className="text-[10vw] font-bold text-center text-transparent">
                Introducing Filit
              </h1>
            </motion.div>
          </div>
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            src="/images/Hero__Phone.png"
            alt=""
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[60vh]"
          />
        </div>
        <div className="bg-clip-text bg-gradient-linear flex flex-col justify-center items-center my-10">
          <h1 className="text-[5vw] font-bold text-center text-transparent">
            Take charge of your money & grow it. Effortlessly.
          </h1>
        </div>
        <EmailField />
      </div>
      <div className="flex w-full gap-10 justify-evenly my-20 overflow-auto">
        {supported_by.map((item, index) => {
          return <img src={item} key={index} alt="" />;
        })}
      </div>
      <div className="flex items-center justify-center w-full min-h-[80vh]">
        <div className="bg-clip-text bg-gradient-linear flex flex-col justify-center items-center w-full">
          <h1 className="text-[4vw] lg:text-[3vw] max-md:text-[40px] font-bold text-center text-transparent md:max-w-[60%] max-w-[90%]">
            Filit helps you save money in a way that it grows to become your
            power
          </h1>
        </div>
      </div>
    </>
  );
};

export default Hero;
