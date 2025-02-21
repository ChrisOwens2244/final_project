import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import apiKey from "../../utils/apiKey";
import { getNews } from "../../utils/newsApp";

import CurrentNewsContext from "../../context/CurrentNewsContext";
import { deleteArticle, getItems, saveArticle } from "../../utils/api";
import { getToken, setToken, removeToken } from "../../utils/token";
import { authorize, checkToken, register } from "../../utils/auth";
import CurrentUserContext from "../../context/CurrentUserContext";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Saved from "../Saved/Saved";
import ProtectedRoute from "../../utils/ProtectedRoute";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegitserModal";
import SignUpConfrimModal from "../SignUpConfirmModal/SignUpConfirmModal";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [activeModal, setActiveModal] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [newsResults, setNewsResults] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  function handleLoginClick() {
    setActiveModal("login");
  }

  function handleSignUpClick() {
    setActiveModal("register");
  }

  function closeModal() {
    setActiveModal("");
  }

  function login({ email, password }) {
    authorize(email, password)
      .then((data) => {
        setToken(data.token);
        return checkToken(data.token);
      })
      .then((res) => {
        const user = res.data;
        console.log(res);
        getItems(getToken()).then((res) => {
          const articles = res.data;
          setCurrentUser({
            name: user.name,
            email: user.email,
            password: user.password,
            _id: user._id,
            savedArticles: articles,
          });
        });
        setIsLoggedIn(true);
        closeModal();
      })
      .catch(console.error);
    console.log(currentUser);
  }

  function signup(name, email, password) {
    register({ name, email, password })
      .then(() => {
        closeModal();
        setActiveModal("confirm");
      })
      .catch(console.error);
  }

  function logout() {
    removeToken();
    setCurrentUser({});
    setIsLoggedIn(false);
    navigate("/");
    console.log(currentUser);
  }

  function switchToSignUp() {
    closeModal();
    handleSignUpClick();
  }

  function switchToLogin() {
    closeModal();
    handleLoginClick();
  }

  function saveNews(news) {
    const token = getToken();
    saveArticle(news, token)
      .then((res) => {
        setCurrentUser({
          name: currentUser.name,
          email: currentUser.password,
          password: currentUser.password,
          _id: currentUser._id,
          savedArticles: [res.data, ...currentUser.savedArticles],
        });
      })
      .catch(console.error);
  }

  function deleteNews(article) {
    const token = getToken();
    deleteArticle(article, token)
      .then(() => {
        setCurrentUser({
          name: currentUser.name,
          email: currentUser.email,
          password: currentUser.password,
          savedArticles: currentUser.savedArticles.filter((item) => {
            return item.title != article.title;
          }),
        });
      })
      .catch(console.error);
  }

  function handleCardSave({ article, isSaved }) {
    !isSaved ? saveNews(article) : deleteNews(article);
  }

  function getArticles() {
    const token = getToken();
    return getItems(token);
  }

  function handleSearch(keyword) {
    const currentDate = new Date().toISOString();
    const pastDate = new Date(
      Date.now() - 7 * 24 * 60 * 60 * 1000
    ).toISOString();
    getNews(keyword, apiKey, pastDate, currentDate)
      .then((data) => {
        setNewsResults(data);
      })
      .catch((err) => {
        console.error(err);
        setNewsResults({});
      });
  }

  useEffect(() => {
    const token = getToken();
    if (!token) {
      setIsLoading(false);
      console.log("no token");
      return;
    }
    if (token) {
      checkToken(token)
        .then((res) => {
          const user = res.data;
          setIsLoggedIn(true);
          getItems(token).then((res) => {
            const articles = res.data;
            setCurrentUser({
              name: user.name,
              email: user.email,
              password: user.password,
              _id: user._id,
              savedArticles: articles,
            });
          });
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);
          removeToken();
          console.error("Invalid Token", err);
        });
    }
  }, [isLoading]);

  return (
    <CurrentUserContext.Provider value={{ currentUser }}>
      {" "}
      <CurrentNewsContext.Provider value={{ newsResults }}>
        <div className="page__content">
          <Routes>
            <Route
              path="/"
              element={
                <main>
                  <Main
                    isLoggedIn={isLoggedIn}
                    toSearch={handleSearch}
                    handleLogInButton={handleLoginClick}
                    handleLogOutButton={logout}
                    handleSave={handleCardSave}
                  />
                </main>
              }
            />
            <Route
              path="/saved-news"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <main>
                    <Saved
                      isLoggedIn={isLoggedIn}
                      handleLogInButton={handleLoginClick}
                      handleLogOutButton={logout}
                      handleSave={handleCardSave}
                      getArticles={getArticles}
                    />
                  </main>
                </ProtectedRoute>
              }
            />
          </Routes>
          <Footer />
        </div>
        {activeModal === "login" && (
          <LoginModal
            isOpen={activeModal === "login"}
            onLogin={login}
            onCloseModal={closeModal}
            handleSwitch={switchToSignUp}
          />
        )}
        {activeModal === "register" && (
          <RegisterModal
            isOpen={activeModal === "register"}
            onRegister={signup}
            onCloseModal={closeModal}
            handleSwitch={switchToLogin}
          />
        )}
        {activeModal === "confirm" && (
          <SignUpConfrimModal
            isOpen={activeModal === "confirm"}
            onClose={closeModal}
            onSwitch={switchToLogin}
          />
        )}
      </CurrentNewsContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
