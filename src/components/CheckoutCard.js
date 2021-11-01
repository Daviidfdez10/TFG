import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import accounting from 'accounting'
import { actionTypes } from "../reducer";
import { useStateValue } from "../StateProvider";
import DeleteIcon from '@material-ui/icons/Delete'


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    justifyItems:"center",
      [theme.breakpoints.up('sm')]: {
      
        
      },
  },
  action: {
    marginTop: "1rem",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
 cardActions: {
display: "flex",
justifyContent: "space-between",

textAlign: "center",

 },
    cardRating:{
     /*  backgroundColor:"gray", */
        display:"flex"
    } 

}));

export default function CheckoutCard({product : {id , name, productType, image, price, rating, description}}) {
  const classes= useStyles();
  const [{ basket }, dispatch] = useStateValue();

 console.log(basket);


  const removeItem = () => dispatch(
    {
      type: actionTypes.REMOVE_ITEM,
      id
    }
  )
   
  return (
    <Card className={classes.root}>
      <CardHeader
      
        action={
          <Typography
           className={classes.action}
           color="gray" 
           variant='h5'>
              {accounting.formatMoney(price,"€")}
            </Typography>
        }
        title={name}
        
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
        title={name}
      />
     
     
      <CardActions disableSpacing className={classes.cardActions}>
       <div className={classes.cardRating}>
       {Array(rating).fill().map((_,i)=>(<p>&#11088;</p>))}
       </div>
      <IconButton>
      <DeleteIcon fontSize="large" onClick={removeItem}/>
      </IconButton>
      </CardActions>
    
    </Card>
  );
}
