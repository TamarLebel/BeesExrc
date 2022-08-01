import React from "react";
import { MovieCreation as MovieIcon } from "@mui/icons-material";
import { title } from "../consts/textConsts";
import { titleColor } from "../consts/styleConsts";
import { Grid, Typography } from "@mui/material";

const Header = ({}) => {
  const styles = {
    header: {
      color: titleColor,
      marginBottom: "auto",
      marginTop: "1em",
      marginLeft: "1.5em",
    },
    title: {
      fontWeight: "bold",
    },
  };

  return (
    <Grid
      container
      spacing={0.5}
      style={styles.header}
      onClick={() => window.location.reload(false)}
    >
      <Grid item>
        <MovieIcon fontSize="large" />
      </Grid>
      <Grid item>
        <Typography variant="h5" style={styles.title}>
          {title}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Header;
