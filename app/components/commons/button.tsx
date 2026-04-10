import React from "react";

type Variant = "base" | "more" | "start";

interface ButtonProps {
  verticalPadding?: string;
  horizontalPadding?: string;
  child?: React.ReactNode;
  type?: Variant;
}

const Button: React.FC<ButtonProps> = ({
  verticalPadding = "",
  horizontalPadding = "",
  child = null,
  type = "base",
}) => {
  const variants: Record<Variant, string> = {
    base: "bg-[var(--color-accent)] text-white border border-transparent rounded-[5px] transition-colors duration-150 ease-in-out hover:bg-[var(--color-accent-hover)]",
    more: "opacity-100 w-fit px-6 py-1.75 rounded-[50px] border border-[var(--color-accent)] bg-transparent text-[var(--color-accent)] transition-colors duration-150 ease-in-out hover:bg-[var(--color-accent-hover)]/10",
    start: "bg-green-600 text-white hover:bg-green-700 rounded-md",
  };

  const classes = [
    verticalPadding,
    horizontalPadding,
    "inline-flex items-center justify-center font-medium focus:outline-none",
    variants[type],
  ].join(" ");

  return (
    <button type="button" className={classes}>
      {child}
    </button>
  );
};

export default Button;
