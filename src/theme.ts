export const theme = {
  colors: {
    white: "#FFFFFF",
    gray: "#C7C7D6",

    blue: "rgb(0,122,255)",
    green: "rgb(52,199,89)",
    indigo: "rgb(88,86,214)",
    orange: "rgb(255,149,0)",
    pink: "rgb(255,45,85)",
    purple: "rgb(175,82,222)",
    red: "rgb(255,59,48)",
    yellow: "rgb(255,204,0)",
    teal: "rgb(90,200,250)",

    text: {
      dark: "#333333",
      faded: "rgba(255,255,255,0.5)",
    },

    lighterColors: {
      white:
        "radial-gradient(179.08% 100% at 100% 0%, rgba(135, 154, 182, 0.54) 0%, rgba(26, 26, 26, 0) 100%)",
      blue:
        "radial-gradient(179.08% 100% at 100% 0%,rgba(135, 154, 230, 0.54) 0%,rgba(26, 26, 26, 0) 100%)",
    },
  },
  breakpoints: {
    xs: "320px",
    sm: "425px",
    md: "768px",
    lg: "1024px",
    desktophd: "1920px",
  },
};

export type ThemeType = typeof theme;

export type ColorType =
  | "blue"
  | "green"
  | "indigo"
  | "orange"
  | "pink"
  | "purple"
  | "red"
  | "yellow"
  | "teal";
