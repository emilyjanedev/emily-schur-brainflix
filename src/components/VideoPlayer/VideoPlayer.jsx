import "./VideoPlayer.scss";
import PropTypes from "prop-types";
import { apiKey } from "../../utils/api";

function VideoPlayer({ activeVideo }) {
  const { video: src, image } = activeVideo;

  return (
    <video
      controls
      key={src}
      src={`${src}?api_key=${apiKey}`}
      poster={image}
      className="current-video"
    >
      <p>Your browser does not support HTML video.</p>
    </video>
  );
}

VideoPlayer.propTypes = {
  activeVideo: PropTypes.object.isRequired,
};

export default VideoPlayer;
