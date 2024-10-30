import "./VideoUploadForm.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import videoThumbnail from "../../assets/images/Upload-video-preview.jpg";
import UploadSuccessPopup from "../UploadSuccessPopup/UploadSuccessPopup";

function VideoUploadForm() {
  const [videoTitle, setVideoTitle] = useState("");
  const [videoDescription, setVideoDescription] = useState("");
  const [titleErrorPresent, setTitleErrorPresent] = useState(false);
  const [descriptionErrorPresent, setDescriptionErrorPresent] = useState(false);
  const [popupVisibility, setPopupVisibility] = useState(false);
  const handleVideoTitleChange = (event) => {
    setVideoTitle(event.target.value);
  };

  const handleVideoDescriptionChange = (event) => {
    setVideoDescription(event.target.value);
  };

  const isVideoTitleValid = () => {
    return videoTitle.length > 2 && videoTitle.length < 101;
  };

  const isVideoDescriptionValid = () => {
    return videoDescription.length > 2 && videoDescription.length < 101;
  };

  const isFormValid = () => {
    if (!videoTitle || !videoDescription) {
      return false;
    }

    if (!isVideoTitleValid()) {
      return false;
    }

    if (!isVideoDescriptionValid()) {
      return false;
    }

    return true;
  };

  const resetErrors = () => {
    setTitleErrorPresent(false);
    setDescriptionErrorPresent(false);
  };

  const applyErrors = () => {
    if (!isVideoTitleValid()) {
      setTitleErrorPresent(true);
    }

    if (!isVideoDescriptionValid()) {
      setDescriptionErrorPresent(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isFormValid()) {
      setVideoTitle("");
      setVideoDescription("");
      resetErrors();
      setPopupVisibility(true);
    } else {
      resetErrors();
      applyErrors();
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
                titleErrorPresent ? "video-upload-form__input--error" : ""
              }`}
              placeholder="Add a title to your video"
              value={videoTitle}
              onChange={handleVideoTitleChange}
            />
            {titleErrorPresent ? (
              <p className="video-upload-form__error-message">
                Title must be between 1-100 characters.
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
                descriptionErrorPresent ? "video-upload-form__input--error" : ""
              }`}
              placeholder="Add a description to your video"
              value={videoDescription}
              onChange={handleVideoDescriptionChange}
            ></textarea>
            {descriptionErrorPresent ? (
              <p className="video-upload-form__error-message">
                Description must be between 1-5000 characters.
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
