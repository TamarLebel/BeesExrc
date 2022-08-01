import React from "react";
import { Grid, DialogTitle, Typography } from "@mui/material";
import WishListButton from "../wishListButton";
import MoviePopUpContent from "./moviePopUpContent";

const MoviePopUpData = ({ movie, isInWishList, wishListHandler }) => {
  const styles = {
    dialogContainer: {
      height: "100%",
      width: "100%",
      marginLeft: "1em",
    },
    title: { fontSize: "inherit" },
    photo: {
      width: "14em",
      marginTop: "1em",
    },
  };

  return (
    <Grid
      container
      direction="row-reverse"
      justifyContent="flex-end"
      alignItems="center"
      style={styles.dialogContainer}
    >
      <Grid item>
        <DialogTitle>
          <Grid container justifyContent="space-between">
            <Grid item>
              <Typography style={styles.title}>{movie.Title}</Typography>
              <Typography>{movie.Year}</Typography>
            </Grid>
            <WishListButton
              isInWishList={isInWishList}
              handleClick={wishListHandler}
            />
          </Grid>
        </DialogTitle>

        <MoviePopUpContent movie={movie}></MoviePopUpContent>
      </Grid>
      <img
        style={styles.photo}
        src={movie.Poster}
        srcSet={movie.Poster}
        alt={movie.Title}
      />
    </Grid>
  );
};

export default MoviePopUpData;
