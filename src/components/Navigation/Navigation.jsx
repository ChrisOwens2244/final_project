import { NavLink } from "react-router-dom";
import logout from "../../assets/logout.svg";
import logoutBlack from "../../assets/logout_black.svg";
import { useContext } from "react";
import CurrentUserContext from "../../context/CurrentUserContext";

function Navigation({
  isLoggedIn,
  currentPage,
  handleLogOutButton,
  handleLogInButton,
  isBurger,
}) {
  const user = useContext(CurrentUserContext);
  const homeName =
    currentPage === "home" ? "nav__home nav__home_highlight" : "nav__home";
  const savedName =
    currentPage === "saved" ? "nav__save nav__save_highlight" : "nav__save";

  const imageUsed = currentPage === "home" || isBurger ? logout : logoutBlack;
  return (
    <nav className="nav">
      <NavLink className={homeName} to="/">
        Home
      </NavLink>
      {isLoggedIn ? (
        <>
          <NavLink className={savedName} to="/saved-news">
            Saved Articles
          </NavLink>
          <button
            className={`nav__logout nav__logout_${currentPage}`}
            type="button"
            onClick={handleLogOutButton}
          >
            <p className={`nav__username nav__username_${currentPage}`}>
              {user?.currentUser?.name}{" "}
            </p>
            <img className="nav__logout_img" src={imageUsed} alt="logout" />
          </button>
        </>
      ) : (
        <div>
          <button
            className={`nav__login nav__login_${currentPage}`}
            type="button"
            onClick={handleLogInButton}
          >
            Sign In
          </button>
        </div>
      )}
    </nav>
  );
}
export default Navigation;
