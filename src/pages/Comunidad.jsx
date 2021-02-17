import { Card, CardContent, Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
const Texto = styled.h2`
  color: #e9e9e9;
  font-size: 1em;
  font-weight: bold;
`;
const Wrapper = styled.div`
  height: 100vh;
`;
const Comunidad = () => {
  return (
    <Wrapper>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={{ height: "100vh", backgroundColor: "#e9e9e9" }}
        spacing={3}
      >
        <Grid item xs={12}>
          <Card style={{ backgroundColor: "#232323" }}>
            <CardContent>
              <Texto>125152 suscriptores</Texto>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card style={{ backgroundColor: "#232323" }}>
            <CardContent>
              <Texto>125152 suscriptores</Texto>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card
            elevation={3}
            color="primary"
            style={{ backgroundColor: "#232323" }}
          >
            <CardContent>
              <Texto>125152 suscriptores</Texto>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default Comunidad;
