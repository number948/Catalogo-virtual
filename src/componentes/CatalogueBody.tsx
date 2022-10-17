import Grid from '@mui/material/Grid';
import React from 'react';
import ObjectCard from './ObjectCard';
import imagen_pera from '../imagenes/pera1.jpg'
import Box from '@mui/material/Box';


function Catalogue(){
  return(
    <Grid container justifyContent = "flex-start">
    <Grid xs={6}>
    <ObjectCard
      image = {imagen_pera}
      name = 'PERA'
      department = 'Cuerpo de Bomberos de Achao'
      typology = 'Herramientas y equipo'
      century='XXI'/>
    </Grid>
     <Grid xs={6}>
     <ObjectCard
      image = {imagen_pera}
      name = 'PERA'
      department = 'Cuerpo de Bomberos de Achao'
      typology = 'Herramientas y equipo'
      century='XXI'/>
     </Grid>
     </Grid>
  )
}

export default Catalogue;