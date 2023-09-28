"use client";
import React from "react";
import { motion } from "framer-motion";

import EmailField from "@/components/atoms/email_field";

const Hero = () => {
  const supported_by = [
    "/images/support__founders.png",
    "/images/support__bse.png",
    "/images/support__amfi.png",
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
              <h1 className="text-[11vw] font-bold text-center text-transparent">
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
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[75vh]"
          />
        </div>
        <div className="bg-clip-text bg-white-text-gradient flex flex-col justify-center items-center my-10">
          <h1 className="text-2xl font-bold text-center text-transparent">
            Save Daily, Invest Automatically and Watch Your Money Grow
          </h1>
        </div>
        <EmailField />
      </div>
      <div className="relative my-20 h-20 overflow-hidden">
        <div className="flex mx-auto items-center gap-20 px-5 overflow-x-scroll">
          <div className="grow"></div>
          {supported_by.map((item, index) => {
            return <img src={item} key={index} alt="" />;
          })}
          <div className="grow"></div>
        </div>
        <div className="w-[10%] bg-gradient-to-r absolute left-0 top-0 from-black h-full"></div>
        <div className="w-[10%] bg-gradient-to-l absolute right-0 top-0 from-black h-full"></div>
      </div>
      {/* <div className="flex items-center justify-center w-full min-h-[80vh]">
        <div className="bg-clip-text bg-white-text-gradient flex flex-col justify-center items-center w-full">
          <h1 className="text-[2vw] lg:text-[2.5vw] max-md:text-[40px] font-bold text-center text-transparent md:max-w-[60%] max-w-[90%]">
            Discover Filit: <br />
            Where Small Choices Lead to Big Savings
          </h1>
        </div>
      </div> */}
    </>
  );
};

export default Hero;
