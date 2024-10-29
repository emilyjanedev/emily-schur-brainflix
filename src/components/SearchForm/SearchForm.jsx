import "./SearchForm.scss";

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
