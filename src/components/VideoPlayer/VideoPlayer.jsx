import "./VideoPlayer.scss";
import PropTypes from "prop-types";

function VideoPlayer({ activeVideo }) {
  const { video: src, image } = activeVideo;

  return (
    <video
      controls
      key={src}
      src={{ src }}
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
