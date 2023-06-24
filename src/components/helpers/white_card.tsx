"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const WhiteCard = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <motion.div
      className="min-h-screen my-10 py-10 w-screen flex justify-center items-center p-3"
      style={{
        backgroundColor: isInView ? "#FFFFFF" : "#000000",
        transition: "background-color 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
      }}
      ref={ref}
    >
      <div className="w-[90%] rounded-[20px] mx-auto bg-white text-black border border-2">
        {children}
      </div>
    </motion.div>
  );
};

export default WhiteCard;
