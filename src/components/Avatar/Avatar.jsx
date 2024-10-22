import "./Avatar.scss";
import PropTypes from "prop-types";

function Avatar({ src, nameOfClass }) {
  return (
    <img src={src} alt="user avatar" className={`avatar ${nameOfClass}`} />
  );
}
Avatar.propTypes = {
  src: PropTypes.string,
  nameOfClass: PropTypes.string.isRequired,
};
export default Avatar;
