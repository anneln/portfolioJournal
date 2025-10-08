import postsArray from "./data.js";

const sortedPosts = [...postsArray].sort(
  (a, b) => new Date(b.date) - new Date(a.date)
);

function displayArticles(start, end) {
  return sortedPosts
    .slice(start, end)
    .map(function (article) {
      return `
            <article class="post" id="post-article" data-id="${article.id}">
              <img
                src="${article.image}"
                class="blog-img"
              />
              <div class="post-description">
                <span class="post-date">${article.date}</span>
                <h2 class="post-title">${article.name}</h2>
                <p class="post-paragraphe">
                  ${article.description.substring(0, 130)}...
                </p>
              </div>
            </article>
            `;
    })
    .join("");
}

const postList = document.getElementById("posts-list");
postList.innerHTML = displayArticles(0, 3);

postList.addEventListener("click", function (e) {
  const post = e.target.closest(".post");
  const articleId = post.dataset.id;
  const article = postsArray.find((post) => post.id == articleId);
  if (article && article.page) {
    window.location.href = `${article.page}?id=${articleId}`;
  }
});

const moreBtn = document.getElementById("more-btn");
moreBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const remainingArticles = displayArticles(3, postsArray.length);
  postList.innerHTML += remainingArticles;
  moreBtn.style.display = "none";
});
