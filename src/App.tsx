import  React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './temaConfig';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import Navbar from './componentes/Navbar';
import Searchbar from './componentes/Searchbar';
import Objects_box from './componentes/Objects_box';




function App() {



  return ( 
   
      <ThemeProvider theme={theme}>
        
        <Navbar/>
        <Objects_box/>


    </ThemeProvider>
  )
}

export default App;