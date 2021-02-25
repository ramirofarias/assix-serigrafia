import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
} from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import "./Comunidad.css";
import Telegram from "./img/telegram.png";
import Facebook from "./img/facebook.png";
import Instagram from "./img/instagram.png";
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
      direction="row"
      alignItems="center"
      style={{ height: "100vh" }}
    >
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item>
          <Titulo>COMUNIDAD</Titulo>
        </Grid>
        <Grid item>
          <Texto>🤔 Resolvé todas tus dudas,</Texto>
          <Texto>👕 Compartí tus creaciones,</Texto>
          <Texto>🤙 Y mucho más!</Texto>
        </Grid>
      </Grid>
      <Grid container direction="row" justify="center">
        <Grid item>
          <Card style={{ backgroundColor: "#232323" }} className="card">
            <CardMedia
              component="img"
              alt="Canal de Telegram"
              height="200"
              image={Telegram}
              title="Canal de Telegram"
            />
            <CardContent>
              <h4>Canal de Telegram</h4>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card style={{ backgroundColor: "#232323" }} className="card">
            <CardMedia
              component="img"
              alt="Grupo de Facebook"
              height="200"
              image={Facebook}
              title="Grupo de Facebook"
            />
            <CardContent>
              <h4>Grupo de Facebook</h4>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card style={{ backgroundColor: "#232323" }} className="card">
            <CardMedia
              component="img"
              alt="Perfil en Instagram"
              height="200"
              image={Instagram}
              title="Perfil en Instagram"
            />
            <CardContent>
              <h4>Perfil en Instagram</h4>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Comunidad;
