import "./App.scss";
import Header from "./components/Header/Header";
import CommentSection from "./components/CommentSection/CommentSection";
import CurrentVideoSection from "./components/CurrentVideoSection/CurrentVideoSection";
import VideoBank from "./components/VideoBank/VideoBank";

function App() {
  return (
    <>
      <Header />
      <CurrentVideoSection />
      <CommentSection />
      <VideoBank />
    </>
  );
}

export default App;
