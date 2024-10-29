import "./NavBar.scss";
import brainflixLogo from "../../assets/images/logo/BrainFlix-logo.svg";
import userAvatar from "../../assets/images/Mohan-muruge.jpg";
import uploadIcon from "../../assets/images/icons/upload.svg";
import SearchForm from "../SearchForm/SearchForm";
import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
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
        <Button nameOfClass="nav-bar__upload" icon={uploadIcon} cta="UPLOAD" />
      </div>
    </nav>
  );
}

export default NavBar;
