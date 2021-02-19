import { Card, CardContent } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import styled from "styled-components";

const YoutubeText = styled.h2`
  color: #e9e9e9;
  font-size: 1em;
  font-weight: bold;
`;

const YOUTUBE_API = process.env.REACT_APP_YOUTUBE_API_KEY;
const CHANNEL_ID = "UCr4Lrxwu3Sm3yNtf37cI7tg";

const YoutubeCard = () => {
  const [subscriberCount, setSubscriberCount] = useState(0);

  useEffect(() => {
    const fetchSubs = async () => {
      const API_URL = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CHANNEL_ID}&key=${YOUTUBE_API}`;
      const response = await fetch(API_URL);
      const data = await response.json();
      const subs = data.items[0].statistics.subscriberCount;
      console.log(data);

      setSubscriberCount(subs);
    };
    fetchSubs();
  }, []);

  return (
    <Card style={{ backgroundColor: "#232323" }}>
      <CardContent>
        <YoutubeText>
          <CountUp end={subscriberCount} />
          <YoutubeText>suscriptores</YoutubeText>
        </YoutubeText>
      </CardContent>
    </Card>
  );
};

export default YoutubeCard;
