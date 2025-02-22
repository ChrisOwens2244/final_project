import { useState } from "react";
import Navigation from "../Navigation/Navigation";

function Header({
  isLoggedIn,
  currentPage,
  handleLogInButton,
  handleLogOutButton,
}) {
  const [burger, setBurger] = useState(false);
  function handleBurger() {
    setBurger(!burger);
  }

  const nameWithBurger = burger ? "header__name_on-burger" : "";

  const background = burger ? "header__main header__main_on" : "header__main";

  const burgerName = burger
    ? "header__buttons header__buttons_burger"
    : "header__buttons";

  const burgerButton = burger
    ? "header__burger header__burger-off"
    : "header__burger";

  const burgerColor = currentPage === "home" ? "white" : "black";

  const burgerClose = burger ? "header__burger_close" : "";

  return (
    <header className={`header header_${currentPage}`}>
      <div className={background}>
        <h1
          className={`header__name header__name_${currentPage} ${nameWithBurger}`}
        >
          NewsExplorer
        </h1>
        <button
          type="button"
          className={`${burgerButton} header__burger_${burgerColor} ${burgerClose}`}
          onClick={handleBurger}
        />
      </div>

      <div className={burgerName}>
        <Navigation
          isLoggedIn={isLoggedIn}
          currentPage={currentPage}
          handleLogOutButton={handleLogOutButton}
          handleLogInButton={handleLogInButton}
          isBurger={burger}
        />
      </div>
    </header>
  );
}

export default Header;
