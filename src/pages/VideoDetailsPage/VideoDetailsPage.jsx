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
} from "../../utils/brainflix-api";

function VideoDetailsPage({
  videoList,
  loadVideoList,
  pageCount,
  setPageCount,
}) {
  const { videoId } = useParams();
  const [activeVideo, setActiveVideo] = useState(null);
  const [comments, setComments] = useState([]);
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
              commentCount={comments.length}
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
              setPageCount={setPageCount}
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
  setPageCount: PropTypes.func.isRequired,
};
