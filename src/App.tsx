import  React from 'react';
import theme from './temaConfig';
import { ThemeProvider } from '@material-ui/core/styles';
import Navbar from './componentes/Navbar';
import CatalogoCard from './componentes/CatalogoCard';

function App() {
    return ( 
      <ThemeProvider theme={theme}>
        <Navbar></Navbar>
        <CatalogoCard></CatalogoCard>
      </ThemeProvider>
  )
}

export default App;