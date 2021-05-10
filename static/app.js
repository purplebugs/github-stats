// default to showing javascript repos
const filter = {
  language: "javascript",
};

let renderPage = () => {
  getRepositories(filter.language)
    .then((repos) => {
      renderReposTable(repos);
      return repos;
    })
    .then((repos) => {
      renderCounter(repos);
      return repos;
    })
    .catch((err) => {
      console.error("Error rendering page", err);
    });
};

renderPage();

// render page when dropdown value selected
document.querySelector("#filter").addEventListener("change", function (e) {
  filter.language = e.target.value;

  renderPage();
});

// render page when toggle button is clicked
document.querySelector("#toggle").addEventListener("click", function (e) {
  renderPage();
});
