"use client";
import React from "react";
import Button from "./button";
import { toast } from "react-toastify";

interface EmailFieldProps {
  className?: string;
  variant?: "primary" | "secondary";
}

const VARIANT_CLASSES = {
  primary: "",
  secondary: "text-white md:bg-[#0D0D1880]",
};

const BASE_CLASSES =
  "md:border-2 border-[#FCFCFC80] md:rounded-full h-full flex max-md:flex-col mx-auto group-focus:border-[#FFFFFF] max-md:gap-2 max-w-[90%]";

const EmailField = (props: EmailFieldProps) => {
  function ValidateEmail(input: any) {
    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        input.get("email")
      )
    ) {
      return true;
    } else {
      return false;
    }
  }
  const { className, variant } = props;
  return (
    <form
      className={`${BASE_CLASSES} ${
        variant === "secondary"
          ? VARIANT_CLASSES.secondary
          : VARIANT_CLASSES.primary
      } ${className}`}
      action="https://script.google.com/macros/s/AKfycbzVk2jgezCtjpkeKozjrPAJM_NKhej_Sj-ttq_CN3M8a5hNnqQ6uSIc8KQOO9VpDZCvJg/exec"
      method="post"
      onSubmit={(e) => {
        e.preventDefault();
        //@ts-ignore
        const data = new FormData(e.target);
        //@ts-ignore
        const action = e.target.action;
        if (ValidateEmail(data)) {
          fetch(action, {
            method: "POST",
            body: data,
          });
          toast("Success! We'll contact you soon.", {
            position: "top-center",
          });
        } else {
          toast.error("Oh no, doesn't look like a valid email.");
        }
      }}
    >
      <input
        type="text"
        className={
          "bg-transparent border-0 md:mx-3 focus:outline-0 focus:border-5 focus:border-red md:grow border-[#FCFCFC80] max-md:border-2 max-md:rounded-full max-md:w-full p-3" +
          (variant === "secondary"
            ? " placeholder:text-white max-md:bg-[#0D0D1880]"
            : "")
        }
        name="email"
        placeholder="Enter Email"
      />
      <Button
        className="py-3 text-sm max-md:w-full"
        variant={variant}
        type="submit"
      >
        Join Waitlist
      </Button>
    </form>
  );
};

export default EmailField;
