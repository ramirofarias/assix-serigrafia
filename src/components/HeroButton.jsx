import React from "react";
import styled from "styled-components";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { Button } from "@material-ui/core";

const HeroButton = () => {
  return (
    <Button color="secondary" variant="contained" startIcon={<PlayArrowIcon />}>
      SUSCRIBITE
    </Button>
  );
};

export default HeroButton;
