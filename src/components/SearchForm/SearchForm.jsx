import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./SearchForm.scss";

function SearchForm({ videoList }) {
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState(videoList);
  const [isFocused, setIsFocused] = useState(false);

  const navigate = useNavigate();

  const handleChange = (event) => {
    setSearch(event.target.value);
    setSuggestions(
      videoList.filter((video) =>
        video.title.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
    console.log(suggestions.length);
  };

  const handleClick = (videoTitle) => {
    setSearch(videoTitle);
  };

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => {
    setTimeout(() => setIsFocused(false), 150);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (suggestions.length === 1) {
      navigate(`/videos/${suggestions[0].id}`);
      setSearch(suggestions[0].title);
    }
  };

  return (
    <form action="submit" className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="query"
        id="search"
        autoComplete="off"
        value={search}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="search-form__input"
      />
      {search && isFocused && (
        <div className="search-form__search-result">
          {suggestions.length > 0 ? (
            suggestions.map((suggestion) => (
              <Link
                to={`/videos/${suggestion.id}`}
                key={suggestion.id}
                className="search-form__suggestion"
                onClick={() => handleClick(suggestion.title)}
              >
                {suggestion.title}
              </Link>
            ))
          ) : (
            <p className="search-form__result">No Results</p>
          )}
        </div>
      )}
    </form>
  );
}

export default SearchForm;

SearchForm.propTypes = {
  videoList: PropTypes.array.isRequired,
};
