import { checkResponse } from "./api";

const newsApiBaseUrl =
  process.env.NODE_ENV === "production"
    ? "https://nomoreparties.co/news/v2/everything"
    : "https://newsapi.org/v2/everything";

export const getNews = (q, apiKey, from, to) => {
  return fetch(
    `${newsApiBaseUrl}?q=${q}&from=${from}&to=${to}&pageSize=100&apiKey=${apiKey}`
  ).then(checkResponse);
};
