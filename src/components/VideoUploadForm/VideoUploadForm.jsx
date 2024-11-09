import "./VideoUploadForm.scss";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import BrainflixApi from "../../utils/brainflix-api";
import videoThumbnail from "../../assets/images/Upload-video-preview.jpg";
import UploadSuccessPopup from "../UploadSuccessPopup/UploadSuccessPopup";

function VideoUploadForm() {
  const [newVideo, setNewVideo] = useState({
    title: "",
    description: "",
    file: null,
  });
  const [errorMessages, setErrorMessages] = useState({});
  const [popupVisibility, setPopupVisibility] = useState(false);
  const [newVideoId, setNewVideoId] = useState("");
  const brainflixApi = useMemo(() => new BrainflixApi(), []);

  const handleFieldChange = (event) => {
    const { name, value, files } = event.target;
    if (name === "file") {
      setNewVideo((prevData) => ({
        ...prevData,
        [name]: files[0],
      }));
    } else {
      setNewVideo((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const validateField = (name, value) => {
    switch (name) {
      case "title":
        return value.length > 0 && value.length <= 100;
      case "description":
        return value.length > 0 && value.length <= 5000;
      default:
        return true;
    }
  };

  const isFormValid = () => {
    let errors = {};
    const { title, description } = newVideo;

    if (!validateField("title", title)) {
      errors.title = "Title is required. 100 character limit.";
    }

    if (!validateField("description", description)) {
      errors.description = "Description is required. 5000 character limit.";
    }

    setErrorMessages(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isFormValid()) {
      const formData = new FormData();
      formData.append("fileData", newVideo.file);
      formData.append("title", newVideo.title);
      formData.append("description", newVideo.description);

      const { id } = await brainflixApi.postVideo(formData);
      setNewVideoId(id);

      setNewVideo({
        title: "",
        description: "",
        file: null,
      });
      setErrorMessages({});
      setPopupVisibility(true);
    }
  };

  const imagePreview = newVideo.file
    ? URL.createObjectURL(newVideo.file)
    : videoThumbnail;

  return (
    <>
      <form className="video-upload-form" onSubmit={handleSubmit}>
        <div className="video-upload-form__image-input-wrapper">
          <label htmlFor="file" className="video-upload-form__label">
            VIDEO THUMBNAIL
          </label>
          <div className="video-upload-form__image-wrapper">
            <img
              src={imagePreview}
              alt="video thumbnail"
              className="video-upload-form__thumbnail"
            />
          </div>
          <input
            type="file"
            name="file"
            id="file"
            className="video-upload-form__upload-input"
            onChange={handleFieldChange}
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
      {popupVisibility && <UploadSuccessPopup videoId={newVideoId} />}
    </>
  );
}

export default VideoUploadForm;
