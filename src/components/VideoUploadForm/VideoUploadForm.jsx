import "./VideoUploadForm.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import videoThumbnail from "../../assets/images/Upload-video-preview.jpg";
import UploadSuccessPopup from "../UploadSuccessPopup/UploadSuccessPopup";

function VideoUploadForm({ handleVideoUpload }) {
  const [newVideo, setNewVideo] = useState({
    title: "",
    description: "",
  });
  const [errorMessages, setErrorMessages] = useState({});
  const [popupVisibility, setPopupVisibility] = useState(false);

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setNewVideo((prevVideo) => ({ ...prevVideo, [name]: value }));
  };

  const istitleValid = () => {
    return newVideo.title.length > 0 && newVideo.title.length <= 100;
  };

  const isdescriptionValid = () => {
    return (
      newVideo.description.length > 0 && newVideo.description.length <= 5000
    );
  };

  const isFormValid = () => {
    let errors = {};

    if (!istitleValid()) {
      errors.title = "Title is required. 100 character limit.";
    }

    if (!isdescriptionValid()) {
      errors.description = "Description is required. 5000 character limit.";
    }

    setErrorMessages(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isFormValid()) {
      console.log(newVideo);
      handleVideoUpload(newVideo);
      setNewVideo({ title: "", description: "" });
      setErrorMessages({});
      setPopupVisibility(true);
    }
  };

  return (
    <>
      <form className="video-upload-form" onSubmit={handleSubmit}>
        <div className="video-upload-form__image-wrapper">
          <p className="video-upload-form__label">VIDEO THUMBNAIL</p>
          <img
            src={videoThumbnail}
            alt="video thumbnail"
            className="video-upload-form__thumbnail"
          />
        </div>
        <div className="video-upload-form__input-wrapper">
          <label htmlFor="title" className="video-upload-form__label">
            TITLE YOUR VIDEO
          </label>
          <div className="video-upload-form__error-wrapper">
            <input
              type="text"
              name="title"
              id="title"
              className={`video-upload-form__input ${
                errorMessages.title && "video-upload-form__input--error"
              }`}
              placeholder="Add a title to your video"
              value={newVideo.title}
              onChange={handleFieldChange}
            />
            {errorMessages.title && (
              <p className="video-upload-form__error-message">
                {errorMessages.title}
              </p>
            )}
          </div>
          <div className="video-upload-form__error-wrapper">
            <label htmlFor="description" className="video-upload-form__label">
              ADD A VIDEO DESCRIPTION
            </label>
            <textarea
              name="description"
              id="description"
              className={`video-upload-form__input video-upload-form__input--big ${
                errorMessages.description && "video-upload-form__input--error"
              }`}
              placeholder="Add a description to your video"
              value={newVideo.description}
              onChange={handleFieldChange}
            ></textarea>
            {errorMessages.description && (
              <p className="video-upload-form__error-message">
                {errorMessages.description}
              </p>
            )}
          </div>
        </div>
        <div className="video-upload-form__button-wrapper">
          <button type="submit" className="video-upload-form__button">
            PUBLISH
          </button>
          <Link to="/" className="video-upload-form__cancel">
            CANCEL
          </Link>
        </div>
      </form>
      {popupVisibility && <UploadSuccessPopup />}
    </>
  );
}

export default VideoUploadForm;

VideoUploadForm.propTypes = {
  handleVideoUpload: PropTypes.func.isRequired,
};
