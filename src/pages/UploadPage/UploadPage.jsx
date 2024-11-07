import "./UploadPage.scss";
import PropTypes from "prop-types";
import VideoUploadForm from "../../components/VideoUploadForm/VideoUploadForm";

function UploadPage({ handleVideoUpload }) {
  return (
    <section className="video-upload-page">
      <h1 className="video-upload-page__title">Upload Video</h1>
      <VideoUploadForm handleVideoUpload={handleVideoUpload} />
    </section>
  );
}

export default UploadPage;

UploadPage.propTypes = {
  handleVideoUpload: PropTypes.func.isRequired,
};
