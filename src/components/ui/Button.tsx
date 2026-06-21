"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type ButtonProps = HTMLMotionProps<"button"> & {
  variant?: "primary" | "secondary" | "ghost" | "outline" | "white";
  size?: "sm" | "md" | "lg";
};

const variants = {
  primary: "bg-primary text-white shadow-md hover:bg-primary-dark",
  secondary: "bg-primary-50 text-primary border border-primary-light hover:bg-primary-light",
  white: "bg-white text-primary shadow-md hover:bg-primary-50",
  ghost: "bg-transparent text-white/85 hover:bg-white/10",
  outline: "border border-white/30 text-white hover:bg-white/10",
};

const sizes = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-2.5 text-sm",
  lg: "px-8 py-3 text-sm",
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  children,
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "inline-flex cursor-pointer items-center justify-center rounded-full font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}
