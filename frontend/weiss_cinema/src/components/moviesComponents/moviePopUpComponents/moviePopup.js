import React, { useEffect, useState } from "react";
import { Dialog, Typography, LinearProgress, Grid } from "@mui/material";
import { fetchMovieById } from "../../../services/apiHandler";
import {
  popUpBackgroundColor,
  lightColor,
  redHeart,
} from "../../../consts/styleConsts";
import { fetchMovieError } from "../../../consts/textConsts";

import MoviePopUpData from "./moviePopUpData";

const MoviePopup = ({
  isOpen,
  handleClose,
  movieId,
  isInWishList,
  wishListHandler,
}) => {
  const styles = {
    progress: {
      width: "80%",
    },
    dialog: {
      backgroundColor: popUpBackgroundColor,
      color: lightColor,
      height: "25em",
    },
    dialogContainer: {
      height: "100%",
      width: "100%",
      marginLeft: "1em",
    },
    iconButton: {
      color: redHeart,
    },
  };

  const [movieData, setMovieData] = useState({});
  const [isFetchingMovie, setIsFetchingMovie] = useState(false);
  const [serverError, setServerError] = useState([false]);

  useEffect(() => {
    const fetchMovieData = async (id) => {
      try {
        setIsFetchingMovie(true);

        // since your api is too fast, I added this await to see the loader :)
        await new Promise((r) => setTimeout(r, 1000));

        const data = await fetchMovieById(id);
        setMovieData(data);
        setServerError(false);
      } catch (error) {
        setMovieData({});
        setServerError(true);
        console.log(error);
      } finally {
        setIsFetchingMovie(false);
      }
    };

    fetchMovieData(movieId);
  }, [movieId]);

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      fullWidth={true}
      PaperProps={{
        style: styles.dialog,
      }}
    >
      {isFetchingMovie ? (
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          style={styles.dialogContainer}
        >
          <LinearProgress style={styles.progress} />
        </Grid>
      ) : serverError ? (
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          style={styles.dialogContainer}
        >
          <Typography>{fetchMovieError}</Typography>
        </Grid>
      ) : movieData !== {} ? (
        <MoviePopUpData
          movie={movieData}
          isInWishList={isInWishList}
          wishListHandler={wishListHandler}
        />
      ) : null}
    </Dialog>
  );
};
export default MoviePopup;
