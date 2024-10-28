import CommentSection from "../../components/CommentSection/CommentSection";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import VideoBank from "../../components/VideoBank/VideoBank";
import { useEffect, useState } from "react";
import { apiBaseUrl, apiKey } from "../../utils/api";
import { useParams } from "react-router-dom";
import axios from "axios";
import videoData from "../../data/video-details.json";

function VideoDetailsPage() {
  const { videoId } = useParams();
  const [activeVideo, setActiveVideo] = useState(videoData[0]);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await axios.get(
          `${apiBaseUrl}/videos/${videoId}?api_key=${apiKey}`
        );
        setActiveVideo(response.data);
      } catch (error) {
        console.error("Could not fetch video", error);
      }
    };
    fetchVideo();
  }, [videoId]);

  return (
    <main>
      <VideoPlayer activeVideo={activeVideo} />
      <div className="layout-container">
        <VideoDetails activeVideo={activeVideo} />
        <CommentSection activeVideo={activeVideo} />
        <VideoBank activeVideo={activeVideo} />
      </div>
    </main>
  );
}

export default VideoDetailsPage;
