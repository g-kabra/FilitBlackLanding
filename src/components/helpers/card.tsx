"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

import Tilt from "react-parallax-tilt";

function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      className={`w-full h-full ${className}`}
      style={{
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
      ref={ref}
    >
      <Tilt
        style={{ height: "100%" }}
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        glareEnable={true}
        glareMaxOpacity={0.1}
      >
        <div
          className={`flex p-5 items-center justify-center w-full h-full rounded-xl bg-[#161B22] border border-[#464646] ${className}`}
        >
          {children}
        </div>
      </Tilt>
    </div>
  );
}

export default Card;
