import CommentSection from "../../components/CommentSection/CommentSection";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import VideoBank from "../../components/VideoBank/VideoBank";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { apiBaseUrl, apiKey } from "../../utils/api";
import { useParams } from "react-router-dom";
import axios from "axios";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

function VideoDetailsPage() {
  const { videoId } = useParams();
  const [activeVideo, setActiveVideo] = useState(null);
  const [videoList, setVideoList] = useState([]);
  const [notFound, setNotFound] = useState(false);

  const fetchVideos = async () => {
    try {
      const response = await axios.get(
        `${apiBaseUrl}/videos?api_key=${apiKey}`
      );
      return response.data;
    } catch (error) {
      console.error("Could not fetch videos", error);
    }
  };

  const fetchDefaultVideoId = async () => {
    const videoList = await fetchVideos();
    return videoList[0].id;
  };

  const fetchVideoById = async (id) => {
    try {
      const response = await axios.get(
        `${apiBaseUrl}/videos/${id}?api_key=${apiKey}`
      );
      response.status === 404
        ? setNotFound(true)
        : setActiveVideo(response.data);
    } catch (error) {
      console.error("Could not fetch video", error);
      setNotFound(true);
    }
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

  useEffect(() => {
    const loadVideos = async () => {
      const videos = await fetchVideos();
      setVideoList(videos);
    };
    loadVideos();
  }, []);

  if (notFound) {
    return <Navigate to="/page-not-found" />;
  }

  return (
    <main>
      {activeVideo ? (
        <>
          <VideoPlayer activeVideo={activeVideo} />
          <div className="layout-container">
            <VideoDetails activeVideo={activeVideo} />
            <CommentSection comments={activeVideo.comments} />
            <VideoBank videoList={videoList} activeVideoId={activeVideo.id} />
          </div>
        </>
      ) : (
        <LoadingScreen />
      )}
    </main>
  );
}

export default VideoDetailsPage;
