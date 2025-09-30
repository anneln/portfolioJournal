import postsArray from "./data.js";

let realisationsInHtml = [];

function displayArticles() {
  return postsArray
    .map(function (article) {
      console.log(postsArray);
      return `
            <article class="post" id="post-one">
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
            </article>`;
    })
    .join(" ");
}

realisationsInHtml = displayArticles();
document.getElementById("posts-list").innerHTML = realisationsInHtml;
console.log(realisationsInHtml);
