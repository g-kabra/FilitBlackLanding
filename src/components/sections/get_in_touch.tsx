'use client'
import React from "react";
import Image from "next/image";
import Button from "../atoms/button";
import Card from "../helpers/card";

function GetInTouch() {
  return (
    <Card tilt={false} className="w-[90%] max-w-7xl mx-auto overflow-hidden !border-none">
      <div className="w-full p-10 py-20 flex justify-between bg-[#161B22] rounded-3xl relative">
        <div className="flex flex-col gap-5 md:max-w-[50%] font-manrope">
          <h1 className="text-5xl font-bold text-white">Still got questions?</h1>
          <p className="text-[#B4BCD0] text-xl">
            Can&apos;t find the answer you&apos;re looking for? Please reach out to
            our friendly team.
          </p>
          <Button
            onClick={() => {
              document
                .getElementById("footer")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-fit px-5 py-3 mt-5"
          >
            Get in Touch
          </Button>
        </div>
        <div className="absolute right-0 top-[20px] md:h-[455px] h-full aspect-square">
          <Image src="/images/get_in_touch_at.png" fill alt=""></Image>
        </div>
      </div>
    </Card>
  );
}

export default GetInTouch;
