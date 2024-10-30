import "./VideoUploadForm.scss";
import React from "react";
import { Link } from "react-router-dom";
import videoThumbnail from "../../assets/images/Upload-video-preview.jpg";

function VideoUploadForm() {
  return (
    <form className="video-upload-form">
      <label htmlFor="thumbnail" className="video-upload-form__label">
        VIDEO THUMBNAIL
      </label>
      <img
        src={videoThumbnail}
        alt=""
        className="video-upload-form__thumbnail"
      />
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
      <button className="video-upload-form__button">PUBLISH</button>
      <Link to="/" className="video-upload-form__cancel">
        CANCEL
      </Link>
    </form>
  );
}

export default VideoUploadForm;
