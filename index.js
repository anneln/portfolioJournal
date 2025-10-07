import postsArray from "./data.js";

let realisationsInHtml = [];

function displayArticles(start, end) {
  return postsArray
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
                  ${article.description.substring(0, 150)}
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
  const article = postsArray.find((p) => p.id == articleId);

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

const app = document.getElementById("app");

const params = new URLSearchParams(window.location.search);
const articleId = params.get("id");
const article = postsArray.find((post) => post.id == articleId);

if (article) {
  app.innerHTML = `
    <main>
      <article class="post">
        <img src="${article.image}" alt="${article.name}" class="blog-img" />
        <div class="post-description">
          <span class="post-date">${article.date}</span>
          <h2 class="post-title">${article.name}</h2>
          <p class="post-paragraphe">${article.description}</p>
        </div>
      </article>
    </main>
  `;
} else {
  app.innerHTML = `<p>Article introuvable.</p>`;
}

/*




MA version


const post = document.querySelector(".post");
const articleDetail = document.querySelector(".article-detail");

post.addEventListener("click", function (e) {
  if (e.target.dataset.id) {
    const article = postsArray.find((post) => post.id == e.target.dataset.id);
    articleDetail.innerHTML = `
            <article class="post" id="post-article" data-id="${article.id}">
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
  }
});
*/
