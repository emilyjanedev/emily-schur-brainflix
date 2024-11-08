import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import VideoDetailsPage from "./pages/VideoDetailsPage/VideoDetailsPage";
import UploadPage from "./pages/UploadPage/UploadPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import BrainflixApi from "./utils/brainflix-api";
import { useEffect, useMemo, useState, useCallback } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [videoList, setVideoList] = useState([]);

  const brainflixApi = useMemo(() => new BrainflixApi(), []);

  const loadVideoList = useCallback(
    async (page = 1) => {
      const videos = await brainflixApi.getVideos(page);
      setVideoList(videos);
    },
    [brainflixApi]
  );

  const handleVideoUpload = useCallback(
    async (newVideo) => {
      await brainflixApi.postVideo(newVideo);
      loadVideoList();
    },
    [brainflixApi, loadVideoList]
  );

  useEffect(() => {
    loadVideoList();
  }, [loadVideoList]);

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <VideoDetailsPage
                videoList={videoList}
                loadVideoList={loadVideoList}
              />
            }
          />
          <Route
            path="/videos/:videoId"
            element={
              <VideoDetailsPage
                videoList={videoList}
                loadVideoList={loadVideoList}
              />
            }
          />
          <Route
            path="/upload"
            element={<UploadPage handleVideoUpload={handleVideoUpload} />}
          />
          <Route path="/page-not-found" element={<NotFoundPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
