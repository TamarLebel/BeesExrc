import axios from "axios";
import {
  moviesApiUrl,
  getMoviesPath,
  searchParam,
  getMovieByIdPath,
  idParam,
} from "../consts/moviesApiConsts";

const buildGetMoviesUrl = () => {
  return `${moviesApiUrl}${getMoviesPath}`;
};

const buildGetMoviesBySearchUrl = (searchVal) => {
  return `${buildGetMoviesUrl()}/?${searchParam}=${searchVal}`;
};

const buildGetMovieByIdUrl = (movieId) => {
  return `${moviesApiUrl}${getMovieByIdPath}/?${idParam}=${movieId}`;
};

const fetchByUrl = async (url) => {
  try {
    const res = await axios.get(url);
    return res?.data;
  } catch (error) {
    console.log(error);
    throw new Error("server error");
  }
};

export const fetchMoviesBySearch = async (searchInput) => {
  try {
    const response = await fetchByUrl(buildGetMoviesBySearchUrl(searchInput));
    return response.Search;
  } catch (error) {
    throw error;
  }
};

export const fetchMovieById = async (movieId) => {
  try {
    const response = await fetchByUrl(buildGetMovieByIdUrl(movieId));

    return response;
  } catch (error) {
    throw error;
  }
};
