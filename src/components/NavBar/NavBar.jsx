import "./NavBar.scss";
import brainflixLogo from "../../assets/images/logo/BrainFlix-logo.svg";
import SearchForm from "../SearchForm/SearchForm";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav-bar">
      <Link to="/">
        <img
          src={brainflixLogo}
          alt="brainflix logo"
          className="nav-bar__logo"
        />
      </Link>
      <SearchForm />
    </nav>
  );
}

export default NavBar;
