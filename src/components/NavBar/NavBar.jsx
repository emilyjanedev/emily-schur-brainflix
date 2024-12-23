import "./NavBar.scss";
import brainflixLogo from "../../assets/images/logo/BrainFlix-logo.svg";
import userAvatar from "../../assets/images/Mohan-muruge.jpg";
import SearchForm from "../SearchForm/SearchForm";
import Avatar from "../Avatar/Avatar";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function NavBar({ videoList }) {
  return (
    <nav className="nav-bar">
      <Link to="/" className="nav-bar__logo">
        <img src={brainflixLogo} alt="brainflix logo" />
      </Link>
      <div className="nav-bar__content">
        <SearchForm videoList={videoList} />
        <Avatar src={userAvatar} nameOfClass="nav-bar__avatar" />
        <Link to="/upload" className="nav-bar__upload">
          <p>UPLOAD</p>
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;

NavBar.propTypes = {
  videoList: PropTypes.array.isRequired,
};
