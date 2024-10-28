import "./App.scss";
import NavBar from "./components/NavBar/NavBar";

import videoData from "./data/video-details.json";
import { useState } from "react";
import VideoDetailsPage from "./pages/VideoDetailsPage/VideoDetailsPage";

function App() {
  return (
    <>
      <NavBar />
      <VideoDetailsPage />
    </>
  );
}

export default App;
