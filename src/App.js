import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";
import React from "react";
import Homepage from "./pages/Homepage";
import Canal from "./pages/Canal";
import UltimosVideos from "./pages/UltimosVideos";
import Comunidad from "./pages/Comunidad";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Homepage />
      <Canal />
      <Comunidad />
    </ThemeProvider>
  );
};

export default App;
