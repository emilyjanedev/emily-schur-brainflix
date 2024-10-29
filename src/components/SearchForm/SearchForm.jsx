import "./SearchForm.scss";
import Button from "../Button/Button";
import Avatar from "../Avatar/Avatar";
import userAvatar from "../../assets/images/Mohan-muruge.jpg";
import uploadIcon from "../../assets/images/icons/upload.svg";

function SearchForm() {
  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <form action="submit" className="search-form" onSubmit={submitHandler}>
      <input
        type="text"
        name="query"
        id="search"
        placeholder="Search"
        className="search-form__input"
      />
    </form>
  );
}

export default SearchForm;
