import { $cx } from "@/lib";
import React from "react";

import { MText } from "@/components/Lv1_Atoms";
import {
  ButtonColor,
  ButtonText,
  ButtonVariant,
  ButtonWeight,
  InlineButtonProps,
  textAlign,
} from "./@types";
import styles from "./InlineButton.module.scss";
const InlineButton: React.FC<InlineButtonProps> = ({
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
    blue: `${styles.btn} ${styles["btn--blue"]}`,
    white: `${styles.btn} ${styles["btn--white"]} display-flex items-center `,
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
    "blue-600": "font-blue-600",
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

export default InlineButton;
