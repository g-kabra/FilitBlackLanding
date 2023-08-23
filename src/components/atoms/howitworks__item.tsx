"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Howitworks__item = ({
  heading,
  content,
}: {
  heading: string;
  content: React.ReactNode;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      className="mt-10"
      style={{
        opacity: isInView ? 1 : 0,
        transition: "all 0.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
    >
      <h1 className="md:text-[3vw] text-[30px] text-transparent font-bold font-manrope bg-clip-text bg-gradient-linear w-fit">
        {heading}
      </h1>
      {content}
    </motion.div>
  );
};

export default Howitworks__item;
