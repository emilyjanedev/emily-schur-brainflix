import "./VideoUploadForm.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import videoThumbnail from "../../assets/images/Upload-video-preview.jpg";
import UploadSuccessPopup from "../UploadSuccessPopup/UploadSuccessPopup";

function VideoUploadForm() {
  const [newVideo, setNewVideo] = useState({
    videoTitle: "",
    videoDescription: "",
  });
  const [errorMessages, setErrorMessages] = useState({});
  const [popupVisibility, setPopupVisibility] = useState(false);

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setNewVideo((prevVideo) => ({ ...prevVideo, [name]: value }));
  };

  const isVideoTitleValid = () => {
    return newVideo.videoTitle.length > 1 && newVideo.videoTitle.length < 101;
  };

  const isVideoDescriptionValid = () => {
    return (
      newVideo.videoDescription.length > 1 &&
      newVideo.videoDescription.length < 101
    );
  };

  const isFormValid = () => {
    let errors = {};
    if (!newVideo.videoTitle || !newVideo.videoDescription) {
      return false;
    }

    if (!isVideoTitleValid()) {
      errors.videoTitle = "Title must be between 2-100 characters.";
    }

    if (!isVideoDescriptionValid()) {
      errors.videoDescription =
        "Description must be between 2-5000 characters.";
    }

    setErrorMessages(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isFormValid()) {
      setNewVideo({ videoTitle: "", videoDescription: "" });
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
          <label htmlFor="videoTitle" className="video-upload-form__label">
            TITLE YOUR VIDEO
          </label>
          <div className="video-upload-form__error-wrapper">
            <input
              type="text"
              name="videoTitle"
              id="videoTitle"
              className={`video-upload-form__input ${
                errorMessages.videoTitle
                  ? "video-upload-form__input--error"
                  : ""
              }`}
              placeholder="Add a title to your video"
              value={newVideo.videoTitle}
              onChange={handleFieldChange}
            />
            {errorMessages.videoTitle ? (
              <p className="video-upload-form__error-message">
                {errorMessages.videoTitle}
              </p>
            ) : (
              <></>
            )}
          </div>
          <div className="video-upload-form__error-wrapper">
            <label
              htmlFor="videoDescription"
              className="video-upload-form__label"
            >
              ADD A VIDEO DESCRIPTION
            </label>
            <textarea
              name="videoDescription"
              id="videoDescription"
              className={`video-upload-form__input video-upload-form__input--big ${
                errorMessages.videoDescription
                  ? "video-upload-form__input--error"
                  : ""
              }`}
              placeholder="Add a description to your video"
              value={newVideo.videoDescription}
              onChange={handleFieldChange}
            ></textarea>
            {errorMessages.videoDescription ? (
              <p className="video-upload-form__error-message">
                {errorMessages.videoDescription}
              </p>
            ) : (
              <></>
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
      {popupVisibility ? <UploadSuccessPopup /> : <></>}
    </>
  );
}

export default VideoUploadForm;
