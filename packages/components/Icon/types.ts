import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface IconProps {
  icon: string | object | Array<string> | IconDefinition;
  spin?: boolean;
  pulse?: boolean;
  border?: boolean;
  fixedWidth?: boolean;
  flip?: "horizontal" | "vertical" | "both";
  rotation?: 90 | 180 | 270;
  swapOpacity?: boolean;
  style?: Record<string, string>;
  className?: string;
  mask?: string | object | Array<string>;
  listItem?: boolean;
  pull?: boolean;
  size?: "2xs" | "xs" | "sm" | "lg" | "xl" | "2xl" | "1x" | "2x" | "3x" | "4x" | "5x" | "6x" | "7x" | "8x" | "9x" | "10x";
  transform?: object | string;
  symbol?: boolean | string;
  title?: string;
  inverse?: boolean;
  bounce?: boolean;
  shake?: boolean;
  beat?: boolean;
  fade?: boolean;
  beatFade?: boolean;
  spinPulse?: boolean;
  spinReverse?: boolean;
  type?: "primary" | "success" | "warning" | "danger" | "info";
  color?: string
}