import "./VideoDetails.scss";
import PropTypes from "prop-types";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import viewsIcon from "../../assets/images/icons/views.svg";
import likesIcon from "../../assets/images/icons/likes.svg";
import likesIconLiked from "../../assets/images/icons/likes-liked.svg";

function VideoDetails({
  title,
  channel,
  description,
  views,
  timestamp,
  commentCount,
  videoLikeCount,
  handleVideoLike,
}) {
  const [likeStyle, setLikeStyle] = useState(false);

  useEffect(() => {
    setLikeStyle(false);
  }, [title]);

  const handleClick = () => {
    if (!likeStyle) {
      setLikeStyle(true);
    } else {
      setLikeStyle(false);
    }
  };

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
              src={likeStyle ? likesIconLiked : likesIcon}
              alt="heart icon for likes"
              className="video-details__icon video-details__icon--like"
              onClick={() => {
                handleVideoLike();
                handleClick();
              }}
            />
            <p className="video-details__likes">{videoLikeCount}</p>
          </div>
        </div>
      </div>
      <p className="video-details__description">{description}</p>
      <p className="video-details__comment-count">{commentCount} Comments</p>
    </article>
  );
}
VideoDetails.propTypes = {
  title: PropTypes.string.isRequired,
  channel: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  views: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  commentCount: PropTypes.number.isRequired,
  videoLikeCount: PropTypes.string.isRequired,
  handleVideoLike: PropTypes.func.isRequired,
};

export default VideoDetails;
