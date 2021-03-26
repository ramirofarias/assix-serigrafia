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
    const fetchSubs = async () => {
      const API_URL = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CHANNEL_ID}&key=${YOUTUBE_API}`;
      const response = await fetch(API_URL);
      const data = await response.json();
      const subs = parseInt(data.items[0].statistics.subscriberCount);
      const views = parseInt(data.items[0].statistics.viewCount);
      const videos = parseInt(data.items[0].statistics.videoCount);
      setVideosCount(videos);
      setViewCount(views);
      setSubscriberCount(subs);
    };
    fetchSubs();
  }, []);

  return (
    <Grid
      id="canal"
      container
      className="canal--wrapper"
      direction="column"
      justify="flex-start"
      alignItems="center"
      spacing={5}
      style={{ padding: "3em" }}
    >
      <Grid
        container
        direction="column"
        alignItems="center"
        spacing={3}
        style={{ marginBottom: "1em" }}
      >
        <Grid
          item
          style={{
            display: "grid",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h2" style={{ color: "#232323" }}>
            El canal
          </Typography>
        </Grid>
        <Grid item lg={6}>
          <Typography variant="subtitle2" style={{ textAlign: "center" }}>
            Creado en 2016, el canal está orientado a resolver todas tus dudas
            sobre serigrafía. Podrás encontrar tutoriales, Q&A, y muchas cosas
            más para que puedas convertir tus diseños en realidad. ¡Suscribite y
            activá la campanita para no perderte de ningún video!
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justify="center"
        spacing={5}
        style={{ marginBottom: "3em" }}
      >
        <Grid item>
          <Card
            style={{ backgroundColor: "#232323" }}
            id="subscriberCount"
            className="card"
          >
            <CardContent>
              <Typography variant="h2" style={{ fontStyle: "normal" }}>
                <CountUp end={subscriberCount} duration={4} />
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
              <Typography variant="h2" style={{ fontStyle: "normal" }}>
                <CountUp end={videoCount} duration={4} />
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
              <Typography variant="h2" style={{ fontStyle: "normal" }}>
                <CountUp end={viewCount} duration={4} />
              </Typography>
              <Typography variant="body2">visualizaciones</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Canal;
