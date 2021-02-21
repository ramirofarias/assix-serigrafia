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

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      style={{ backgroundColor: "#232323" }}
    >
      <div className="users">
        {videos.map((video) => (
          <Grid item xs={12}>
            <iframe
              src={video}
              width="540"
              height="450"
              title="asdasd"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </Grid>
        ))}
      </div>
    </Grid>
  );
};

export default UltimosVideos;
