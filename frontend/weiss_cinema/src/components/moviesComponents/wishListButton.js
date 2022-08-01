import React, { useMemo } from "react";
import {
  Favorite as Icon,
  FavoriteBorder as EmptyIcon,
} from "@mui/icons-material";
import { Tooltip, IconButton } from "@mui/material";
import { redHeart } from "../../consts/styleConsts";
import {
  addToWishListText,
  removeFromWishListText,
} from "../../consts/textConsts";
const WishListButton = ({ isInWishList, handleClick }) => {
  const styles = {
    iconButton: {
      color: redHeart,
    },
  };

  const tooltipTitle = useMemo(() => {
    return isInWishList ? removeFromWishListText : addToWishListText;
  }, [isInWishList]);

  return (
    <Tooltip title={tooltipTitle}>
      <IconButton
        style={styles.iconButton}
        onClick={handleClick}
        aria-label={"add to wish list"}
      >
        {isInWishList ? <Icon /> : <EmptyIcon />}
      </IconButton>
    </Tooltip>
  );
};

export default WishListButton;
