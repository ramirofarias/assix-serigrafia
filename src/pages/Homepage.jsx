import HeroButton from "../components/HeroButton";
import React from "react";
import styled from "styled-components";
import "./Homepage.css";
import { Box, Grid } from "@material-ui/core";
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
  return (
    <div className="wrapper">
      <Navbar />
      <div className="hero">
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="flex-end"
          style={{ height: "100vh" }}
        >
          <Grid item xs={5} style={{ marginRight: "1em" }} color={"primary"}>
            <div className="hero--text">
              <Titulo>TALLER DE SERIGRAFÍA</Titulo>
              <Texto>
                Aprende estampado textil con videotutoriales en español.
              </Texto>
              <Texto>Resuelve todas tus dudas en nuestra comunidad.</Texto>
            </div>

            <HeroButton />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Homepage;
