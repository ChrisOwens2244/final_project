import { NavLink } from "react-router-dom";

function Navigation({
  isLoggedIn,
  currentPage,
  handleLogOutButton,
  handleLogInButton,
}) {
  const homeName =
    currentPage === "home" ? "nav__home nav__home_highlight" : "nav__home";
  const savedName =
    currentPage === "saved" ? "nav__save nav__save_highlight" : "nav__save";
  return (
    <div className="nav">
      <NavLink className={homeName} to="/">
        Home
      </NavLink>
      {isLoggedIn ? (
        <>
          <NavLink className={savedName} to="/saved-news">
            Saved Articles
          </NavLink>
          <button
            className="nav__logout"
            type="button"
            onClick={handleLogOutButton}
          >
            <p className="nav__username">Username </p>
            <img
              className="nav__logout-image"
              src="../../assets/logout.svg"
              alt="logout"
            />
          </button>
        </>
      ) : (
        <div>
          <button
            className="nav__login"
            type="button"
            onClick={handleLogInButton}
          >
            Sign In
          </button>
        </div>
      )}
    </div>
  );
}
export default Navigation;
