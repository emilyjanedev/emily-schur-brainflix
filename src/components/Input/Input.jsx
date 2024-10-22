import "./Input.scss";
import PropTypes from "prop-types";

function Input({ type, name, id, placeholder, nameOfClass }) {
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      className={`input ${nameOfClass}`}
    />
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  nameOfClass: PropTypes.string.isRequired,
};

export default Input;
