import { Box, IconButton, TextField } from "@material-ui/core";
import React from "react";
import Icon from '@mui/material/Icon';



const Searchbar = () => {
  return(
    <Box >
      <TextField
      id= 'search_bar'
      className="text"
      label = "Busqueda"
      variant="filled"
      placeholder="Buscar en colección"
      size="medium">
      </TextField>
      <IconButton type="submit" aria-label="search">
        <Icon>Search</Icon>
      </IconButton>
    </Box>
  )
}

export default Searchbar;