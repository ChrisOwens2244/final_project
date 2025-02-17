export const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://chrisowens2244.github.io/final_project" //edit after setting up git
    : "http://localhost:3000";

export function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
}

export function getItems(token) {
  if (!token) {
    return;
  }
  return new Promise((resolve) => {
    resolve({
      data: [
        {
          _id: "65f7368dfb74bd6a92114c85", // I just generated this at random from a mongodb id generator website
          title: "Some news article",
          url: "https://gizmodo.com/microstrategy-says-drop-the-micro-its-cleaner-2000559905",
          urlToImage:
            "https://gizmodo.com/app/uploads/2025/02/GettyImages-2039371693.jpg",
          source: { name: "dfsa", id: "sadf" },
          author: "author",
          description: "feda;dsfj",
          publishedAt: "2025-02-06T13:45:12Z",
          keyword: "word",
        },
      ],
    });
  });
}

export function saveArticle(article, token) {
  // article is a result from the NewsAPI
  if (!token) {
    return;
  }
  return new Promise((resolve) => {
    resolve({
      data: article,
    });
  });
}

export function deleteArticle(article, token) {
  // article is a result from the NewsAPI
  if (!token) {
    return;
  }
  return new Promise((resolve) => {
    resolve({
      data: article,
    });
  });
}
