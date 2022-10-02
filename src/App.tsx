import  React from 'react';
import theme from './temaConfig';
import { Box } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import Navbar from './componentes/Navbar';
import CatalogoCard from './componentes/CatalogoCard';
import FiltersBox from  './componentes/FiltersBox';
import Grid from '@material-ui/core/Grid'

function App() {
    return ( 
      <ThemeProvider theme={theme}>
        <Navbar/>
        <div style={{ width: "50%"}}>
        </div>
      </ThemeProvider>
  )
}

export default App;