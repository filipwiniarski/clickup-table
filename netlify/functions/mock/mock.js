/**
 * DISCLAIMER!
 * This mock has been made to easily handle and illustrate table behaviour
 * connected to server API along with pagination, filtering and sorting.
 *
 * This is by no means a real world solution.
 * It just does its job for the purpose of this mini project.
 */

const sortString = (a, b) => ("" + a).localeCompare(b);

const sortNumber = (a, b) => a - b;

const sortDate = (a, b) => new Date(a).getTime() - new Date(b).getTime();

const getSortMethod = (sortBy) => {
  switch (sortBy) {
    case "name":
      return (a, b) => sortString(a.name, b.name);
    case "followers":
      return (a, b) => sortNumber(a.followers.total, b.followers.total);
    case "popularity":
      return (a, b) => sortNumber(a.popularity, b.popularity);
  }
};

const fetch = require("node-fetch");

let url =
  "http://clickup-miniproject-filipwiniarski.netlify.app/assets/data.json";

let settings = { method: "Get" };

const total = 80;

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
};

const handler = (event, context, callback) => {
  fetch(url, settings)
    .then((res) => res.json())
    .then((json) => {
      const { size, page, query, sortBy, sortDirection } =
        event.queryStringParameters;
      const _size = Number(size);
      const _page = Number(page);
      const start = _page * _size;
      const take = start + _size >= total ? total : start + _size;

      let results = json.data;

      if (query.length > 0 && query !== "null") {
        results = results.filter((item) =>
          item.name.toLowerCase().includes(query.toLowerCase())
        );
      }

      if (sortBy.length > 0 && sortBy !== "null" && sortDirection !== "null") {
        const sortMethod = getSortMethod(sortBy);
        results = results.sort((a, b) => {
          if (!sortMethod) {
            return 1;
          }
          if (sortDirection === "asc") {
            return sortMethod(a, b);
          }
          return sortMethod(b, a);
        });
      }

      callback(null, {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          data: results.slice(start, take),
          total: results.length,
        }),
      });
    });
};

module.exports = { handler };
