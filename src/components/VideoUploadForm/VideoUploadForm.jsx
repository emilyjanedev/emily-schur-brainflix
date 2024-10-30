import "./VideoUploadForm.scss";
import React from "react";
import { Link } from "react-router-dom";
import videoThumbnail from "../../assets/images/Upload-video-preview.jpg";

function VideoUploadForm() {
  return (
    <form className="video-upload-form">
      <div className="video-upload-form__image-wrapper">
        <p className="video-upload-form__label">VIDEO THUMBNAIL</p>
        <img
          src={videoThumbnail}
          alt="sprinter at the starting line in blocks with a batton in hand"
          className="video-upload-form__thumbnail"
        />
      </div>
      <div className="video-upload-form__input-wrapper">
        <label htmlFor="videoTitle" className="video-upload-form__label">
          TITLE YOUR VIDEO
        </label>
        <input
          type="text"
          name="videoTitle"
          id="videoTitle"
          className="video-upload-form__input"
          placeholder="Add a title to your video"
        />
        <label htmlFor="videoDescription" className="video-upload-form__label">
          ADD A VIDEO DESCRIPTION
        </label>
        <textarea
          name="videoDescription"
          id="videoDescription"
          className="video-upload-form__input video-upload-form__input--big"
          placeholder="Add a description to your video"
        ></textarea>
      </div>
      <div className="video-upload-form__button-wrapper">
        <button className="video-upload-form__button">PUBLISH</button>
        <Link to="/" className="video-upload-form__cancel">
          CANCEL
        </Link>
      </div>
    </form>
  );
}

export default VideoUploadForm;
