import React, { useState } from "react";
import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import MoviePopup from "./moviePopUpComponents/moviePopup";
import { isInWishList } from "../../services/wishListService";
import WishListButton from "./wishListButton";

const MovieListItem = ({ movie, wishListHandler }) => {
  const styles = {
    movieItem: {
      cursor: "pointer",
    },
  };

  const [showMovieData, setShowMovieData] = useState(false);
  const [isMovieInWishList, setisMovieInWishList] = useState(
    isInWishList(movie.imdbID)
  );
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const handleWishlistIconClicked = (event) => {
    event.stopPropagation();
    wishListHandler(movie);
    setisMovieInWishList(isMovieInWishList ? false : true);
  };

  const openPopUp = () => {
    setIsPopUpOpen(true);
  };

  const closePopUp = () => {
    setIsPopUpOpen(false);
  };

  return (
    <>
      <ImageListItem
        style={styles.movieItem}
        onMouseEnter={() => setShowMovieData(true)}
        onMouseLeave={() => setShowMovieData(false)}
        onClick={openPopUp}
      >
        <img
          src={movie.Poster}
          srcSet={movie.Poster}
          alt={movie.Title}
          loading="lazy"
        />
        {showMovieData && (
          <ImageList>
            <ImageListItemBar
              position="top"
              actionIcon={
                <WishListButton
                  isInWishList={isMovieInWishList}
                  handleClick={handleWishlistIconClicked}
                />
              }
            />
            <ImageListItemBar title={movie.Title} subtitle={movie.Year} />
          </ImageList>
        )}
      </ImageListItem>
      {isPopUpOpen && (
        <MoviePopup
          isOpen={isPopUpOpen}
          handleClose={closePopUp}
          movieId={movie.imdbID}
          isInWishList={isMovieInWishList}
          wishListHandler={handleWishlistIconClicked}
        />
      )}
    </>
  );
};

export default MovieListItem;
