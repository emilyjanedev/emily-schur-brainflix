import "./NavBar.scss";
import brainflixLogo from "../../assets/images/logo/BrainFlix-logo.svg";
import SearchForm from "../SearchForm/SearchForm";

function NavBar() {
  return (
    <nav className="nav-bar">
      <img src={brainflixLogo} alt="brainflix logo" className="nav-bar__logo" />
      <SearchForm />
    </nav>
  );
}

export default NavBar;
