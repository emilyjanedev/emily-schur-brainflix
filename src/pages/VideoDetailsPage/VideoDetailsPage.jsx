import CommentSection from "../../components/CommentSection/CommentSection";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import VideoBank from "../../components/VideoBank/VideoBank";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import { useEffect, useState, useMemo } from "react";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import BrainflixApi from "../../utils/brainflix-api";
import { useParams } from "react-router-dom";

function VideoDetailsPage({ videoList, loadVideoList }) {
  const { videoId } = useParams();
  const [activeVideo, setActiveVideo] = useState(null);
  const [comments, setComments] = useState([]);
  const [notFound, setNotFound] = useState(false);

  const brainflixApi = useMemo(() => new BrainflixApi(), []);

  useEffect(() => {
    loadVideoList();
  }, [loadVideoList]);

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
  }, [videoId, brainflixApi]);

  useEffect(() => {
    const loadComments = async () => {
      if (activeVideo) {
        setComments(await brainflixApi.getComments(activeVideo.id));
      }
    };
    loadComments();
  }, [activeVideo, brainflixApi]);

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

VideoDetailsPage.propTypes = {
  videoList: PropTypes.array.isRequired,
  loadVideoList: PropTypes.func.isRequired,
};
