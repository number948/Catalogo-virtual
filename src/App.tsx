import  React from 'react';
import theme from './temaConfig';
import { Box } from '@material-ui/core';
import { styled, ThemeProvider } from '@material-ui/core/styles';
import { Paper } from '@mui/material';
import Navbar from './componentes/Navbar';
import CatalogoCard from './componentes/CatalogoCard';
import Grid from '@material-ui/core/Grid';
import Pagination from './componentes/Pagination';

import imagen_extintor from './imagenes/extintor1.jpg';
import imagen_cubo from './imagenes/bombero-cubo1.png';
import imagen_esclavina from './imagenes/esclavina1.jpg';
import imagen_pera from './imagenes/pera1.jpg'

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(20),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {
    return ( 
      <ThemeProvider theme={theme}>
        <Navbar/>
        <Box sx={{ flexGrow: 1 }}>
      <Grid container >
        <Grid xs={4}>
          <Item>
            AQUÍ DEBERÍA IR LA CAJA DE FILTROS
          </Item>
        </Grid>
        <Grid xs={8}>
          <Item>
             <Grid container justify = 'flex-start'>
              <Grid container spacing={10} direction= 'row-reverse' >
                <Grid item xs={8} sm= {6} md={4}>
                  <CatalogoCard
                  image = {imagen_pera}
                  name = 'PERA'
                  fire_department = 'Cuerpo de Bomberos de Achao'
                  typology = 'Herramientas y equipo'
                  century='XXI'></CatalogoCard>
                </Grid>
                <Grid item xs={8} sm= {6} md={4}>
                  <CatalogoCard
                  image = {imagen_esclavina}
                  name = 'ESCLAVINA'
                  fire_department = 'Cuerpo de Bomberos de Talca'
                  typology = 'Herramientas y equipo'
                  century='XXI'></CatalogoCard>
                </Grid>
                <Grid item xs={8} sm= {6} md={4}>
                  <CatalogoCard
                  image = {imagen_cubo}
                  name = 'CUBO'
                  fire_department = 'Cuerpo de Bomberos de Talca'
                  typology = 'Herramientas y equipo'
                  century='XXI'></CatalogoCard>
                </Grid>
                <Grid item xs={8} sm= {6} md={4}>
                  <CatalogoCard
                  image = {imagen_extintor}
                  name = 'EXTINTOR'
                  fire_department = 'Cuerpo de Bomberos de Talca'
                  typology= 'Herramientas y equipo'
                  century='XXI'></CatalogoCard>
                </Grid>
              </Grid>
           </Grid>
          </Item>
        </Grid>
      </Grid>
      <Pagination/>
    </Box>
      </ThemeProvider>
  )
}

export default App;