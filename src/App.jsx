import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import VideoDetailsPage from "./pages/VideoDetailsPage/VideoDetailsPage";
import UploadPage from "./pages/UploadPage/UploadPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useMemo, useEffect, useState } from "react";
import BrainflixApi from "./utils/brainflix-api";

function App() {
  const [videoList, setVideoList] = useState([]);
  const brainflixApi = useMemo(() => new BrainflixApi(), []);

  useEffect(() => {
    const loadVideoList = async () => {
      try {
        const fetchedVideoList = await brainflixApi.getVideos();
        setVideoList(fetchedVideoList);
      } catch (error) {
        console.error("Video does not exist", error);
      }
    };
    loadVideoList();
  }, [brainflixApi]);

  return (
    <BrowserRouter>
      <NavBar videoList={videoList} />
      {videoList.length > 0 ? (
        <Routes>
          <Route
            path="/"
            element={<VideoDetailsPage videoList={videoList} />}
          />
          <Route
            path="/videos/:videoId"
            element={<VideoDetailsPage videoList={videoList} />}
          />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/page-not-found" element={<NotFoundPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      ) : (
        <LoadingScreen />
      )}
    </BrowserRouter>
  );
}

export default App;
