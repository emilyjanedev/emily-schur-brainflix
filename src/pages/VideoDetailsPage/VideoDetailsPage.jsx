import CommentSection from "../../components/CommentSection/CommentSection";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import VideoBank from "../../components/VideoBank/VideoBank";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import { useEffect, useState, useCallback, useMemo } from "react";
import { Navigate, useParams } from "react-router-dom";
import BrainflixApi from "../../utils/brainflix-api";

function VideoDetailsPage() {
  const { videoId } = useParams();
  const [activeVideo, setActiveVideo] = useState({});
  const [notFound, setNotFound] = useState(false);
  const [comments, setComments] = useState([]);
  const [videoList, setVideoList] = useState([]);
  const [videoLikeCount, setVideoLikeCount] = useState(null);
  const brainflixApi = useMemo(() => new BrainflixApi(), []);

  useEffect(() => {
    const loadVideoStates = async () => {
      try {
        const fetchedVideoList = await brainflixApi.getVideos();
        console.log(fetchedVideoList);
        const videoIdToFetch = videoId || fetchedVideoList[0].id;
        const fetchedVideo = await brainflixApi.getVideoById(videoIdToFetch);

        setActiveVideo(fetchedVideo);
        setVideoList(fetchedVideoList);
        setComments(fetchedVideo.comments);
        setVideoLikeCount(fetchedVideo.likes);
      } catch (error) {
        console.error("Video does not exist", error);
        setNotFound(true);
      }
    };
    loadVideoStates();
  }, [videoId, brainflixApi]);

  const handleVideoLike = useCallback(async () => {
    const likedVideo = await brainflixApi.likeVideo(activeVideo.id);
    setVideoLikeCount(likedVideo.likes);
  }, [activeVideo.id, brainflixApi]);

  const handleCommentUpdate = useCallback(
    async (commentRequest) => {
      if (commentRequest.action === "post") {
        await brainflixApi.postComment(
          activeVideo.id,
          commentRequest.newComment
        );
      } else if (commentRequest.action === "delete") {
        await brainflixApi.deleteComment(
          activeVideo.id,
          commentRequest.commentId
        );
      } else if (commentRequest.action === "like") {
        await brainflixApi.likeComment(
          activeVideo.id,
          commentRequest.commentId
        );
      }

      const updatedComments = await brainflixApi.getComments(activeVideo.id);
      setComments(updatedComments);
    },
    [activeVideo.id, brainflixApi]
  );

  if (notFound) {
    return <Navigate to="/page-not-found" />;
  }

  return (
    <main>
      {activeVideo && activeVideo.id ? (
        <>
          <VideoPlayer src={activeVideo.video} image={activeVideo.image} />
          <div className="layout-container">
            <VideoDetails
              title={activeVideo.title}
              channel={activeVideo.channel}
              description={activeVideo.description}
              views={activeVideo.views}
              timestamp={activeVideo.timestamp}
              commentCount={comments.length}
              videoLikeCount={videoLikeCount}
              handleVideoLike={handleVideoLike}
            />
            <CommentSection
              comments={comments}
              activeVideoId={activeVideo.id}
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
