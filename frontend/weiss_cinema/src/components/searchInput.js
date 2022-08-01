import React, { useState, useCallback } from "react";
import { InputBase, Grid } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { lightColor, focusedInputColor } from "../consts/styleConsts";
import { useDebouncedCallback } from "use-debounce";

const buildeStyles = (isFocused) => {
  return {
    input: {
      border: `2px solid ${isFocused ? focusedInputColor : lightColor}`,
      color: lightColor,
    },
    icon: {
      color: lightColor,
    },
  };
};

const Search = ({ handleSearch }) => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const styles = buildeStyles(isSearchFocused);

  const handleSearchInputChanged = (value) => {
    setSearchValue(value);
    debounceHandleSearch(value);
  };

  const debounceHandleSearch = useDebouncedCallback((value) => {
    handleSearch(value);
  }, 300);

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item>
        <SearchIcon fontSize="large" style={styles.icon} />
      </Grid>
      <Grid item>
        <InputBase
          variant="outlined"
          style={styles.input}
          onBlur={() => setIsSearchFocused(false)}
          onFocus={() => setIsSearchFocused(true)}
          value={searchValue}
          onChange={(event) => handleSearchInputChanged(event.target.value)}
        />
      </Grid>
    </Grid>
  );
};

export default Search;
