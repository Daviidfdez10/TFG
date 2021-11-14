import { getBasketTotal } from "../reducer";
import React from "react";
import accounting from "accounting";
import {Button, makeStyles, Typography } from "@material-ui/core";
import { useStateValue } from "../StateProvider";
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme)=>({
root:{
    display:"block",
    flexDirection:"column",
    justifyContent:"start",
    alignItems:"start",
    height:"52.1vh"
},
button:{
   marginTop:"12.15rem",
   
},
  letras: {
    textAlign:"center"
  }
}))
const Total = () =>{
    const [{ basket }, dispatch] = useStateValue();
    const classes= useStyles()
    console.log(dispatch);
    const g=basket?.length;
    if(g===0){
      return (
        <div>
        <Typography  className={classes.letras}>
        <h2>Total:{g} </h2>
        </Typography>
        
        <Button
        component={Link}
        to='/'
        className={classes.button}
        variant='contained'
        color='dark'
        
      >
   
        Volver
      </Button>
      </div>
      )
    } else {

    
 
      return (
        <div className={classes.root}>
          
            <h5>Total:{g} </h5>
            <h4>{accounting.formatMoney(getBasketTotal(basket), "€")}</h4>
            <Button
        component={Link}
        to='/checkout'
        className={classes.button}
        variant='contained'
        color='dark'
        
      >
        Comprar
      </Button>
      
        </div>
        
    )
      }
}

export default Total