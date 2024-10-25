import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import CommentSection from "./components/CommentSection/CommentSection";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import VideoDetails from "./components/VideoDetails/VideoDetails";
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
      <NavBar />
      <main>
        <VideoPlayer activeVideo={activeVideo} />
        <div className="layout-container">
          <VideoDetails activeVideo={activeVideo} />
          <CommentSection activeVideo={activeVideo} />
          <VideoBank
            videos={videos}
            activeVideo={activeVideo}
            changeActiveVideo={changeActiveVideo}
          />
        </div>
      </main>
    </>
  );
}

export default App;
