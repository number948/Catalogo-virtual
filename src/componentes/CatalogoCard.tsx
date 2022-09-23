import React from "react";
import imagen_cubo from '../imagenes/bombero-cubo 1.png';
import  Card  from "@material-ui/core/Card";
import CardMedia  from "@material-ui/core/CardMedia";
import CardContent  from "@material-ui/core/CardContent";
import { Typography, Grid, Container, makeStyles } from "@material-ui/core";
import { CardActionArea } from "@mui/material";



const cardUseStyles = makeStyles(theme =>({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingButtom: theme.spacing(8),
    
  },
  Card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  CardMedia: {
    paddingTop: '56,25%'
  }
})
)


 export default function CatalogoCard( ) {
  
  const cardClasses = cardUseStyles();

  return(
      <Container className= {cardClasses.cardGrid}>
        <Grid container spacing={3}>
          <Grid item xs={3}>
          <Card  className= {cardClasses.Card} variant= 'outlined'>
            <CardActionArea>
              <CardMedia
                className= {cardClasses.CardMedia}
                component= 'img'
                height= '180'
                src = {imagen_cubo}
                alt='cubo_1'/>
                <CardContent>
                  <Typography gutterBottom variant= 'h6' component='div'>
                    Cubo
                  </Typography>
                  <Typography variant='body2' color= 'textSecondary'>
                  cuerpo de bomberos de coinco
                  Textil y vestuario
                  XIX
                  </Typography>
                </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}

