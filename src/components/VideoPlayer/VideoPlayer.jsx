import "./VideoPlayer.scss";
import PropTypes from "prop-types";

function VideoPlayer({ activeVideo }) {
  const { video: src, image, id } = activeVideo;

  return (
    <video controls src={src} poster={image} className="current-video" id={id}>
      <p>Your browser does not support HTML video.</p>
    </video>
  );
}
VideoPlayer.propTypes = {
  activeVideo: PropTypes.object.isRequired,
};

export default VideoPlayer;
