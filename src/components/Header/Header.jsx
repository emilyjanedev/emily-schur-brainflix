import "./Header.scss";
import brainflixLogo from "../../assets/images/logo/BrainFlix-logo.svg";
import SearchForm from "../SearchForm/SearchForm";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img
          src={brainflixLogo}
          alt="brainflix logo"
          className="header__logo"
        />
      </Link>
      <SearchForm />
    </header>
  );
}

export default Header;
