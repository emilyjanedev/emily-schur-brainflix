import "./App.scss";
import Header from "./components/Header/Header";
import CommentSection from "./components/CommentSection/CommentSection";
import CurrentVideo from "./components/CurrentVideo/CurrentVideo";
import CurrentVideoDetails from "./components/CurrentVideoDetails/CurrentVideoDetails";
import VideoBank from "./components/VideoBank/VideoBank";
import videoData from "./data/video-details.json";
import { useState } from "react";

function App() {
  const [videos, setVideos] = useState(videoData); //setVideos for future video adding
  const [activeVideo, setActiveVideo] = useState(videos[0]);

  const changeActiveVideo = (video) => {
    setActiveVideo(video);
  };

  return (
    <>
      <Header />
      <CurrentVideo activeVideo={activeVideo} />
      <div className="layout-container">
        <CurrentVideoDetails activeVideo={activeVideo} />
        <CommentSection activeVideo={activeVideo} />
        <VideoBank
          videos={videos}
          activeVideo={activeVideo}
          changeActiveVideo={changeActiveVideo}
        />
      </div>
    </>
  );
}

export default App;
