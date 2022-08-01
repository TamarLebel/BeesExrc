import React from "react";
import { Grid, DialogContent } from "@mui/material";
import { dataColor } from "../../../consts/styleConsts";
import { notApplicable } from "../../../consts/textConsts";
import MovieDetail from "./movieDetail";

const MoviePopUpContent = ({ movie }) => {
  const styles = {
    dialogContent: {
      color: dataColor,
      width: "20em",
    },
  };

  return (
    <DialogContent style={styles.dialogContent}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="baseline"
        rowSpacing={0.5}
      >
        <MovieDetail title="Release Date" data={movie.Released} />
        <MovieDetail title="Geners" data={movie.Genre} />
        <MovieDetail title="Director" data={movie.Director} />
        <MovieDetail title="Actors" data={movie.Actors} />
        <MovieDetail title="Plot" data={movie.Plot} />
        <MovieDetail title="IMDB Rating" data={movie.imdbRating} />
        {movie.Website !== notApplicable && (
          <MovieDetail title="Link" data={movie.Website} isLink={true} />
        )}
      </Grid>
    </DialogContent>
  );
};

export default MoviePopUpContent;
