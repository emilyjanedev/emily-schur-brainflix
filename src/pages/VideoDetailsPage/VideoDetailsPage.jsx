import CommentSection from "../../components/CommentSection/CommentSection";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import VideoBank from "../../components/VideoBank/VideoBank";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import { Navigate, useParams } from "react-router-dom";
import {
  getVideoId,
  getVideoById,
  getComments,
  postComment,
  deleteComment,
  likeVideo,
  getLikeCount,
} from "../../utils/brainflix-api";

function VideoDetailsPage({
  videoList,
  loadVideoList,
  pageCount,
  handleClickForward,
  handleClickBack,
}) {
  const { videoId } = useParams();
  const [activeVideo, setActiveVideo] = useState(null);
  const [comments, setComments] = useState([]);
  const [likeCount, setLikeCount] = useState("");
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const loadActiveVideo = async () => {
      try {
        const videoIdToFetch = videoId || (await getVideoId(0));
        setActiveVideo(await getVideoById(videoIdToFetch));
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
        setComments(await getComments(activeVideo.id));
      }
    };
    loadComments();
  }, [activeVideo]);

  useEffect(() => {
    const loadLikeCount = async () => {
      if (activeVideo) {
        setLikeCount(await getLikeCount(activeVideo.id));
      }
    };
    loadLikeCount();
  }, [activeVideo]);

  const handleCommentUpdate = useCallback(
    async (commentRequest) => {
      if (commentRequest.action === "post") {
        await postComment(activeVideo.id, commentRequest.newComment);
      }

      if (commentRequest.action === "delete") {
        await deleteComment(activeVideo.id, commentRequest.commentId);
      }

      setComments(await getComments(activeVideo.id));
    },
    [activeVideo]
  );

  const handleVideoLike = useCallback(async () => {
    await likeVideo(activeVideo.id);
    setLikeCount(await getLikeCount(activeVideo.id));
  }, [activeVideo]);

  if (notFound) {
    return <Navigate to="/page-not-found" />;
  }

  return (
    <main>
      {activeVideo ? (
        <>
          <VideoPlayer activeVideo={activeVideo} />
          <div className="layout-container">
            <VideoDetails
              activeVideo={activeVideo}
              likeCount={likeCount}
              commentCount={comments.length}
              handleVideoLike={handleVideoLike}
            />
            <CommentSection
              comments={comments}
              activeVideoId={activeVideo.id}
              handleCommentUpdate={handleCommentUpdate}
            />
            <VideoBank
              videoList={videoList}
              activeVideoId={activeVideo.id}
              loadVideoList={loadVideoList}
              pageCount={pageCount}
              handleClickForward={handleClickForward}
              handleClickBack={handleClickBack}
            />
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
  pageCount: PropTypes.number.isRequired,
  handleClickForward: PropTypes.func.isRequired,
  handleClickBack: PropTypes.func.isRequired,
};
