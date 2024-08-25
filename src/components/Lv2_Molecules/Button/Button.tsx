import { $cx } from "@/lib";
import React from "react";

import { MText } from "@/components/Lv1_Atoms";
import {
  ButtonColor,
  ButtonProps,
  ButtonText,
  ButtonVariant,
  ButtonWeight,
  textAlign,
} from "./@types";
import styles from "./Button.module.scss";
const Button: React.FC<ButtonProps> = ({
  children,
  textAlign,
  color,
  weight,
  size,
  variant,
  className,
  ...props
}) => {
  const variantStyles: Record<ButtonVariant, string> = {
    sm: `${styles.btn} ${styles["btn--sm"]}`,
    lg: `${styles.btn} ${styles["btn--lg"]} display-flex items-center gap-4`,
  };

  const TextVariants: Record<ButtonText, string> = {
    xs: "font-xs",
    sm: "font-sm",
    base: "font-base",
    lg: "font-lg",
    xl: "font-xl",
    "2xl": "font-2xl",
    "3xl": "font-3xl",
    "4xl": "font-4xl",
    "5xl": "font-5xl",
    "6xl": "font-6xl",
    "7xl": "font-7xl",
    "8xl": "font-8xl",
    "9xl": "font-8xl",
  };

  const colorVariants: Record<ButtonColor, string> = {
    "blue-600": "font-purple-800",
    white: "font-white",
  };

  const weightVariants: Record<ButtonWeight, string> = {
    medium: "font-medium",
    bold: "bold",
    semibold: "font-semibold",
  };

  const textAlignVariants: Record<textAlign, string> = {
    center: "align-center",
  };

  const generalStyling =
    "border-lg border-none border-2 cursor-pointer display-flex items-center ";

  const classes = $cx(
    generalStyling,
    TextVariants[size as keyof typeof TextVariants],
    variantStyles[variant],
    colorVariants[color],
    weightVariants[weight],
    textAlignVariants[textAlign as keyof typeof textAlignVariants],
    className
  );

  return (
    <button className={classes} {...props}>
      <MText color={color} weight={weight} size={size} textAlign={textAlign}>
        {children}
      </MText>
    </button>
  );
};

export default Button;
