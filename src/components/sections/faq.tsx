"use client";

import React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

function FAQ() {
  const [open, setOpen] = React.useState(-1);
  const FAQ = [
    {
      question: "What are Fillups? How do they work?",
      answer:
        "Let's understand how Fillups work through an example. Assume you buy groceries for ₹64 using UPI. You receive an SMS, stating that ₹64 has been debited from your account. Filit reads that message and automatically rounds off the number to the next multiple of 10, i.e. 70. The difference between the 2 numbers (70-64) gives the fill-up value, i.e. ₹6, which is directly invested into Digital Gold. Similarly, when you make a transaction of ₹230 ,we will round It up to ₹240, and invest ₹10.",
    },
    {
      question: "How much money do I need to start saving?",
      answer:
        "You can begin saving with Filit with as low as ₹1. What's even better is that you can make one- time savings, with as little as ₹100.",
    },
    {
      question: "How do I set up the app?",
      answer:
        "It's simple, just enter your phone number and basic details. Voila! You are all set to use Filit.",
    },
    {
      question: "What is Digital Gold?",
      answer:
        "Digital gold is a modern way to invest in real gold. It's 24k pure gold that's kept safe in special vaults for you. You can start investing in digital gold with just Rs.1 using Filit. ",
    },
    {
      question: "Is Filit Safe?",
      answer:
        "Absolutely, Filit is completely safe & secured. We've teamed up with Cashfree to make sure your payments are safe. We use UPI autopay, which is a secure way to pay, and we follow rules from RBI, the bank authority. Your money goes into buying real gold (24K 999 pure gold) from Augmont. which is NABL and BIS accredited and a member of India Good Delivery standard on NSE, BSE and MCX. The gold is hallmarked by a government-approved hallmarking agency as per the BIS guidelines.. This gold is completely secured in Sequel Vaults, which are watched over by special people registered with SEBI and IDBI, two important organizations.",
    },
    {
      question: "Can I withdraw money whenever I want?",
      answer:
        "You can withdraw your money anytime after 48 hours of investment. There is no minimum lock-in period.",
    },
    {
      question: "What is AutoPay and why do you need it?",
      answer:
        "AutoPay is a service needed to ensure that your investments are automatic and hassle-free. You just need to enter your UPI ID and approve the AutoPay request to proceed.",
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
