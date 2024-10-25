import "./VideoDetailsPage.scss";
import CommentSection from "../../components/CommentSection/CommentSection";
import CurrentVideo from "../../components/CurrentVideo/CurrentVideo";
import CurrentVideoDetails from "../../components/CurrentVideoDetails/CurrentVideoDetails";
import VideoBank from "../../components/VideoBank/VideoBank";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

function VideoDetailsPage({ videos }) {
  const { videoId } = useParams();
  const activeVideoId = videoId ? videoId : videos[0].id;
  const activeVideo = videos.find((video) => video.id === activeVideoId);
  console.log(activeVideo);

  return (
    <>
      <CurrentVideo activeVideo={activeVideo} />
      <div className="layout-container">
        <CurrentVideoDetails activeVideo={activeVideo} />
        <CommentSection activeVideo={activeVideo} />
        <VideoBank videos={videos} activeVideoId={activeVideoId} />
      </div>
    </>
  );
}

VideoDetailsPage.propTypes = {
  videos: PropTypes.array.isRequired,
};
export default VideoDetailsPage;
