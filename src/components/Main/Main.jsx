import About from "../About/About";
import SearchForm from "../SearchForm/SearchForm";

function Main({
  isLoggedIn,
  toSearch,
  handleLogInButton,
  handleLogOutButton,
  handleSave,
}) {
  return (
    <div className="main">
      <div className="main__top">
        <SearchForm
          className="main__search"
          toSearch={toSearch}
          isLoggedIn={isLoggedIn}
          handleSave={handleSave}
          handleLogInButton={handleLogInButton}
          handleLogOutButton={handleLogOutButton}
        />
      </div>
      <About />
    </div>
  );
}
export default Main;
