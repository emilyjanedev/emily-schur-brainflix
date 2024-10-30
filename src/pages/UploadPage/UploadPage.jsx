import "./UploadPage.scss";

import VideoUploadForm from "../../components/VideoUploadForm/VideoUploadForm";

function UploadPage() {
  return (
    <section className="video-upload-page">
      <h1 className="video-upload-page__title">Upload Video</h1>
      <VideoUploadForm />
    </section>
  );
}

export default UploadPage;
