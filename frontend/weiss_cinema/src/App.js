import { Grid, Typography, Box } from "@mui/material";
import { useEffect, useState } from "react";
import HeaderDivider from "./components/headerDivider";
import Header from "./components/header";
import MovieList from "./components/moviesComponents/movieList";
import Search from "./components/searchInput";
import { backgroundColor, lightColor } from "./consts/styleConsts";
import {
  wishListText,
  searchResultText,
  emptyWishlistText,
  emptySearchListText,
  fetchBySearchError,
} from "./consts/textConsts";
import { fetchMoviesBySearch } from "./services/apiHandler";
import { addOrRemoveFromWishList } from "./services/wishListService";
import { getMoviesFromWishList } from "./services/wishListService";

const App = () => {
  const styles = {
    app: {
      height: "100%",
      width: "100%",
      backgroundColor: backgroundColor,
    },
    text: {
      marginLeft: "3em",
      marginTop: "3em",
      color: lightColor,
    },
  };

  const [listTitle, setListTitle] = useState(wishListText);
  const [showWishList, setShowWishList] = useState(true);
  const [movies, setMovies] = useState([]);
  const [serverError, setServerError] = useState([false]);

  useEffect(() => {
    setMovies(getMoviesFromWishList());
  }, []);

  const searchData = async (searchInput) => {
    if (!!searchInput) {
      try {
        const res = await fetchMoviesBySearch(searchInput);
        setMovies(res || []);
        setServerError(false);
      } catch (error) {
        setServerError(true);
        setMovies([]);
      } finally {
        setListTitle(`${searchResultText}"${searchInput}"`);
        setShowWishList(false);
      }
    } else {
      setMovies(getMoviesFromWishList());
      setListTitle(wishListText);
      setShowWishList(true);
    }
  };

  const editWishlistHandler = (movie) => {
    addOrRemoveFromWishList(movie);
    showWishList && setMovies(getMoviesFromWishList());
  };

  return (
    <Box style={styles.app}>
      <Grid container>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12}>
          <Search handleSearch={searchData} />
        </Grid>
        <Grid item xs={12}>
          <HeaderDivider text={listTitle} />
          <Grid item>
            {!!movies.length ? (
              <MovieList movies={movies} onMovieClick={editWishlistHandler} />
            ) : (
              <Typography style={styles.text}>
                {showWishList
                  ? emptyWishlistText
                  : serverError
                  ? fetchBySearchError
                  : emptySearchListText}
              </Typography>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default App;
