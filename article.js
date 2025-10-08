import postsArray from "./data.js";

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
                  ${article.description.substring(0, 150)}...
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

const art = document.getElementById("art");
const url = new URL(window.location.href);
const articleId = url.searchParams.get("id");
const article = postsArray.find((post) => post.id == articleId);

art.innerHTML = `
    <article class="solo-post" >
      <h2 class="article-title">${article.name}</h2>
      <p class="pitch">${article.subtitle}</p>
      <img src="${article.image}" alt="${article.name}" class="article-img" />
      <div class="article-description">
        <span class="article-date">${article.date}</span>  
        <p class="article-paragraphe">${article.description}</p>
      </div>
      <div> 
        <a class="article-link" target="_blank" href=${article.link}>View project</a>
      </div>
    </article>
  `;
