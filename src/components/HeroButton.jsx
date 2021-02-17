import React from "react";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { Button } from "@material-ui/core";

const HeroButton = (props) => {
  return (
    <Button
      color="primary"
      variant="contained"
      startIcon={<PlayArrowIcon style={{ fontSize: 50 }} />}
    >
      SUSCRIBITE
    </Button>
  );
};

export default HeroButton;
