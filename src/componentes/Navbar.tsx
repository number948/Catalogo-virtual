import React from 'react'
import imagen_logos from '../imagenes/logos.png'; 
import { Box } from '@mui/material'
import { AppBar, Container, makeStyles, Toolbar, Typography } from '@material-ui/core';
import { Padding } from '@mui/icons-material';




const useStyles = makeStyles({
  title: { //aqui para tratar de dejar solo el texto en medio
    marginLeft: 250,
    textAlign: 'center'
    
  },
  
  logo: { //aqui es donde debería escribir codigo para mover los logos hacia la izq
    

  }
  
})

const Navbar = () => {
  const classes = useStyles()
  return(
    <div>
        <AppBar position='static' color='secondary'>
          <Container maxWidth= 'xl'>
          <Toolbar>
            <Box
              className={classes.logo}
              component='img'
              sx={{
                height: 90
              }}
              alt = 'imagenlogo'
              src={imagen_logos}>
            </Box>

            <Typography
            className={classes.title}>
              <h2>Fundación Cultural y Deportiva de Bomberos De Chile (FCDBCH)</h2>
              <h1>Museo virtual</h1>
            </Typography> 
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  )
}

export default Navbar;