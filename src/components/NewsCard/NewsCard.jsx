import { useContext } from "react";
import CurrentUserContext from "../../context/CurrentUserContext";
import noImage from "../../assets/not-found_v1.svg";

function NewsCard({ news, keyword, isLoggedIn, currentPage, handleSave }) {
  const user = useContext(CurrentUserContext);

  const isSaved = user.currentUser?.savedArticles?.some(
    (item) => item.title === news.title
  );

  const buttonState = !isSaved ? "" : "card__save-btn_saved";

  const keywordName =
    currentPage === "saved"
      ? "card__keyword card__keyword_visible"
      : "card__keyword card__keyword_hidden";
  const buttonName = isLoggedIn
    ? "card__save-btn"
    : "card__save-btn card__save-btn_no-logged";
  const posted = new Date(news?.publishedAt);
  const date = posted?.toLocaleString("default", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const imageUsed = !news?.urlToImage ? noImage : news?.urlToImage;

  function saveCard() {
    if (isLoggedIn) {
      const article = {
        _id: news?._id,
        source: news?.source,
        author: news?.author,
        title: news?.title,
        description: news?.description,
        url: news?.url,
        urlToImage: news?.urlToImage,
        publishedAt: news?.publishedAt,
        keyword: keyword,
      };
      handleSave({ isSaved, article });
    }
  }

  return (
    <div className="card">
      <div className="card__image-box">
        <img className="card__image" src={imageUsed} alt="news image" />
      </div>

      {currentPage === "home" ? (
        <div className="card__top">
          <p className={keywordName}>{keyword}</p>
          <button
            type="button"
            className={`${buttonName} ${buttonState}`}
            onClick={saveCard}
          >
            <p className="card__popup">Sign In to save articles</p>
          </button>
        </div>
      ) : (
        <div className="card__top">
          <p className={keywordName}>{keyword}</p>
          <button type="button" className="card__delete-btn" onClick={saveCard}>
            <p className="card__popup">Remove atricle from account</p>
          </button>
        </div>
      )}

      <div className="card__text">
        <h1 className="card__date">{date}</h1>
        <a className="card__title" href={news?.url}>
          {news?.title}
        </a>
        <p className="card__desc">{news?.description}</p>
        <h3 className="card__pub">{news?.source?.name}</h3>
      </div>
    </div>
  );
}
export default NewsCard;
