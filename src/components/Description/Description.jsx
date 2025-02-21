import { useContext } from "react";
import CurrentUserContext from "../../context/CurrentUserContext";
function Description({ keywords }) {
  const user = useContext(CurrentUserContext);
  const userName = user?.currentUser?.name;
  const uniqueKeys = [...new Set(keywords)];
  const keys =
    uniqueKeys?.length < 3
      ? uniqueKeys?.length < 2
        ? `${uniqueKeys[0]}`
        : `${uniqueKeys[0]} and ${uniqueKeys[1]}`
      : `${uniqueKeys[0]}, ${uniqueKeys[1]}, and ${
          uniqueKeys?.length - 2
        } more`;
  return (
    <section className="desc">
      <h1 className="desc__title">Saved Articles</h1>
      <h2 className="desc__user">{`${userName}, you have ${keywords?.length} saved articles.`}</h2>
      <div className="desc__key-box">
        <span className="desc__key-open">By Keywords: </span>
        <span className="desc__keys">{keys}</span>
      </div>
    </section>
  );
}
export default Description;
