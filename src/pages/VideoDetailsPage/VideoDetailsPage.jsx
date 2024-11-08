import CommentSection from "../../components/CommentSection/CommentSection";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import VideoBank from "../../components/VideoBank/VideoBank";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import PropTypes from "prop-types";
import { useEffect, useState, useCallback } from "react";
import { Navigate, useParams } from "react-router-dom";
import { getVideoId, getVideoById } from "../../utils/brainflix-api";

function VideoDetailsPage({
  videoList,
  loadVideoList,
  pageCount,
  setPageCount,
}) {
  const { videoId } = useParams();
  const [activeVideo, setActiveVideo] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [commentCount, setCommentCount] = useState(0);

  useEffect(() => {
    const loadActiveVideo = async () => {
      try {
        const videoIdToFetch = videoId || (await getVideoId(0));
        const fetchedVideo = await getVideoById(videoIdToFetch);
        setActiveVideo(fetchedVideo);
        setCommentCount(fetchedVideo.comments.length);
      } catch (error) {
        console.error("Video does not exist", error);
        setNotFound(true);
      }
    };
    loadActiveVideo();
  }, [videoId]);

  const commentCountUpdate = useCallback((count) => {
    setCommentCount(count);
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
            <VideoDetails
              activeVideo={activeVideo}
              commentCount={commentCount}
            />
            <CommentSection
              activeVideoId={activeVideo.id}
              commentCountUpdate={commentCountUpdate}
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
