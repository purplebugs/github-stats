# github-stats

Personal exercise to visualise statistics from the github Search API https://docs.github.com/en/rest/reference/search

## Install app

1. Clone the repo

2. Install the app: `npm install`

## Start app

1. Start the app: `npm start`

2. Navigate to [http://localhost:3030/](http://localhost:3030/)

## Bonus: Elasticsearch section

Explore the data in the Elasticsearch. Here are a few options.

1. [View Dashboard](https://71f1472d328a4a94b02a7150e156553a.eu-central-1.aws.cloud.es.io:9243/goto/40eee9bf3208d989eab433528c32f54d) - Login with Elasticsearch - Username: roller Password: ask Anita ... :)

2. View the screenshots of the dashboard: [Default Dashboard](./static/elasticsearch-files/dashboard-github-repos-default.png) and [Selected Languages and Star Ratings](./static/elasticsearch-files/dashboard-github-select-languages-star-ratings.png)

Alternatively, to injest the data from scratch here are a few options

1. Use the helper tool at [./static/elasticsearch.html](./static/elasticsearch.html)

2. Use Kibana > Management > Stack Management > Saved Objects > Import this file [./static/elasticsearch-files/export.ndjson](./static/elasticsearch-files/export.ndjson), then create an index pattern for github-repos, then view the dashboard.
