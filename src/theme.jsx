import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
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

export default theme;
