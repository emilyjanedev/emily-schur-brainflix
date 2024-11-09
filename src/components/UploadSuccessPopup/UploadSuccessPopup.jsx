import "./UploadSuccessPopup.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function UploadSuccessPopup({ videoId }) {
  return (
    <>
      <article className="upload-success-popup">
        <h2 className="upload-success-popup__title">
          Video Succesfully Uploaded!
        </h2>
        <Link to="/" className="upload-success-popup__link">
          RETURN HOME
        </Link>
        <Link to={`/videos/${videoId}`} className="upload-success-popup__link">
          GO TO VIDEO
        </Link>
      </article>
      <div className="upload-success-popup__screen"></div>
    </>
  );
}

export default UploadSuccessPopup;

UploadSuccessPopup.propTypes = {
  videoId: PropTypes.string.isRequired,
};
