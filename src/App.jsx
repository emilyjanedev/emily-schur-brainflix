import "./App.scss";
import Header from "./components/Header/Header";
import CommentSection from "./components/CommentSection/CommentSection";
import VideoSection from "./components/VideoSection/VideoSection";
import VideoBank from "./components/VideoBank/VideoBank";

function App() {
  return (
    <>
      <Header />
      <VideoSection />
      <CommentSection />
      <VideoBank />
    </>
  );
}

export default App;
