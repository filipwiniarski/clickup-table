// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method

const total = 80;

const data = require("../../data");

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
};

const handler = async (event) => {
  console.log("cat");
  const { size, page, query } = event.queryStringParameters;

  console.log(size, page, query);
  const _size = Number(size);
  const _page = Number(page);
  const start = _page * _size;
  const take = start + _size >= total ? total : start + _size;

  console.log(size, page, query);

  let results;

  console.log(size, page, query, results);

  try {
    if (query?.length > 0 && query !== "null") {
      console.log("xd");
      results = data.data
        .filter((item) => item.name.toLowerCase().includes(query.toLowerCase()))
        .slice(start, take);
      console.log(size, page, query, results);
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          data: results,
          total: results.length,
        }),
      };
    } else {
      console.log("dog");
      results = data.data.slice(start, take);
      console.log(size, page, query, results);
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          data: results,
          total: total,
        }),
      };
    }
  } catch (error) {
    return {
      statusCode: 500,
      headers,
      body: error.toString(),
    };
  }
};

module.exports = { handler };
