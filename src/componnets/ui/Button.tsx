import React from "react";
import type { ButtonProps } from "../../types/input";

const Button: React.FC<ButtonProps> = ({ variant = "primary", className, children, ...props }) => {
  return (
    //  This button has two possible states primary and secondery
    <button
      className={` overflow-hidden rounded-sm font-medium  cursor-pointer relative px-4 ${
        variant === "primary" ? "py-2.5 bg-gold-200 bg-opacity-90 text-white hover:bg-opacity-100 hover:text-black" : ""
      } ${variant === "secondary" ? " text-black border bg-white border-gold-200 hover:text-white hover:bg-gold-200" : ""}  ${className ?? className}`}
      {...props}
    >
      <span className="font-bold"> {children}</span>
    </button>
  );
};
export default Button;
