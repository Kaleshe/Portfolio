import { cloneElement } from "react";

const Button = ({ children, ...rest }) =>
  cloneElement(children, {
    className:
      "bg-black text-white inline-block font-medium py-2 px-6 rounded-full cursor-pointer hover:bg-warm-gray-70 transition-all",
    ...rest,
  });

export default Button;

Button.className = "text-lg";
