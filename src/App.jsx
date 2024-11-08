import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import VideoDetailsPage from "./pages/VideoDetailsPage/VideoDetailsPage";
import UploadPage from "./pages/UploadPage/UploadPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import { getVideos } from "./utils/brainflix-api";
import { useEffect, useState, useCallback } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [videoList, setVideoList] = useState([]);
  const [pageCount, setPageCount] = useState(1);

  const loadVideoList = useCallback(async (page = 1) => {
    const videos = await getVideos(page);
    setVideoList(videos);
    setPageCount(page);
  }, []);

  useEffect(() => {
    loadVideoList();
  }, [loadVideoList]);

  const handleClickForward = async () => {
    if (videoList.length > 0) {
      setPageCount((prevCount) => prevCount + 1);
    }
  };

  const handleClickBack = async () => {
    if (pageCount > 1) {
      setPageCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <>
      <BrowserRouter>
        <NavBar loadVideoList={loadVideoList} />
        <Routes>
          <Route
            path="/"
            element={
              <VideoDetailsPage
                videoList={videoList}
                loadVideoList={loadVideoList}
                pageCount={pageCount}
                handleClickForward={handleClickForward}
                handleClickBack={handleClickBack}
              />
            }
          />
          <Route
            path="/videos/:videoId"
            element={
              <VideoDetailsPage
                videoList={videoList}
                loadVideoList={loadVideoList}
                pageCount={pageCount}
                handleClickForward={handleClickForward}
                handleClickBack={handleClickBack}
              />
            }
          />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/page-not-found" element={<NotFoundPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
