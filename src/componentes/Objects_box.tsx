import React from "react";
import { Grid, Box } from "@material-ui/core";
const Objects_box = () => {
  return (
    <div>
        <Grid container> 

          <Grid item xs={12} sm={6}>
            <Box border= {2} borderColor= 'black'>
              xs12
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Box border= {2} borderColor= 'black'>
              xs12
            </Box>
          </Grid>

        </Grid>
    </div>
  )
}

export default Objects_box;