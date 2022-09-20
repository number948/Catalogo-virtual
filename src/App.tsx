import  React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './temaConfig';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Navbar from './componentes/Navbar';



function App() {



  return ( 
   
      <ThemeProvider theme={theme}>
        
        <Navbar/>

    </ThemeProvider>
  )
}

export default App;