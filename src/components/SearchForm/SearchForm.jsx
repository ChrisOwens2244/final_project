import { useState, useEffect } from "react";
import { useContext } from "react";
import Header from "../Header/Header";
import Preloader from "../Preloader/Preloader";
import NoResults from "../NoResults/NoResults";
import NewsCardContainer from "../NewsCardContainer/NewsCardContainer";
import CurrentNewsContext from "../../context/CurrentNewsContext";

function SearchForm({
  toSearch,
  isLoggedIn,
  handleSave,
  handleLogInButton,
  handleLogOutButton,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const [keyword, setKeyword] = useState("");
  const [isNoResults, setNoResults] = useState(false);
  const [isError, setError] = useState(false);

  const results = useContext(CurrentNewsContext);

  function handleSearchChange(e) {
    setKeyword(e.target.value);
  }

  function onSearch(e) {
    e.preventDefault();
    setIsLoading(true);
    toSearch(keyword);
    setTimeout(() => {
      setIsEmpty(false);
      setIsLoading(false);
    }, 4000);
  }

  useEffect(() => {
    if (Object.keys(results?.newsResults).length === 0) {
      setNoResults(true);
      setError(true);
    } else if (results?.newsResults?.articles?.length < 1) {
      setNoResults(true);
      setError(false);
    } else {
      setError(false);
      setNoResults(false);
    }
  }, [results]);

  return (
    <section>
      <div className="search">
        <div className="search__top">
          <Header
            className="main__header"
            isLoggedIn={isLoggedIn}
            currentPage={"home"}
            handleLogInButton={handleLogInButton}
            handleLogOutButton={handleLogOutButton}
          />
          <h1 className="search__title">What is going on in the world?</h1>
          <h2 className="search__desc">
            Find the latest news on any topic and save them in your personal
            account
          </h2>
          <form className="search__form" onSubmit={onSearch}>
            <input
              className="search__input"
              type="search"
              placeholder="Enter topic"
              value={keyword}
              onChange={handleSearchChange}
              minLength="1"
              required
            />
            <button className="search__btn" type="submit">
              Search
            </button>
          </form>
        </div>

        {isLoading ? (
          <Preloader />
        ) : isEmpty ? (
          <></>
        ) : isNoResults ? (
          <>
            <NoResults isError={isError} />
          </>
        ) : (
          <>
            <NewsCardContainer
              isLoggedIn={isLoggedIn}
              word={keyword}
              handleSave={handleSave}
            />
          </>
        )}
      </div>
    </section>
  );
}

export default SearchForm;
