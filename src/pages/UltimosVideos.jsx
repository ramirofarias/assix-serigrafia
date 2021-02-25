import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";

const APIKEY = process.env.REACT_APP_YOUTUBE_API_KEY;

const UltimosVideos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchLatestVideos = async () => {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?channelId=UCr4Lrxwu3Sm3yNtf37cI7tg&maxResults=4&order=date&type=video&key=${APIKEY}`
      );
      const data = await response.json();
      const videosList = data.items.map(
        (obj) => "http://www.youtube.com/embed/" + obj.id.videoId
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
          width="auto"
          height="100%"
          title="asdasd"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </Grid>
    );
  }

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      style={{ backgroundColor: "#232323", height: "100%" }}
    >
      <div className="videos">
        <Grid item>
          <h2>ÚLTIMOS VIDEOS</h2>
        </Grid>
        <Grid item xs={12}>
          <iframe
            src={videos[0]}
            width="1280"
            height="720"
            title="asdasd"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </Grid>
        <Grid container direction="row" justify="center" alignItems="center">
          {smallVideos}
        </Grid>
      </div>
    </Grid>
  );
};

export default UltimosVideos;
