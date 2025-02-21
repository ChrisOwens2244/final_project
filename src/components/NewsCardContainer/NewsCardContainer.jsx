import { useContext, useState, useEffect } from "react";
import CurrentNewsContext from "../../context/CurrentNewsContext";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardContainer({ isLoggedIn, word, handleSave }) {
  const [currentIndex, setCurrentIndex] = useState(3);
  const [buttonName, setButtonName] = useState("container__more");
  const [displayed, setDisplayed] = useState([]);

  const results = useContext(CurrentNewsContext);
  const news = results?.newsResults?.articles;

  function addMore() {
    if (currentIndex + 3 < news?.length) {
      setCurrentIndex(currentIndex + 3);
    } else {
      setCurrentIndex(news?.length - 1);
    }
  }

  useEffect(() => {
    setDisplayed(news?.slice(0, currentIndex));
  }, [currentIndex]);

  useEffect(() => {
    if (currentIndex === news?.length - 1) {
      setButtonName("container__more container__more_hidden");
    }
  }, [currentIndex]);

  return (
    <section>
      <div className="container">
        <>
          <h1 className="container__title">Search Results</h1>
          <ul className="container__news">
            {displayed?.map((item) => {
              return (
                <NewsCard
                  news={item}
                  isLoggedIn={isLoggedIn}
                  key={
                    !item?.source?.id ? item?.source?.name : item?.source?.id
                  }
                  keyword={word}
                  popupText={"sign in to save articles"}
                  currentPage="home"
                  handleSave={handleSave}
                />
              );
            })}
          </ul>
          <button className={buttonName} type="button" onClick={addMore}>
            Show More
          </button>
        </>
      </div>
    </section>
  );
}
export default NewsCardContainer;
