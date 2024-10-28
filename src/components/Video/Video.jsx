import { useNavigate } from "react-router-dom";
import "./Video.scss";
import PropTypes from "prop-types";

function Video({ video }) {
  const { title, channel, image } = video;
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(`/videos/${video.id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <li className="video-bank__list-item" onClick={clickHandler}>
      <article className="video">
        <img src={image} alt="video thumbnail" className="video__image" />
        <div className="video__info-wrapper">
          <h3 className="video__title">{title}</h3>
          <p className="video__channel">{channel}</p>
        </div>
      </article>
    </li>
  );
}

Video.propTypes = {
  video: PropTypes.object.isRequired,
};

export default Video;
