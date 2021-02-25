import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import CountUp from "react-countup";

import "./Canal.css";
export const YOUTUBE_API = process.env.REACT_APP_YOUTUBE_API_KEY;

const Canal = () => {
  const CHANNEL_ID = "UCr4Lrxwu3Sm3yNtf37cI7tg";

  const [subscriberCount, setSubscriberCount] = useState(0);
  const [videoCount, setVideosCount] = useState(0);
  const [viewCount, setViewCount] = useState(0);

  useEffect(() => {
    // const fetchSubs = async () => {
    //   const API_URL = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CHANNEL_ID}&key=${YOUTUBE_API}`;
    //   const response = await fetch(API_URL);
    //   const data = await response.json();
    //   const subs = parseInt(data.items[0].statistics.subscriberCount);
    //   const views = parseInt(data.items[0].statistics.viewCount);
    //   const videos = parseInt(data.items[0].statistics.videoCount);
    //   setVideosCount(videos);
    //   setViewCount(views);
    //   setSubscriberCount(subs);
    // };
    // fetchSubs();
  }, []);

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={5}
      style={{ backgroundColor: "#e9e9e9", padding: "3em 0" }}
    >
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <Typography variant="h2" style={{ color: "#232323" }}>
            El canal
          </Typography>
        </Grid>
        <Grid item lg={6}>
          <Typography variant="subtitle2" style={{ textAlign: "center" }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
            ex debitis quidem ipsa ad at commodi accusantium id quisquam, alias
            doloremque odit recusandae ea delectus soluta iure labore?
            Dignissimos, laudantium.
          </Typography>
        </Grid>
      </Grid>
      <Grid item>
        <Card
          style={{ backgroundColor: "#232323" }}
          id="subscriberCount"
          className="card"
        >
          <CardContent>
            <Typography variant="h2">
              {/* <CountUp end={subscriberCount} duration={4} /> */}
            </Typography>
            <Typography variant="body2">suscriptores</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        <Card
          style={{ backgroundColor: "#232323" }}
          id="videosCount"
          className="card"
        >
          <CardContent>
            <Typography variant="h2">
              {/* <CountUp end={videoCount} duration={4} /> */}
            </Typography>
            <Typography variant="body2">videos</Typography>
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
            <Typography variant="h2">
              {/* <CountUp end={viewCount} duration={4} /> */}
            </Typography>
            <Typography variant="body2">visualizaciones</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Canal;
