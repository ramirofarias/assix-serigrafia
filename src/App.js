import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";
import React from "react";
import Homepage from "./pages/Homepage";
import Canal from "./pages/Canal";
import UltimosVideos from "./pages/UltimosVideos";
import Comunidad from "./pages/Comunidad";
import { HashRouter as Router } from "react-router-dom";
import Navbar from "components/Navbar";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router hashType="noslash">
        <Navbar />
        <Homepage />
        <Canal />
        <UltimosVideos />
        <Comunidad />
      </Router>
    </ThemeProvider>
  );
};

export default App;
