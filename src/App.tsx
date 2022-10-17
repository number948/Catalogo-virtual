import  React from 'react';
import theme from './temaConfig';
import { Box } from '@material-ui/core';
import { styled, ThemeProvider } from '@material-ui/core/styles';
import { Paper } from '@mui/material';
import Navbar from './componentes/Navbar';
import CatalogoCard from './componentes/CatalogoCard';
import ObjectCard from './componentes/ObjectCard';
import Grid from '@material-ui/core/Grid';
import Pagination from './componentes/Pagination';

import imagen_extintor from './imagenes/extintor1.jpg';
import imagen_cubo from './imagenes/bombero-cubo1.png';
import imagen_esclavina from './imagenes/esclavina1.jpg';
import imagen_pera from './imagenes/pera1.jpg'
import MyFilters from './componentes/MyFilters';
import Catalogue from './componentes/CatalogueBody';

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
          <Grid container>
            <Grid xs={3}>
            <MyFilters/>
            </Grid>
            <Grid container xs={9}>
            <Catalogue/>
            </Grid>
          </Grid>

        </Box>
        {/* <Box sx={{ flexGrow: 1 }}>
      <Grid container >
        <Grid xs={4}>
          <Item elevation= {0}>
            <MyFilters/>
          </Item>
        </Grid>
        <Grid xs={8}>
          <Item elevation= {0}>
             <Grid container justify = 'flex-start'>
              <Grid container spacing={10} direction= 'row-reverse' >
                <Grid item xs={8} sm= {6} md={4}>
                  <ObjectCard
                  image = {imagen_pera}
                  name = 'PERA'
                  department = 'Cuerpo de Bomberos de Achao'
                  typology = 'Herramientas y equipo'
                  century='XXI'></ObjectCard>
                </Grid>
                <Grid item xs={8} sm= {6} md={4}>
                  <ObjectCard
                  image = {imagen_esclavina}
                  name = 'ESCLAVINA'
                  department = 'Cuerpo de Bomberos de Talca'
                  typology = 'Herramientas y equipo'
                  century='XXI'></ObjectCard>
                </Grid>
                <Grid item xs={8} sm= {6} md={4}>
                  <ObjectCard
                  image = {imagen_cubo}
                  name = 'CUBO'
                  department = 'Cuerpo de Bomberos de Talca'
                  typology = 'Herramientas y equipo'
                  century='XXI'></ObjectCard>
                </Grid>
                <Grid item xs={8} sm= {6} md={4}>
                  <ObjectCard
                  image = {imagen_extintor}
                  name = 'EXTINTOR'
                  department = 'Cuerpo de Bomberos de Talca'
                  typology= 'Herramientas y equipo'
                  century='XXI'></ObjectCard>
                </Grid>
              </Grid>
           </Grid>
          </Item>
        </Grid>
      </Grid>
      <Pagination/>
    </Box> */}
      </ThemeProvider>
  )
}

export default App;