import Navigation from "../Navigation/Navigation";
function Header({
  isLoggedIn,
  currentPage,
  handleLogInButton,
  handleLogOutButton,
}) {
  return (
    <header className="header">
      <h1 className="header__name">NewsExplorer</h1>
      <div className="header__buttons">
        <Navigation
          isLoggedIn={isLoggedIn}
          currentPage={currentPage}
          handleLogOutButton={handleLogOutButton}
          handleLogInButton={handleLogInButton}
        />
      </div>
    </header>
  );
}

export default Header;
