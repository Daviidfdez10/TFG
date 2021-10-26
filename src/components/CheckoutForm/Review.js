import { Typography, List, ListItem, ListItemText } from "@material-ui/core";
import React from "react";
import { useStateValue } from "../../StateProvider";
import { getBasketTotal } from "../../reducer";
import accounting from "accounting";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  letra: {
    textAlign:"center",

    /* backgroundColor:"#FFF5EE", */
  },
 
}));
const Review = () =>{
  const [{ basket }, dispatch] = useStateValue();
  const classes= useStyles();
  console.log(dispatch);
  return (
    <>
      <Typography variant='h6' gutterBottom className={classes.letra}>

        Resumen del pedido
      </Typography>

      <List disablePadding className={classes.texto}>
      {basket?.map((product) => (
          <ListItem style={{ padding: "10px 0" }} key={product.name}>
            <ListItemText primary={product.name} secondary={`Cantidad: ${1}`} />
            <Typography variant='body2'>
              {accounting.formatMoney(product.price, "€")}
            </Typography>
          </ListItem>
        ))}
        <ListItem style={{ padding: "10px 0" }}>
          <ListItemText primary='Total' />
          <Typography variant='subtitle1' style={{ fontWeight: 800 }}>
            {accounting.formatMoney(getBasketTotal(basket), "€")}
          </Typography>
        </ListItem>
     
      </List>
    </>
  )
}

export default  Review