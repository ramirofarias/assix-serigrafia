import HeroButton from "../components/HeroButton";
import React from "react";
import "./Homepage.css";
import { Grid, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import Navbar from "../components/Navbar";

const Homepage = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <div className="wrapper">
      <div className="hero">
        <div className="hero--wrapper">
          <div className="hero--text">
            <Typography variant="h1">ASSIX! </Typography>
            <Typography variant="h3">TALLER DE SERIGRAFÍA</Typography>
            <Typography variant="body1">
              Aprende estampado textil con videotutoriales en español.
            </Typography>
            <Typography variant="body1">
              Resuelve todas tus dudas en nuestra comunidad.
            </Typography>
          </div>

          <HeroButton />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
