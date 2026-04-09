import React from "react";

type Variant = "base" | "more" | "start";

interface ButtonProps {
  verticalPadding?: string;
  horizontalPadding?: string;
  child?: React.ReactNode;
  type?: Variant;
}

const Button: React.FC<ButtonProps> = ({
  verticalPadding = "py-2",
  horizontalPadding = "px-4",
  child = null,
  type = "base",
}) => {
  const variants: Record<Variant, string> = {
    base: "btn-base text-white", // visual styles moved to colors.css
    more: "bg-blue-600 text-white hover:bg-blue-700 rounded-md",
    start: "bg-green-600 text-white hover:bg-green-700 rounded-md",
  };

  const classes = [
    verticalPadding,
    horizontalPadding,
    "inline-flex items-center justify-center font-medium transition-colors focus:outline-none",
    variants[type],
  ].join(" ");

  return (
    <button type="button" className={classes}>
      {child}
    </button>
  );
};

export default Button;
