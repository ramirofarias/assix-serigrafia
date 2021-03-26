import { Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import videosBg from "./img/videosBg.svg";
import "./UltimosVideos.css";

const APIKEY = process.env.REACT_APP_YOUTUBE_API_KEY;

const EmbedWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const UltimosVideos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchLatestVideos = async () => {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?channelId=UCr4Lrxwu3Sm3yNtf37cI7tg&maxResults=4&order=date&type=video&key=${APIKEY}`
      );
      const data = await response.json();
      console.log(data);
      const videosList = data.items.map(
        (obj) => "https://www.youtube.com/embed/" + obj.id.videoId
      );
      setVideos(videosList);
    };
    fetchLatestVideos();
  }, []);

  const smallVideos = [];

  for (let i = 1; i < videos.length; i++) {
    smallVideos.push(
      <Grid item style={{ margin: "1em" }}>
        <iframe
          src={videos[i]}
          title="asdasd"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </Grid>
    );
  }

  return (
    <Grid
      id="videos"
      container
      className="videos--wrapper"
      direction="row"
      justify="center"
      alignItems="center"
      style={{
        backgroundColor: "#232323",
        height: "100%",
        width: "100vw",
        padding: "2em",
      }}
    >
      <div className="videos">
        <Grid item>
          <Typography variant="h2">ÚLTIMOS VIDEOS</Typography>
        </Grid>
        <Grid item xs={12}>
          <EmbedWrapper>
            <iframe
              className="ultimoVideo"
              src={videos[0]}
              width="100%"
              height="auto"
              frameBorder="0"
              allowFullScreen
              title="Último video"
              style={{ marginTop: "1em" }}
            ></iframe>
          </EmbedWrapper>
        </Grid>
        <Grid container direction="row" justify="center" alignItems="center">
          {smallVideos}
        </Grid>
      </div>
    </Grid>
  );
};

export default UltimosVideos;
