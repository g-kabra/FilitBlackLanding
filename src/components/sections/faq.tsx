"use client";

import React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

function FAQ() {
  const [open, setOpen] = React.useState(-1);
  const FAQ = [
    {
      question: "Is there a free trial available?",
      answer:
        "Everything you need to know about the product and billing.Everything you need to know about the product and billing.Everything you need to know about the product and billing",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Everything you need to know about the product and billing.Everything you need to know about the product and billing.Everything you need to know about the product and billing",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Everything you need to know about the product and billing.Everything you need to know about the product and billing.Everything you need to know about the product and billing",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Everything you need to know about the product and billing.Everything you need to know about the product and billing.Everything you need to know about the product and billing",
    },
  ];
  return (
    <div className="w-full flex flex-col gap-5">
      {FAQ.map((item, index) => {
        return (
          <div
            className="w-full rounded-2xl border-2 p-10 shadow-md bg-[#161B22] transition duration-300"
            style={{ borderColor: open === index ? "#ffffff" : "#30363D" }}
            key={index}
          >
            <div
              className="flex justify-between gap-10 items-center cursor-pointer"
              onClick={() => {
                open === index ? setOpen(-1) : setOpen(index);
              }}
            >
              <p className="text-[#F7F7F8] text-xl">{item.question}</p>
              <Image
                src={"/icons/plus.svg"}
                alt=""
                height={24}
                width={24}
                style={{
                  transform: open === index ? "rotate(90deg)" : "",
                  transition: "all 0.3s ease-in-out",
                }}
              ></Image>
            </div>
            <AnimatePresence>
              {open === index && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className={"pt-10 transition duration-300 text-[#B4BCD0]"}
                >
                  {item.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

export default FAQ;
