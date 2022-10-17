import React from "react";
import {Card, Link, List, ListItemText, Typography} from "@mui/material";

interface MyFilterProps {
    title: string,
    typologies: string[]
}

function MyFilter(props: MyFilterProps){
    return(
            <List style={{textAlign: "start"}}>
            <div style={titleStyle}>
                {props.title}
            </div>
            <Card style= {cardStyle}>
                <List>
                    {props.typologies.map(e =>
                        <ListItemText onClick={()=>onClick(e)}
                        primary={<Typography style={itemStyle}>{e}</Typography>}
                        />

                    )}
                </List>
            </Card>
        </List>
   
)}




function onClick(e: string) {
    console.info("I'm a button. "+e);
}

const itemStyle = {fontFamily: "helvatica", fontSize: 15, fontWeight: "bold"}

const titleStyle = {
    fontSize: 15,
    fontWeight: "bold",
    paddingBottom: 8,
    color: "white",
    fontFamily: "helvatica"
}

const cardStyle:React.CSSProperties = {
    width: 320,
    maxHeight: 195,
    overflow: 'auto',
    textAlign: "start",
    paddingLeft: 10,
    marginBottom: 20
}


export default MyFilter;