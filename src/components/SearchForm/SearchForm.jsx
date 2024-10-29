import "./SearchForm.scss";

function SearchForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form action="submit" className="search-form" onSubmit={handleSubmit}>
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
