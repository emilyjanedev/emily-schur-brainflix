import CommentSection from "../../components/CommentSection/CommentSection";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import VideoBank from "../../components/VideoBank/VideoBank";
import { useEffect, useState } from "react";
import { apiBaseUrl, apiKey } from "../../utils/api";
import { useParams } from "react-router-dom";
import axios from "axios";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";

function VideoDetailsPage() {
  const { videoId } = useParams();
  const [activeVideo, setActiveVideo] = useState(null);

  const fetchDefaultVideoId = async () => {
    const response = await axios.get(`${apiBaseUrl}/videos?api_key=${apiKey}`);
    return response.data[0].id;
  };

  const fetchVideoById = async (id) => {
    const response = await axios.get(
      `${apiBaseUrl}/videos/${id}?api_key=${apiKey}`
    );
    setActiveVideo(response.data);
  };

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const videoIdToFetch = videoId || (await fetchDefaultVideoId());
        await fetchVideoById(videoIdToFetch);
      } catch (error) {
        console.error("Could not fetch video", error);
      }
    };
    fetchVideo();
  }, [videoId]);

  return (
    <main>
      {activeVideo ? (
        <>
          <VideoPlayer activeVideo={activeVideo} />
          <div className="layout-container">
            <VideoDetails activeVideo={activeVideo} />
            <CommentSection activeVideo={activeVideo} />
            <VideoBank activeVideo={activeVideo} />
          </div>
        </>
      ) : (
        <LoadingScreen />
      )}
    </main>
  );
}

export default VideoDetailsPage;
