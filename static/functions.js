const baseURL = "https://api.github.com/search/repositories";

const getRepositories = (language, perPage = 10) => {
  return fetch(
    `${baseURL}?q=language:${language}&sort=stars&order=desc&per_page=${perPage}`
  ).then((response) => {
    if (response.status === 200 || response.status === 304) {
      return response.json();
    } else {
      throw new Error("Unable to fetch data");
    }
  });
};

const generateRepoRowDOM = (repo) => {
  // console.log("[APP LOG] generateRepoRow");
  // console.log(repo);

  // set up empty table row which contains info about one repository
  const repoEl = document.createElement("tr");

  // assign values to table cells which represent details about the respository
  const repoNameEl = document.createElement("td");
  repoNameEl.textContent = repo.name;

  const repoDescriptionEl = document.createElement("td");
  repoDescriptionEl.textContent = repo.description;

  const repoUrlEl = document.createElement("td");
  repoUrlEl.textContent = repo.html_url;

  const repoStarsEl = document.createElement("td");
  repoStarsEl.setAttribute("nowrap", ""); // Ensure icons are shown horizontally if in eighties mode

  // render star rating with formatting depending on mode stored in local storage
  const mode = localStorage.getItem("mode");
  let starRating = repo.stargazers_count;

  if (mode === "eighties") {
    // eighties mode is toggled
    //console.log("[APP LOG] eightes mode rollers");

    let starRatingEightiesMode = starRating;
    if (starRatingEightiesMode <= 10000) {
      // small
      starRatingEightiesMode = `🛼`;
    } else if (
      starRatingEightiesMode > 10000 &&
      starRatingEightiesMode < 100000
    ) {
      // medium
      starRatingEightiesMode = `🛼 🛼`;
    } else if (starRatingEightiesMode >= 100000) {
      // large
      starRatingEightiesMode = `🛼 🛼 🛼`;
    }

    repoStarsEl.textContent = starRatingEightiesMode;
  } else {
    // default mode
    repoStarsEl.textContent = starRating;
  }

  // generate the row DOM
  repoEl.appendChild(repoNameEl);
  repoEl.appendChild(repoDescriptionEl);
  repoEl.appendChild(repoUrlEl);
  repoEl.appendChild(repoStarsEl);

  return repoEl;
};

const renderReposTable = (repos) => {
  // console.log("[APP LOG] renderReposTable");
  // console.log(repos);

  // clear any existing rendering
  document.querySelector("#repos").innerHTML = "";

  // set up table header and assign values to headings

  const repoTableEl = document.createElement("table");
  repoTableEl.classList.add("container__table");

  const repoTableHeaderRowEl = document.createElement("tr");

  const repoTableHeaderNameEl = document.createElement("th");
  repoTableHeaderNameEl.textContent = "Name";

  const repoTableHeaderDescriptionEl = document.createElement("th");
  repoTableHeaderDescriptionEl.textContent = "Description";

  const repoTableHeaderUrlEl = document.createElement("th");
  repoTableHeaderUrlEl.textContent = "URL";

  const repoTableHeaderStarsEl = document.createElement("th");
  repoTableHeaderStarsEl.textContent = "Stars";

  // generate row heading DOM
  repoTableHeaderRowEl.appendChild(repoTableHeaderNameEl);
  repoTableHeaderRowEl.appendChild(repoTableHeaderDescriptionEl);
  repoTableHeaderRowEl.appendChild(repoTableHeaderUrlEl);
  repoTableHeaderRowEl.appendChild(repoTableHeaderStarsEl);

  // render table
  document.querySelector("#repos").appendChild(repoTableEl);

  // render row heading
  document.querySelector("table").appendChild(repoTableHeaderRowEl);

  // Render each repository as a row with details about the repository on the HTML page
  const repoTableRows = repos.items.forEach((item) => {
    const repoEl = generateRepoRowDOM(item);
    document.querySelector("table").appendChild(repoEl);
  });
};

const renderCounter = (repos) => {
  // clear any existing rendering
  const counterEl = document.querySelector("#issues-counter");
  counterEl.innerHTML = "";

  // calculate counter value
  let issuesCounter = 0;
  repos.items.forEach((item) => {
    issuesCounter += item.open_issues_count;
    //console.log(`[APP LOG] open_issues_count: ${item.open_issues_count}`);
  });

  // console.log(`[APP LOG] issuesCounter: ${issuesCounter}`);

  // render counter on the HTML page
  // formatting depends on mode stored in local storage
  const mode = localStorage.getItem("mode");

  if (mode === "eighties") {
    // eighties mode is toggled
    let issuesCounterEightiesMode = issuesCounter;
    if (issuesCounterEightiesMode <= 5000) {
      // small
      issuesCounterEightiesMode = `🎷`;
    } else if (
      issuesCounterEightiesMode > 5000 &&
      issuesCounterEightiesMode < 10000
    ) {
      // medium
      issuesCounterEightiesMode = `🎷 🎷`;
    } else if (issuesCounterEightiesMode >= 10000) {
      // large
      issuesCounterEightiesMode = `🎷 🎷 🎷`;
    }

    counterEl.innerHTML = `Total open issues: ${issuesCounterEightiesMode}`;
  } else {
    // default mode
    counterEl.innerHTML = `Total open issues: ${issuesCounter}`;
  }

  return issuesCounter;
};
