export const addOrRemoveFromWishList = (movie) => {
  if (localStorage.getItem(movie.imdbID)) {
    localStorage.removeItem(movie.imdbID);
  } else {
    localStorage.setItem(movie.imdbID, JSON.stringify(movie));
  }
};

export const getMoviesFromWishList = () => {
  return Object.keys(localStorage).map((key) =>
    JSON.parse(localStorage.getItem(key))
  );
};

export const isInWishList = (key) => {
  return !!localStorage.getItem(key);
};
