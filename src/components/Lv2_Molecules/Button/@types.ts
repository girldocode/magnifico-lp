import { FontSize } from "@/components/Lv1_Atoms/MText/@types";

export type ButtonVariant = "sm" | "lg";
export type ButtonColor = "blue-600" | "white";
export type ButtonWeight = "medium" | "bold" | "semibold";
export type ButtonText = FontSize;
export type textAlign = "center";

export interface ButtonProps {
  children: React.ReactNode;
  size?: ButtonText;
  variant: ButtonVariant;
  className?: string;
  weight: ButtonWeight;
  color: ButtonColor;
  textAlign: textAlign;
}
