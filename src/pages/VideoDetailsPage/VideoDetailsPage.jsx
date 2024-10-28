import CommentSection from "../../components/CommentSection/CommentSection";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import VideoBank from "../../components/VideoBank/VideoBank";
import { useState } from "react";
import videoData from "../../data/video-details.json";

import { useParams } from "react-router-dom";

function VideoDetailsPage() {
  const [activeVideo, setActiveVideo] = useState(videoData[0]);

  const changeActiveVideo = (video) => {
    setActiveVideo(video);
  };

  return (
    <main>
      <VideoPlayer activeVideo={activeVideo} />
      <div className="layout-container">
        <VideoDetails activeVideo={activeVideo} />
        <CommentSection activeVideo={activeVideo} />
        <VideoBank
          activeVideo={activeVideo}
          changeActiveVideo={changeActiveVideo}
        />
      </div>
    </main>
  );
}

export default VideoDetailsPage;
