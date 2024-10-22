import "./Header.scss";
import brainflixLogo from "../../assets/images/logo/BrainFlix-logo.svg";
import SearchForm from "../SearchForm/SearchForm";

function Header() {
  return (
    <header className="header">
      <img src={brainflixLogo} alt="brainflix logo" className="header__logo" />
      <SearchForm />
    </header>
  );
}

export default Header;
