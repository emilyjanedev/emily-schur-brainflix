import "./Avatar.scss";
import avatarPlaceholder from "../../assets/images/avatarPlaceholder.png";
import PropTypes from "prop-types";

function Avatar({ src = avatarPlaceholder, nameOfClass }) {
  return (
    <img src={src} alt="user avatar" className={`avatar ${nameOfClass}`} />
  );
}
Avatar.propTypes = {
  src: PropTypes.string,
  nameOfClass: PropTypes.string.isRequired,
};
export default Avatar;
