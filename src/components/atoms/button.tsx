import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
}

const VARIANTS = {
  primary: "bg-white text-black",
  secondary: "bg-transparent border border-white text-white hover:bg-white hover:text-black",
};

const BASE_CLASSES = "rounded-full px-3 font-semibold transition duration-[0.25s] hover:shadow-[0_0_4px_2px_#ffffff80]"

const Button = (props: ButtonProps) => {
  const { children, className, variant } = props;
  return (
    <button
      className={`${BASE_CLASSES} ${
        variant === "secondary"
          ? VARIANTS.secondary
          : VARIANTS.primary
      } ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
