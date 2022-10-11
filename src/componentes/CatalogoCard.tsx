import * as React from 'react';
import imagen_extintor from '../imagenes/extintor 1.jpg';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Container, makeStyles } from '@material-ui/core';
import theme from '../temaConfig';

const cardUseStyles = makeStyles(theme =>({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingButtom: theme.spacing(8),
  },
  Card: {
    height: '80%',
    display: 'flex',
    flexDirection: 'column'
  },
  CardMedia: {
    paddingTop: '56,25%', 
    width: '105px',
    height: '140px'
    //si quieres que foto se vea completa cambiar width y height a 100% cada uno
   
  },
  CardContent: {
    paddingTop: '36,25%',
  
}
}))

export default function ActionAreaCard() {
  const cardClasses = cardUseStyles();
  return (
    <Container className= {cardClasses.cardGrid}>
    <Card sx={{ maxWidth: 345}}>
      <CardActionArea>
        <CardMedia
          className= {cardClasses.CardMedia}
          component="img"
          height="140"
          image={imagen_extintor}
          alt="extintor foto1"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Extintor
          </Typography>
          <Typography variant="body2">
          cuerpo de bomberos de Achao
        </Typography>
        <Typography variant= "body2">
        herramientas y equipo
        </Typography>
        <Typography variant= "body2">
        XXI
        </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Container>
  );
}
