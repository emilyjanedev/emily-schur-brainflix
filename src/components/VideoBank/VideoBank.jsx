import "./VideoBank.scss";
import Video from "../Video/Video";
import PropTypes from "prop-types";

function VideoBank({ videoList, activeVideoId }) {
  const filteredList = videoList.filter((video) => video.id !== activeVideoId);

  return (
    <section className="video-bank">
      <h2 className="video-bank__title">NEXT VIDEOS</h2>
      <ul className="video-list">
        {filteredList.map((video) => (
          <Video key={video.id} video={video} />
        ))}
      </ul>
    </section>
  );
}

VideoBank.propTypes = {
  activeVideoId: PropTypes.string.isRequired,
  videoList: PropTypes.array.isRequired,
};

export default VideoBank;
