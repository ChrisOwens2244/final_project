import { NavLink } from "react-router-dom";
import gitHub from "../../assets/github.svg";
import faceBook from "../../assets/fb.svg";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">© 2025 Supersite, Powered by News API</p>
      <nav className="footer__nav">
        <div className="footer__nav-text-container">
          <NavLink className="nav__link nav__link_footer" to="/">
            Home
          </NavLink>
          <a
            className="nav__link nav__link_footer"
            href="https://tripleten.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            TripleTen
          </a>
        </div>
        <div className="footer__images">
          <a
            className="nav__link nav__link_image"
            href="https://github.com/ChrisOwens2244/final_project"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="footer__git" src={gitHub} alt="git hub" />
          </a>
          <a
            className="nav__link nav__link_image"
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="footer__fb" src={faceBook} alt="facebook" />
          </a>
        </div>
      </nav>
    </footer>
  );
}
export default Footer;
