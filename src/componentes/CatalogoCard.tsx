import  React from 'react';
import App from "../App";
import imagen_extintor from '../imagenes/extintor 1.jpg';
import imagen_cubo from '../imagenes/bombero-cubo 1.png' 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Container, makeStyles } from '@material-ui/core';
import theme from '../temaConfig';

export default function ActionAreaCard(props: CardProps ) {
  const cardClasses = cardUseStyles();
  return (
    <Container className= {cardClasses.cardGrid}>
    <Card sx={{ maxWidth: 345}}>
      <CardActionArea>
        <CardMedia
          className= {cardClasses.CardMedia}
          component="img"
          height="120"
          src={props.image}
          alt="bomberos-fotos"
        />
        <CardContent
        className={cardClasses.CardContent}>
          <div className='contenedor-contenido'>
          <p className='name-card'>{props.name}</p>
          <p className='cuerpo-bomberos-card'>{props.fire_department}</p>
          <p className='tipologia-card'>{props.typology}</p>
          <p className='siglo-card'>{props.century}</p>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
    </Container>
  );
}

interface CardProps {
  image: string;
  name : string;
  fire_department: string;
  typology : string;
  century: string;
}

const cardUseStyles = makeStyles(theme =>({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingButtom: theme.spacing(8),
  },
  Card: {
    maxWidth:300,
    margin: "auto",
    display: 'flex',
    flexDirection: 'column'
  },
  CardMedia: {
    paddingTop: '5%',
    paddingBottom: '5%' //hace que empiezen de mas abajo las tarjetas
    //si quieres que foto se vea completa cambiar width y height a 100% cada uno
   
  },
  CardContent: {
    paddingTop: '10%',
    fontFamily:'helvatica',
    fontWeight: 'normal',
    lineHeight: 1.0,
    fontSize: 16
  }
}))