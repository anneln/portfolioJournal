import postsArray from "./data.js";

let realisationsInHtml = [];

function displayArticles(start, end) {
  return postsArray
    .slice(start, end)
    .map(function (article) {
      return `
            <article class="post">
              <img
                src="${article.image}"
                class="blog-img"
              />
              <div class="post-description">
                <span class="post-date">${article.date}</span>
                <h2 class="post-title">${article.name}</h2>
                <p class="post-paragraphe">
                  ${article.description}
                </p>
              </div>
            </article>
            `;
    })
    .join(" ");
}

const postList = document.getElementById("posts-list");
postList.innerHTML = displayArticles(0, 3);

const moreBtn = document.getElementById("more-btn");
moreBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const remainingArticles = displayArticles(3, postsArray.length);
  postList.innerHTML += remainingArticles;
  moreBtn.style.display = "none";
});
