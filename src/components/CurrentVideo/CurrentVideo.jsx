import "./CurrentVideo.scss";
import PropTypes from "prop-types";

function CurrentVideo({ video }) {
  const { video: src, image, id } = video;

  return (
    <video controls src={src} poster={image} className="video" id={id}>
      <p>Your browser does not support HTML video.</p>
    </video>
  );
}
CurrentVideo.propTypes = {
  video: PropTypes.object.isRequired,
};

export default CurrentVideo;
