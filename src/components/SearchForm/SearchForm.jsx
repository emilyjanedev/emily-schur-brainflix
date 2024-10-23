import "./SearchForm.scss";
import Button from "../Button/Button";
import Avatar from "../Avatar/Avatar";
import userAvatar from "../../assets/images/Mohan-muruge.jpg";
import uploadIcon from "../../assets/images/icons/upload.svg";

function SearchForm() {
  return (
    <form action="submit" className="search-form">
      <div className="search-form__search-wrapper">
        <input
          type="text"
          name="query"
          id="search"
          placeholder="Search"
          className="search-form__input"
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
