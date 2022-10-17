import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


interface ObjectCardProps {
  image:string,
  name:string,
  department: string,
  typology: string,
  century: string
}

interface TypographyCardProps {
  text: string
}

function ObjectCard(props: ObjectCardProps){
  return(
    <Card style={cardStyle} onClick={onClickCard}>
        <CardMedia
          component="img"
          height="179"
          image={props.image}
        />
        <CardContent>
          <TypographyCard text={props.name}/>
          <TypographyCard text={props.department}/>
          <TypographyCard text={props.typology}/>
          <TypographyCard text={props.century}/>
        </CardContent>
    </Card>
  )
}

function onClickCard(){
  console.log("hola");
}

const cardStyle: React.CSSProperties = {
  height: 295,
  width: 403,
  borderRadius: 5,
  boxShadow: '0 0 10 #000000',
  color: 'white'
}

const typographyStyle: React.CSSProperties = {
  color: 'black'
}

function TypographyCard(props: TypographyCardProps){
  return(
    <Typography style={typographyStyle}>
      {props.text}
    </Typography>
  )
}

export default ObjectCard;