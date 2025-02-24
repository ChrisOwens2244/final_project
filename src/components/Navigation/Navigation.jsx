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
    currentPage === "home"
      ? "nav__link nav__link_highlight-white"
      : "nav__link nav__link_black";
  const savedName =
    currentPage === "saved"
      ? "nav__link nav__link_highlight-black"
      : "nav__link nav__link_white";

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
            className={`nav__button nav__button_${currentPage} nav__button_logout`}
            type="button"
            onClick={handleLogOutButton}
          >
            <p className={`nav__username nav__username_${currentPage}`}>
              {user?.currentUser?.name}{" "}
            </p>
            <img className="nav__logout-img" src={imageUsed} alt="logout" />
          </button>
        </>
      ) : (
        <div>
          <button
            className={`nav__button nav__button_${currentPage} nav__button_login`}
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
