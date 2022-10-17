import React from "react";
import Paper from "@mui/material/Paper";
import MyFilter from "./MyFilter";
import Button from "@mui/material/Button";



const centuries = ["XIX", "XX", "XXI"]
const firefighters = ["Talca", "Ñuble", "Santiago"]
const typologies = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]

function MyFilters() {
        return(
         <Paper style={paperStyle}>
            <div>
                <div style={filterTitleStyle}>Filtros</div>
                <MyFilter typologies={centuries} title={"Siglo"}/>
                <MyFilter typologies={firefighters} title={"Cuerpo de Bomberos"}/>
                <MyFilter typologies={typologies} title={"Tipología"}/>
                <Button variant="text" style={buttonStyle} onClick={onClick}>Deshacer Filtros</Button>
            </div>
        </Paper>
        )
}

function onClick(){
    console.log("Soy el boton de deshacer los filtros")
}

const paperStyle:React.CSSProperties = {
    width: 421,
    backgroundColor: '#BC5C4C',
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 77
}

const filterTitleStyle = {
    fontSize: 16,
    fontFamily: "helvatica",
    fontWeight: "bold",
    color: "white",
    marginTop: 20,
    marginBottom: 22
}

const buttonStyle = {
    color: "white",
    fontSize: 16,
    fontFamily: "helvatica",
    fontWeight: "bold",
    marginBottom: 10
}

export default MyFilters;