import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

export let theme = createMuiTheme({
  typography: {
    fontFamily: "Bebas Kai",
    h1: {
      fontFamily: "Bebas Kai",
      fontStyle: "italic",
    },

    h2: {
      fontStyle: "italic",
    },

    subtitle1: {
      color: "primary",
      fontSize: "3rem",
      fontWeight: "lighter",
      fontStyle: "italic",
    },

    subtitle2: {
      fontFamily: "Raleway",
      fontSize: "1.5rem",
      fontWeight: "lighter",
    },

    body1: {
      fontFamily: "Raleway",
      fontWeight: "lighter",
      fontSize: "1.5rem",
    },

    body2: {
      color: "#e9e9e9",
      fontSize: "2rem",
      textAlign: "center",
    },
  },
  palette: {
    primary: {
      main: "#f00",
    },
    secondary: {
      main: "#e9e9e9",
    },
  },
  overrides: {
    MuiButton: {
      root: {
        color: "white",
        fontSize: "1em",
        fontWeight: "bold",
        fontStyle: "italic",
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
