import { Card, CardContent, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import CountUp from "react-countup";

import "./Comunidad.css";
export const YOUTUBE_API = process.env.REACT_APP_YOUTUBE_API_KEY;

const Comunidad = () => {
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
      container
      direction="row"
      justify="center"
      alignItems="center"
      style={{ height: "50vh", backgroundColor: "#e9e9e9" }}
    >
      <Grid item>
        <Card
          style={{ backgroundColor: "#232323" }}
          id="subscriberCount"
          className="card"
        >
          <CardContent>
            <h2>
              <CountUp end={subscriberCount} duration={3} />
            </h2>
            <h2>suscriptores</h2>
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
            <h2>
              <CountUp end={videoCount} duration={4} />
            </h2>
            <h2>videos</h2>
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
            <h2>
              <CountUp end={viewCount} duration={4} />
            </h2>
            <h2>visualizaciones</h2>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Comunidad;
