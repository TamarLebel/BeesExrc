const {
  omdbApi,
  apiKeyParam,
  apiKey,
  searchParam,
  movieTypeResult,
  idParam,
} = require("../consts/consts");

const buildBaseUrl = () => {
  return `${omdbApi}?${apiKeyParam}=${apiKey}`;
};

const buildMovieSearchUrl = (searchValue) => {
  return `${buildBaseUrl()}&${searchParam}=${searchValue}&${movieTypeResult}`;
};

const buildMovieByIdUrl = (id) => {
  return `${buildBaseUrl()}&${idParam}=${id}`;
};

module.exports = { buildMovieSearchUrl, buildMovieByIdUrl };
