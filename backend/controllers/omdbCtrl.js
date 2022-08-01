const express = require("express");

const { getMovies, getById } = require("../consts/consts");
const {
  buildMovieSearchUrl,
  buildMovieByIdUrl,
} = require("../services/omdbService");
const { fetchData } = require("../utils/apiUtils");

const router = express.Router();

router.get(getMovies, async (req, res) => {
  const { searchValue } = req.query;

  const url = buildMovieSearchUrl(searchValue);

  try {
    const result = await fetchData(url);
    res.status(200).send(result);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get(getById, async (req, res) => {
  const { id } = req.query;

  const url = buildMovieByIdUrl(id);

  try {
    const result = await fetchData(url);
    console.log(`result: ${result}`);
    res.status(200).send(result);
  } catch (error) {
    console.log(`error: ${error}`);
    res.status(500).send(error);
  }
});

module.exports = router;
