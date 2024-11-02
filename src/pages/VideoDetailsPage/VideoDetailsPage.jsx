import CommentSection from "../../components/CommentSection/CommentSection";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import VideoBank from "../../components/VideoBank/VideoBank";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import { useEffect, useState, useMemo } from "react";
import { Navigate } from "react-router-dom";
import BrainflixApi, { apiKey } from "../../utils/brainflix-api";
import { useParams } from "react-router-dom";

function VideoDetailsPage() {
  const { videoId } = useParams();
  const [videoList, setVideoList] = useState([]);
  const [activeVideo, setActiveVideo] = useState(null);
  const [comments, setComments] = useState([]);
  const [notFound, setNotFound] = useState(false);

  const brainflixApi = useMemo(() => new BrainflixApi(apiKey), [apiKey]);

  useEffect(() => {
    const loadVideoList = async () => {
      const videos = await brainflixApi.getVideos();
      setVideoList(videos);
    };
    loadVideoList();
  }, []);

  useEffect(() => {
    const loadActiveVideo = async () => {
      try {
        const videoIdToFetch = videoId || (await brainflixApi.getVideoId(0));
        setActiveVideo(await brainflixApi.getVideoById(videoIdToFetch));
      } catch (error) {
        console.error("Video does not exist", error);
        setNotFound(true);
      }
    };
    loadActiveVideo();
  }, [videoId]);

  useEffect(() => {
    const loadComments = async () => {
      if (activeVideo) {
        setComments(await brainflixApi.getComments(activeVideo.id));
      }
    };
    loadComments();
  }, [activeVideo]);

  const handleCommentUpdate = async (commentRequest) => {
    if (commentRequest.action === "post") {
      await brainflixApi.postComment(activeVideo.id, commentRequest.newComment);
    }

    if (commentRequest.action === "delete") {
      await brainflixApi.deleteComment(
        activeVideo.id,
        commentRequest.commentId
      );
    }
    setComments(await brainflixApi.getComments(activeVideo.id));
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
