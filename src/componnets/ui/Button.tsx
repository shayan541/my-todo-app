import React from "react";
import type { ButtonProps } from "../../types/button";

const Button: React.FC<ButtonProps> = ({ variant = "primary", className, children, ...props }) => {
  return (
    <button
      className={`py-2.5 overflow-hidden rounded-sm font-medium transition cursor-pointer relative ${
        variant === "primary" ? " px-4 bg-[var(--yellow)] text-black hover:bg-blue-700" : ""
      } ${variant === "secondary" ? "md:px-28 px-4 text-green-300 border border-green-300 hover:text-black" : ""}  ${
        className ?? className
      }`}
      {...props}
    >
      <span
        className={`absolute top-0 left-0 h-full bg-green-500 transition-all duration-1000 ease-out w-0 group-hover:w-full mask-gradient group-hover:mask-none`}
      />
      <span className="font-bold text-17 relative z-10"> {children}</span>
    </button>
  );
};
export default Button;
