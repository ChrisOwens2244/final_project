import About from "../About/About";
import SearchForm from "../SearchForm/SearchForm";
import Header from "../Header/Header";

function Main({
  isLoggedIn,
  toSearch,
  handleLogInButton,
  handleLogOutButton,
  handleSave,
}) {
  return (
    <main className="main">
      <div className="main__top">
        <Header
          className="main__header"
          isLoggedIn={isLoggedIn}
          currentPage={"home"}
          handleLogInButton={handleLogInButton}
          handleLogOutButton={handleLogOutButton}
        />
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
    </main>
  );
}
export default Main;
