import { NavLink } from "react-router-dom";
import gitHub from "../../assets/github.svg";
import faceBook from "../../assets/fb.svg";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">© 2025 Supersite, Powered by News API</p>
      <nav className="footer__nav">
        <div className="footer__nav-text-container">
          <NavLink className="footer__nav-text" to="/">
            Home
          </NavLink>
          <a
            className="footer__nav-text"
            href="https://tripleten.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            TripleTen
          </a>
        </div>

        <a
          className="footer__nav-git"
          href="https://github.com/ChrisOwens2244/final_project"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="footer__git" src={gitHub} alt="git hub" />
        </a>
        <a
          className="footer__nav-fb"
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="footer__fb" src={faceBook} alt="facebook" />
        </a>
      </nav>
    </footer>
  );
}
export default Footer;
