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
      console.log(`Error: ${err}`);
    });
};

renderPage();

document.querySelector("#filter").addEventListener("change", function (e) {
  filter.language = e.target.value;

  renderPage();
});
