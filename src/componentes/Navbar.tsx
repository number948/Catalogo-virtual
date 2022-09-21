import React from 'react'
import imagen_logos from '../imagenes/logos.png'; 
import { Box, Stack } from '@mui/material'
import { AppBar, Container, makeStyles, Toolbar, Typography } from '@material-ui/core';


const useStyles = makeStyles(theme =>({
  root: {
    flexGrow:1
  },
  title: { //aqui para tratar de dejar solo el texto en medio
    flexGrow:1,
    textAlign:"center"
  },
  logo: {
    
    height: 60,
    marginRight: '40px'
  }
}))

const Navbar = () => {
  const classes = useStyles()
  return(
    <div className={classes.root} >

        <AppBar position='static' color='secondary'>
          
          <Container>

          <Toolbar>
         
            <img
            src={imagen_logos}  
            alt = 'imagenlogo'
            className={classes.logo}
            />

            <Stack  direction="column" spacing={3} >
                <Typography variant='h6' component='h1' align= 'center' className={classes.title}>
                Fundación Cultural y Deportiva de Bomberos De Chile (FCDBCH)
                </Typography>
                <Typography variant='h6' component='h1' align='center' className={classes.title}>
                  Museo virtual
                </Typography>
            </Stack>

          </Toolbar>

        </Container>

      </AppBar>
    </div>
  )
}

export default Navbar;