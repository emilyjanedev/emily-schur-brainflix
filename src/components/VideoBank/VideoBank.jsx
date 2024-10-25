import "./VideoBank.scss";
import Video from "../Video/Video";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function VideoBank({ videos, activeVideoId }) {
  const filteredList = videos.filter((video) => video.id !== activeVideoId);

  return (
    <section className="video-bank">
      <h2 className="video-bank__title">NEXT VIDEOS</h2>
      <div className="video-bank__list">
        {filteredList.map((video) => (
          <Link to={`/videos/${video.id}`} key={video.id}>
            <Video video={video} />
          </Link>
        ))}
      </div>
    </section>
  );
}

VideoBank.propTypes = {
  videos: PropTypes.array.isRequired,
  activeVideoId: PropTypes.string.isRequired,
};

export default VideoBank;
