import "./App.scss";
import Header from "./components/Header/Header";
import CommentSection from "./components/CommentSection/CommentSection";
import CurrentVideoSection from "./components/CurrentVideoSection/CurrentVideoSection";
import VideoBank from "./components/VideoBank/VideoBank";
import videoData from "./data/video-details.json";
import { useState } from "react";

function App() {
  const [videos, setVideos] = useState(videoData);
  const [activeVideo, setActiveVideo] = useState(videos[0]);
  console.log(`In App - activeVideo = ${activeVideo}`);

  const changeActiveVideo = (id) => {
    setActiveVideo(id);
  };

  return (
    <>
      <Header />
      <CurrentVideoSection activeVideo={activeVideo} />
      <CommentSection activeVideo={activeVideo} />
      <VideoBank videos={videos} activeVideo={activeVideo} />
    </>
  );
}

export default App;
