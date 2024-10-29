import "./NavBar.scss";
import brainflixLogo from "../../assets/images/logo/BrainFlix-logo.svg";
import userAvatar from "../../assets/images/Mohan-muruge.jpg";
import SearchForm from "../SearchForm/SearchForm";
import Avatar from "../Avatar/Avatar";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav-bar">
      <Link to="/" className="nav-bar__logo">
        <img src={brainflixLogo} alt="brainflix logo" />
      </Link>
      <div className="nav-bar__content">
        <SearchForm />
        <Avatar src={userAvatar} nameOfClass="nav-bar__avatar" />
        <Link to="/upload" className="nav-bar__upload">
          <p>UPLOAD</p>
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
