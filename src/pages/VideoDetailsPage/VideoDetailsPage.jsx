import CommentSection from "../../components/CommentSection/CommentSection";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import VideoBank from "../../components/VideoBank/VideoBank";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { apiBaseUrl, apiKey } from "../../utils/api";
import { useParams } from "react-router-dom";
import axios from "axios";

function VideoDetailsPage() {
  const { videoId } = useParams();
  const [activeVideo, setActiveVideo] = useState(null);
  const [videoList, setVideoList] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [comments, setComments] = useState([]);

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

  const fetchComments = async () => {
    try {
      const { data } = await axios.get(
        `${apiBaseUrl}/videos/${activeVideo.id}?api_key=${apiKey}`
      );
      setComments(data.comments.sort((a, b) => b.timestamp - a.timestamp));
    } catch (error) {
      console.error("Could not get comments", error);
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
    const loadVideos = async () => {
      const videos = await fetchVideos();
      setVideoList(videos);
    };
    loadVideos();
  }, []);

  useEffect(() => {
    const fetchActiveVideo = async () => {
      try {
        const videoIdToFetch = videoId || (await fetchDefaultVideoId());
        await fetchVideoById(videoIdToFetch);
      } catch (error) {
        console.error("Could not fetch video", error);
      }
    };
    fetchActiveVideo();
  }, [videoId]);

  useEffect(() => {
    if (activeVideo) {
      fetchComments(activeVideo.id);
    }
  }, [activeVideo]);

  const handleCommentUpdate = async (newComment, action) => {
    try {
      if (action === "post") {
        await axios.post(
          `${apiBaseUrl}/videos/${activeVideo.id}/comments?api_key=${apiKey}`,
          newComment
        );
      }

      if (action === "delete") {
        await axios.delete(
          `${apiBaseUrl}/videos/${activeVideo.id}/comments?api_key=${apiKey}`,
          newComment
        );
      }
      fetchComments(activeVideo.id);
    } catch (error) {
      console.error("Could not post comment", error);
    }
  };

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
            <CommentSection
              comments={comments}
              handleCommentUpdate={handleCommentUpdate}
            />
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
