const { httpGet } = require('./mock-http-interface');

const getArnieQuotes = async (urls) => {
  return Promise.all(urls.map(fetchAndTransformQuote));
};

const fetchAndTransformQuote = async (url) => {
  const response = await httpGet(url);
  const { message } = JSON.parse(response.body);

  return response.status === 200
    ? { 'Arnie Quote': message }
    : { 'FAILURE': message };
};

module.exports = {
  getArnieQuotes,
};