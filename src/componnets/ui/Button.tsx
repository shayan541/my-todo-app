import React from "react";
import type { ButtonProps } from "../../types/input";

const Button: React.FC<ButtonProps> = ({ variant = "primary", className, children, ...props }) => {
  return (
    //  This button has two possible states primary and secondery
    <button
      className={`py-2.5 overflow-hidden rounded-sm font-medium  cursor-pointer relative  ${
        variant === "primary" ? " px-4 bg-gold-200 bg-opacity-90 text-white hover:bg-opacity-100 hover:text-black" : ""
      } ${variant === "secondary" ? "md:px-28 px-4 text-green-300 border border-green-300 hover:text-black" : ""}  ${
        className ?? className
      }`}
      {...props}
    >
      <span className="font-bold"> {children}</span>
    </button>
  );
};
export default Button;
