import * as React from 'react';
import imagen_cubo from '../imagenes/bombero-cubo 1.png';
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
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  CardMedia: {
    paddingTop: '56,25%'
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
          image={imagen_cubo}
          alt="cubo foto1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Cubo
          </Typography>
          <Typography variant="body2">
          cuerpo de bomberos de Achao
          herramientas y equipo
          XXI
        </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Container>
  );
}
