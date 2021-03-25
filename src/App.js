import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";
import React, { useState } from "react";
import Homepage from "./pages/Homepage";
import Canal from "./pages/Canal";
import UltimosVideos from "./pages/UltimosVideos";
import Comunidad from "./pages/Comunidad";
import { HashRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import MobileNav from "./components/MobileNav";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <ThemeProvider theme={theme}>
      <Router hashType="noslash">
        <Navbar toggle={toggle} />
        <MobileNav isOpen={isOpen} toggle={toggle} />
        <Homepage />
        <Canal />
        <UltimosVideos />
        <Comunidad />
      </Router>
    </ThemeProvider>
  );
};

export default App;
