import "./VideoBank.scss";
import Video from "../Video/Video";
import PropTypes from "prop-types";

function VideoBank({ videos, activeVideo }) {
  const filteredList = videos.filter((video) => video.id !== activeVideo.id);

  return (
    <section className="video-bank">
      <h2 className="video-bank__title">NEXT VIDEOS</h2>
      <div className="video-bank__list">
        {filteredList.map((video) => (
          <Video key={video.id} video={video} />
        ))}
      </div>
    </section>
  );
}

VideoBank.propTypes = {
  videos: PropTypes.array.isRequired,
  activeVideo: PropTypes.object.isRequired,
};

export default VideoBank;
