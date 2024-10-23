import "./Video.scss";
import PropTypes from "prop-types";

function Video({ video }) {
  const { video: src, image } = video;

  return (
    <video controls src={src} poster={image} className="video">
      <p>Your browser does not support HTML video.</p>
    </video>
  );
}
Video.propTypes = {
  video: PropTypes.object.isRequired,
};

export default Video;
