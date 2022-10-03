import  React from 'react';
import theme from './temaConfig';
import { Box } from '@material-ui/core';
import { styled, ThemeProvider } from '@material-ui/core/styles';
import { Paper } from '@mui/material';
import Navbar from './componentes/Navbar';
import CatalogoCard from './componentes/CatalogoCard';
import FiltersBox from  './componentes/FiltersBox';
import Grid from '@material-ui/core/Grid'
import Pagination from './componentes/Pagination'


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'rgba(188, 92, 76, 1)',
  ...theme.typography.h4,
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
        <Grid xs={5}>
          <Item>
            AQUÍ DEBERÍA IR LA CAJA DE FILTROS
          </Item>
        </Grid>
        <Grid xs={7}>
          <Item>
             <Grid container justify = 'flex-start'>
              <Grid container spacing={8} direction= 'row-reverse' justify='center' >
                <Grid item xs={8} sm= {6} md={4}>
                  <CatalogoCard></CatalogoCard>
                </Grid>
                <Grid item xs={8} sm= {6} md={4}>
                  <CatalogoCard></CatalogoCard>
                </Grid>
                <Grid item xs={8} sm= {6} md={4}>
                  <CatalogoCard></CatalogoCard>
                </Grid>
                <Grid item xs={8} sm= {6} md={4}>
                  <CatalogoCard></CatalogoCard>
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