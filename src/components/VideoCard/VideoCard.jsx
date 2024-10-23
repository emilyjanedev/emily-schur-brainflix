import "./VideoCard.scss";
import PropTypes from "prop-types";

function VideoCard({ video }) {
  const { title, channel, image } = video;

  return (
    <article className="video-card">
      <img src={image} alt="video thumbnail" className="video-card__image" />
      <div className="video-card__info-wrapper">
        <h3 className="video-card__title">{title}</h3>
        <p className="video-card__channel">{channel}</p>
      </div>
    </article>
  );
}

VideoCard.propTypes = {
  video: PropTypes.object.isRequired,
};

export default VideoCard;
