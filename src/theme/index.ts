import { theme as chakraTheme, extendTheme } from "@chakra-ui/react";

const breakpoints = {
  start: "0px",
  sm: "320px",
  md: "768px",
  lg: "1024px",
  xl: "1366px",
};

const fonts = {
  ...chakraTheme.fonts,
  body: `'DM Sans', sans-serif`,
  heading: `'DM Sans', sans-serif`,
};

const colors = {
  ...chakraTheme.colors,
  background: {
    primary: "#FFFFFF",
    secondary: {
      50: "#e0f3f4",
      100: "#b3e1e3",
      200: "#80ced1",
      300: "#4dbabf",
      400: "#26abb1",
      500: "#009ca3",
      600: "#00949b",
      700: "#008a91",
      800: "#008088",
      900: "#006e77",
    },
    tertiary: {
      50: "#e6e2ec",
      100: "#bfb6d0",
      200: "#9586b0",
      300: "#6b5690",
      400: "#4b3179",
      500: "#2b0d61",
      600: "#260b59",
      700: "#20094f",
      800: "#1a0745",
      900: "#100333",
    },
    quaternary: {
      50: "#f6f5fa",
      100: "#e9e6f2",
      200: "#dad5ea",
      300: "#cbc4e1",
      400: "#c0b8da",
      500: "#b5abd4",
      600: "#aea4cf",
      700: "#a59ac9",
      800: "#9d91c3",
      900: "#8d80b9",
    },
  },
  linears: {
    primary: "linear-gradient(135deg, #D9AFD9 0%, #97D9E1 33%)",
  },
  text: {
    primary: "#404040",
    secondary: "#9AA1B3",
    tertiary: "#FFFFFF",
  },
};

const newTheme: any = extendTheme({
  fonts,
  colors,
  breakpoints,
  components: { Button: { baseStyle: { _focus: { boxShadow: "none" } } } },
});

export { newTheme };
