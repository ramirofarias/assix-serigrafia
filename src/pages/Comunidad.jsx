import { Card, CardContent, Grid } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const Titulo = styled.h2`
  color: #232323;
`;
const Texto = styled.p`
  color: #232323;
  font-weight: regular;
`;

const Comunidad = () => {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      style={{ height: "100vh" }}
    >
      <Grid item>
        <Titulo>COMUNIDAD</Titulo>
      </Grid>
      <Grid item>
        <Texto>🤔 Resolvé todas tus dudas,</Texto>
        <Texto>👕 Compartí tus creaciones,</Texto>
        <Texto>🤙 Y mucho más!</Texto>
      </Grid>
      <Grid container direction="row" justify="center">
        <Grid item>
          <Card
            style={{ backgroundColor: "#232323" }}
            id="viewsCount"
            className="card"
          >
            <CardContent>
              <h2></h2>
              <h2>visualizaciones</h2>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card
            style={{ backgroundColor: "#232323" }}
            id="viewsCount"
            className="card"
          >
            <CardContent>
              <h2></h2>
              <h2>visualizaciones</h2>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Comunidad;
