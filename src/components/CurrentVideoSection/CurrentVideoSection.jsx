import "./CurrentVideoSection.scss";
import CurrentVideo from "../CurrentVideo/CurrentVideo";
import CurrentVideoDetails from "../CurrentVideoDetails/CurrentVideoDetails";
import videos from "../../data/video-details.json";

function CurrentVideoSection() {
  return (
    <>
      <CurrentVideo video={videos[0]} />
      <CurrentVideoDetails video={videos[0]} />
    </>
  );
}

export default CurrentVideoSection;
