import React from "react";
import { Grid, ImageList } from "@mui/material";
import MovieListItem from "./movieListItem";

const MovieList = ({ movies, onMovieClick }) => {
  const styles = {
    list: {
      gap: "1em",
    },
  };

  return (
    <Grid container alignItems={"center"}>
      <Grid item xs={1} />
      <Grid item xs={10}>
        <ImageList cols={7} style={styles.list}>
          {movies.map((movie) => {
            return (
              <MovieListItem
                key={movie.imdbID}
                movie={movie}
                wishListHandler={onMovieClick}
              />
            );
          })}
        </ImageList>
        <Grid item xs={1} />
      </Grid>
    </Grid>
  );
};

export default MovieList;
