import "./VideoDetails.scss";
import PropTypes from "prop-types";
import { format } from "date-fns";
import viewsIcon from "../../assets/images/icons/views.svg";
import likesIcon from "../../assets/images/icons/likes.svg";

function VideoDetails({ activeVideo }) {
  const { title, channel, description, views, likes, timestamp, comments } =
    activeVideo;

  return (
    <article className="video-details">
      <h1 className="video-details__title">{title}</h1>
      <div className="video-details__information">
        <div className="video-details__content-wrapper">
          <h2 className="video-details__channel">By {channel}</h2>
          <p className="video-details__timestamp">
            {format(timestamp, "M/dd/yyyy")}
          </p>
        </div>
        <div className="video-details__stats-wrapper">
          <div className="video-details__views-wrapper">
            <img
              src={viewsIcon}
              alt="eye icon for views"
              className="video-details__icon"
            />
            <p className="video-details__views">{views}</p>
          </div>
          <div className="video-details__likes-wrapper">
            <img
              src={likesIcon}
              alt="heart icon for likes"
              className="video-details__icon"
            />
            <p className="video-details__likes">{likes}</p>
          </div>
        </div>
      </div>
      <p className="video-details__description">{description}</p>
      <p className="video-details__comment-count">{comments.length} Comments</p>
    </article>
  );
}
VideoDetails.propTypes = {
  activeVideo: PropTypes.object.isRequired,
};

export default VideoDetails;
