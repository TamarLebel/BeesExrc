import React from "react";
import { Grid, Typography, Divider } from "@mui/material";
import { lightColor } from "../consts/styleConsts";

const HeaderDivider = ({ text }) => {
  const styles = {
    content: {
      margin: "4em 1.5em 0 1.5em",
      color: lightColor,
    },
    divider: {
      backgroundColor: lightColor,
    },
  };

  return (
    <Grid container direction="column" style={styles.content}>
      <Grid item>
        <Typography variant="h6">{text}</Typography>
      </Grid>
      <Grid item>
        <Divider style={styles.divider} />
      </Grid>
    </Grid>
  );
};

export default HeaderDivider;
