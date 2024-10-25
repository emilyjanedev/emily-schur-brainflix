import "./App.scss";
import Header from "./components/Header/Header";
import videoData from "./data/video-details.json";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VideoDetailsPage from "./pages/VideoDetailsPage/VideoDetailsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  const [videos, setVideos] = useState(videoData); //setVideos for future video adding

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<VideoDetailsPage videos={videos} />} />
          <Route
            path="videos/:videoId"
            element={<VideoDetailsPage videos={videos} />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
