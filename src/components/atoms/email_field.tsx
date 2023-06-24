import React from "react";

import Button from "./button";

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
  const { className, variant } = props;
  return (
    <form
      action=""
      className={`${BASE_CLASSES} ${
        variant === "secondary"
          ? VARIANT_CLASSES.secondary
          : VARIANT_CLASSES.primary
      } ${className}`}
    >
      <input
        type="text"
        className={"bg-transparent border-0 md:mx-3 focus:outline-0 focus:border-5 focus:border-red md:grow border-[#FCFCFC80] max-md:border-2 max-md:rounded-full max-md:w-full p-3" + (variant === "secondary" ? " placeholder:text-white max-md:bg-[#0D0D1880]" : "")}
        placeholder="Enter Email"
      />
      <Button className="py-3 text-sm max-md:w-full" variant={variant}>Join Waitlist</Button>
    </form>
  );
};

export default EmailField;
