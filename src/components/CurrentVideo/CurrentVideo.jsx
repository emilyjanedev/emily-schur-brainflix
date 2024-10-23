import "./CurrentVideo.scss";
import PropTypes from "prop-types";

function CurrentVideo({ activeVideo }) {
  console.log(activeVideo);
  const { video: src, image, id } = activeVideo;

  return (
    <video controls src={src} poster={image} className="video" id={id}>
      <p>Your browser does not support HTML video.</p>
    </video>
  );
}
CurrentVideo.propTypes = {
  activeVideo: PropTypes.object.isRequired,
};

export default CurrentVideo;
