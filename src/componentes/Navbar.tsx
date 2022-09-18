import React from 'react'
import imagen_logo_fundacion from '../imagenes/logo-fundación.png'; 
import imagen_logo_bomberos from '../imagenes/logo-bomberos.png'; 

import { Box } from '@mui/material'
import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    offset: theme.mixins.toolbar
}))

const Navbar = () => {
  const classes = useStyles()
  return(
    <div>
        <AppBar position='static' color='secondary'>

          <Toolbar>

            <Box
              component='img'
              sx={{
                height: 64
              }}
              alt = 'imagenlogo'
              src={imagen_logo_bomberos}>
            </Box>
            
            <Box
              component='img'
              sx={{
                height: 64
              }}
              alt = 'imagenlogo2'
              src={imagen_logo_fundacion}>
            </Box>

            <Typography>
              <h2>Fundación Cultural y Deportiva de Bomberos De Chile (FCDBCH)</h2>
              <h2> Museo virtual</h2>
            </Typography> 

          </Toolbar>
         
        </AppBar>
      <div className={classes.offset}>
      </div>
    </div>
  )
}

export default Navbar;