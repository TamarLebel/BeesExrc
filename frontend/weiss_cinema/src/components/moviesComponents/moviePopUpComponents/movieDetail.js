import React from "react";
import { Grid, Link, Typography } from "@mui/material";

const MovieDetail = ({ title, data, isLink }) => {
  const styles = {
    data: {
      fontSize: "smaller",
    },
  };

  return (
    <Grid container alignItems="center" columnSpacing={0.5}>
      <Grid item>
        <Typography>{title}:</Typography>
      </Grid>
      <Grid item>
        {isLink ? (
          <Typography style={styles.data}>
            <Link>{data}</Link>
          </Typography>
        ) : (
          <Typography style={styles.data}>{data}</Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default MovieDetail;
