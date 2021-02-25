import HeroButton from "../components/HeroButton";
import React from "react";
import styled from "styled-components";
import "./Homepage.css";
import { Grid, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import Navbar from "../components/Navbar";

const Titulo = styled.h1`
  font-size: 2.5em;
  font-weight: bold;
  font-style: italic;
`;

const Texto = styled.p`
  font-size: 1.5em;
  font-weight: lighter;
`;

const Homepage = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <div className="wrapper">
      <Navbar />
      <div className="hero">
        <Grid
          container
          direction={matches ? "column" : "row"}
          justify="center"
          alignItems={matches ? "flex-end" : "center"}
          style={{ height: "100vh" }}
        >
          <Grid item className="hero--wrapper" xs={12} color={"primary"}>
            <div className="hero--text">
              <Typography variant="h1">ASSIX! </Typography>
              <Typography variant="subtitle1">TALLER DE SERIGRAFÍA</Typography>
              <Typography variant="body1">
                Aprende estampado textil con videotutoriales en español.
              </Typography>
              <Typography variant="body1">
                Resuelve todas tus dudas en nuestra comunidad.
              </Typography>
            </div>

            <HeroButton />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Homepage;
