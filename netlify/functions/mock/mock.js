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
      const { size, page, query } = event.queryStringParameters;
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
