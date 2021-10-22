import { getBasketTotal } from "../reducer";
import React from "react";
import accounting from "accounting";
import {Button, makeStyles } from "@material-ui/core";
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
   marginTop:"2rem",
}
}))
const Total = () =>{
    const [{ basket }, dispatch] = useStateValue();
    const classes= useStyles()
    console.log(dispatch);
    return (
        <div className={classes.root}>
            <h5>Total:{basket?.length} </h5>
            <h4>{accounting.formatMoney(getBasketTotal(basket), "€")}</h4>
            <Button
        component={Link}
        to='/checkout'
        className={classes.button}
        variant='contained'
        color='secondary'
      >
        Comprar
      </Button>
        </div>
    )
}

export default Total