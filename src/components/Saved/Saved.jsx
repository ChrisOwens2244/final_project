import { useContext } from "react";
import CurrentUserContext from "../../context/CurrentUserContext";
import Description from "../Description/Description";
import Header from "../Header/Header";
import NewsCard from "../NewsCard/NewsCard";

function Saved({
  isLoggedIn,
  handleLogOutButton,
  handleLogInButton,
  handleSave,
}) {
  const user = useContext(CurrentUserContext);
  console.log(user);
  const articles = user?.currentUser?.savedArticles;
  console.log(articles);
  const keywords = articles?.map((item) => item["keyword"]);
  console.log(keywords);
  return (
    <div className="saved">
      <Header
        className="saved__header"
        isLoggedIn={isLoggedIn}
        currentPage={"saved"}
        handleLogInButton={handleLogInButton}
        handleLogOutButton={handleLogOutButton}
      />
      <Description className="saved__desc" keywords={keywords} />
      <div className="saved__container">
        <ul className="container__news">
          {articles?.map((item) => {
            return (
              <NewsCard
                news={item}
                isLoggedIn={isLoggedIn}
                key={item?._id}
                keyword={item?.keyword}
                popupText={"sign in to save articles"}
                currentPage={"saved"}
                handleSave={handleSave}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}
export default Saved;
