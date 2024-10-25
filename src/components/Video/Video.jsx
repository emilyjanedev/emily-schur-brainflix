import "./Video.scss";
import PropTypes from "prop-types";

function Video({ video, changeActiveVideo }) {
  const { title, channel, image } = video;

  const clickHandler = () => {
    changeActiveVideo(video);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <li className="video-bank__list-item">
      <article className="video" onClick={clickHandler}>
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
  changeActiveVideo: PropTypes.func.isRequired,
};

export default Video;
