export type ScreenSize = "xs" | "sm" | "md" | "lg" | "xl";

export const breakPoints = {
  xs: "480px",
  sm: "768px",
  md: "1050px",
  lg: "1440px",
  xl: "1920px",
};

export const breakPoint = {
  up: (size: ScreenSize) => {
    const width = breakPoints[size];
    return `@media screen and (min-width: ${width})`;
  },
  down: (size: ScreenSize) => {
    const width = breakPoints[size];
    return `@media screen and (max-width: ${width})`;
  },
};
