import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { Badge, Button } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import de from '../assets/de.png'
import logo from '../assets/logo.png'
import React from "react";
import { useStateValue } from "../StateProvider";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { actionTypes } from "../reducer";


const useStyles = makeStyles((theme) => ({
  root: {
    textAlign:"center",
    marginBottom: "7rem",
    [theme.breakpoints.up('sm')]: {
      
      
    },
  },
  appBar: {
    backgroundColor: "black",
    display:"flex",
  
    flexDirection:"column",
    alignItems:"center",
    [theme.breakpoints.up('sm')]: {
      display:"flex",
      flexDirection:"row",
      paddingLeft:"15px",
      
    },
    
  },
  tennis:{
    color:"white",
    height:"20px",
    [theme.breakpoints.up('sm')]: {
      paddingLeft:"30px",
    },
    
  },
  menuButton: {
   /*  color:"white", */
  },
  grow: {
    flexGrow: 1,
    
  },
  button: {
    marginLeft: theme.spacing(4),
  },
  image: {
    marginRight: "10px",
    height:"40px",
    paddingLeft:"25px",
    marginTop:"9px",
    [theme.breakpoints.up('sm')]: {
      paddingLeft:"30px",
    },
    
  },
  link:{
    textDecoration:"none"
  },
  iniciar:{
    color:"white",
    textDecoration:"none",
    borderColor:"white",
    
  }
}));



export default function Barra() {
 
  const classes= useStyles();
  const history = useHistory();
  const [{ basket ,user}, dispatch] = useStateValue();

  const handleAuth= ()=>{
    if (user){
      auth.signOut();
      dispatch({
        type: actionTypes.EMPTY_BASKET,
        basket: [],

      });
      dispatch({
        type: actionTypes.SET_USER,
        user:null
      });
      history.push("/");
    }
  }

  return (
    <div className={classes.root}>

    <AppBar collapseOnSelect fixed='top' expand='sm' bg='dark' variant='dark' className={classes.appBar}>
      
          <Link to="/">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <img
                  alt="description"
                  src={logo}
                  className={classes.image}
                  
                />
              </IconButton>
              </Link>
              <Link to="product-tennis" className={classes.link}>
              <Typography variant="h6"  component="p" className={classes.tennis} >
                Tenis
              </Typography>
              </Link>
            
              <Link to="product-padel" className={classes.link}>
              <Typography variant="h6"  component="p" className={classes.tennis}>
                Padel
              </Typography>
              </Link>
              <Link to="product-sale" className={classes.link}>
              <Typography variant="h6"  component="p" className={classes.tennis}>
                Ofertas
              </Typography>
              </Link>
            
            
              <div className={classes.grow}/>
            
              
          
            
              <Typography variant="h6" color="textWhite" component="p">
                Bienvenido {user ? user.email : "Anónimo"}
              </Typography>
              <div className={classes.button}>
                <Link to="/signin">
                <Button variant="outlined" onClick={handleAuth} className={classes.iniciar}>
                <div className={classes.iniciar}>{user ? "Cerrar sesion": "Iniciar sesion"}</div>
                </Button>
                   </Link>
                
                <Link to="checkout-page">
                  <IconButton aria-label="show cart items" color="inherit">
                  <Badge badgeContent={basket?.length} color="secondary">
                  <ShoppingCart fontSize="large" color="secondary"/>
                  </Badge>
                
                </IconButton>
             </Link>
                 
                

              </div>
          
      </AppBar>
      
    </div>
  );
};
