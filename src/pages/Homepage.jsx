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
      <Navbar />
      <div className="hero">
        <Grid
          container
          direction={matches ? "column" : "row"}
          alignItems={matches ? "flex-end" : "center"}
          style={{ height: "100vh", padding: "2em" }}
        >
          <Grid
            item
            className="hero--wrapper"
            xs={12}
            md={4}
            lg={4}
            color={"primary"}
            style={{
              marginRight: matches ? "6rem" : 0,
              marginTop: matches ? "4rem" : 0,
            }}
          >
            <div className="hero--text">
              <Typography variant="h1">ASSIX! </Typography>
              <Typography variant="subtitle1">TALLER DE SERIGRAFÍA</Typography>
              <Typography variant={matches ? "body1" : "subtitle2"}>
                Aprende estampado textil con videotutoriales en español.
              </Typography>
              <Typography variant={matches ? "body1" : "subtitle2"}>
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
