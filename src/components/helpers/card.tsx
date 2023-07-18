"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

import Tilt from "react-parallax-tilt";

function Card({
  children,
  className,
  tilt=true,
}: {
  children: React.ReactNode;
  className?: string;
  tilt?: boolean;
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
        tiltMaxAngleX={tilt ? 3 : 0}
        tiltMaxAngleY={tilt ? 3 : 0}
        glareEnable={true}
        glareMaxOpacity={0.05}
      >
        <div
          className={`flex md:p-10 p-3 items-center justify-center w-full h-full rounded-xl bg-[#161B22] border border-[#464646] ${className}`}
        >
          {children}
        </div>
      </Tilt>
    </div>
  );
}

export default Card;
