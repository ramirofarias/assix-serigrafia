import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";
import React from "react";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import Comunidad from "./pages/Comunidad";
import UltimosVideos from "./pages/UltimosVideos";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Homepage />
      <Comunidad />
      <UltimosVideos />
    </ThemeProvider>
  );
};

export default App;
