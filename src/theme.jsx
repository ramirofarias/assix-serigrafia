import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

export let theme = createMuiTheme({
  typography: {
    fontFamily: "bebas-kai, sans-serif",
    h1: {
      fontFamily: "bebas-kai",
      fontStyle: "italic",
    },

    h2: {
      fontStyle: "italic",
      color: "primary",
    },

    h3: {
      fontStyle: "italic",
      color: "#232323",
      fontSize: "3.5rem",
    },

    subtitle1: {
      color: "primary",
      fontSize: "3rem",
      fontStyle: "italic",
    },

    subtitle2: {
      fontFamily: "Raleway",
      fontSize: "1.5rem",
    },

    body1: {
      fontFamily: "Raleway",
      fontSize: "1.8rem",
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
