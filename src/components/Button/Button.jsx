import "./Button.scss";
import PropTypes from "prop-types";

function Button({ nameOfClass, icon, cta }) {
  return (
    <button className={`button ${nameOfClass}`}>
      <img src={icon} className="button__icon"></img>
      <span className="button__text">{cta}</span>
    </button>
  );
}
Button.propTypes = {
  nameOfClass: PropTypes.string.isRequired,
  icon: PropTypes.string,
  cta: PropTypes.string.isRequired,
};

export default Button;
