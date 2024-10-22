import "./SearchForm.scss";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Avatar from "../Avatar/Avatar";
import userAvatar from "../../assets/images/Mohan-muruge.jpg";
import uploadIcon from "../../assets/images/icons/upload.svg";
import searchIcon from "../../assets/images/icons/search.svg";

function SearchForm() {
  return (
    <form action="submit" className="search-form">
      <div className="search-form__search-wrapper">
        <img
          src={searchIcon}
          alt="magnifying class icon"
          className="search-form__search-icon"
        />
        <Input
          type="text"
          name="query"
          id="search"
          placeholder="Search"
          nameOfClass="search-form__input"
        />
      </div>
      <Avatar src={userAvatar} nameOfClass="search-form__avatar" />
      <Button
        nameOfClass="search-form__button"
        icon={uploadIcon}
        cta="UPLOAD"
      />
    </form>
  );
}

export default SearchForm;
