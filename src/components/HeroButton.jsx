import React from "react";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { Button, Typography } from "@material-ui/core";
import styled from "styled-components";

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

const HeroButton = () => {
  return (
    <Link
      href="https://www.youtube.com/user/AlanSebas600?sub_confirmation=1"
      target="_blank"
      rel="noreferrer"
    >
      <Button
        color="primary"
        variant="contained"
        startIcon={<PlayArrowIcon style={{ fontSize: 50 }} />}
        style={{ padding: "0rem 1.5rem", marginTop: "1.5rem" }}
      >
        <Typography variant="body2" style={{ fontStyle: "normal" }}>
          Suscribite
        </Typography>
      </Button>
    </Link>
  );
};

export default HeroButton;
