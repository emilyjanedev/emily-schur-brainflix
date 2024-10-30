import "./UploadSuccessPopup.scss";
import { Link } from "react-router-dom";

function UploadSuccessPopup() {
  return (
    <article className="upload-success-popup">
      <h2 className="upload-success-popup__title">
        Video Succesfully Uploaded!
      </h2>
      <Link to="/" className="upload-success-popup__link">
        OK
      </Link>
    </article>
  );
}

export default UploadSuccessPopup;
