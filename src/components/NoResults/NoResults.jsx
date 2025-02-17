function NoResults({ isError }) {
  const title = isError ? "Error" : "Nothing Found";
  const desc = isError
    ? "An Error Occured"
    : "Sorry, but nothing matched your search terms.";
  return (
    <div className="none">
      <img
        className="none__image"
        src={"../../assets/not-found_v1.svg"}
        alt="Not found"
      />
      <h1 className="none__title">{title}</h1>
      <p className="none__desc">{desc}</p>
    </div>
  );
}
export default NoResults;
