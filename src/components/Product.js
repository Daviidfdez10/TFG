import { useState } from "react";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";
import { AddShoppingCart } from "@material-ui/icons";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";
import accounting from "accounting";


const useStyles = makeStyles((theme) => ({
  
  root: {
    backgroundColor:"#E0FFFF"
   },
  action: {
    marginTop: "0.5rem",
    color:"red"
    
  },
  media: {
     maxWidth:"100%", 
    height:200,
    justifyContent:"center",
    
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  
  expandOpen: {
    transform: "rotate(90deg)",
  },
}));

export default function Product({
  product: { id, name, productType, image, price, rating, description },
}) {
 
  const classes = useStyles();
  
  const [expanded, setExpanded] = useState(false);
  const [{ basket }, dispatch] = useStateValue();
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
console.log(basket);
  const anadir = () => {
    dispatch({
      type: actionTypes.ADD_TO_BASKET,
      item: {
        id,
        name,
        productType,
        image,
        price,
        rating,
        description,
      },
    });
  };

  return (

    <div className={classes.root}>
    
    
    <Card className={classes.card}>

      <CardHeader
        action={
          <Typography
            className={classes.action}
            variant='h6'
            
          >
            {accounting.formatMoney(price, "€")}
          </Typography>
        }
        title={name}
        subheader=''
      />
      <CardMedia className={classes.media} 
      

      image={image}
      
      title={name} />
      <CardContent>
        <Typography variant='h6' color='textSecondary' component='p'>
          {productType}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='Add to Cart' onClick={anadir}>
          <AddShoppingCart fontSize='large' />
        </IconButton>
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p>&#11088;</p>
          ))}
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label='show more'
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent>
          <Typography paragraph>{description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
    </div>

  );
  
}
