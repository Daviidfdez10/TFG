import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { Badge, Button } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import de from '../assets/de.png'
import React from "react";
import { useStateValue } from "../StateProvider";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { actionTypes } from "../reducer";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "7rem",

  },
  appBar: {
    backgroundColor: "black",
    color:"white",
    boxShadow: "none",

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
    height:"4rem"
    
  },
}));
export default function Navbar() {
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

    <AppBar position='fixed' className={classes.appBar}>
      <Toolbar>
          <Link to="/">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <img
                  alt="description"
                  src={de}
                  className={classes.image}
                />
              </IconButton>
              </Link>
            
              <div className={classes.grow}/>
            
              
          
            
              <Typography variant="h6" color="textWhite" component="p">
                Bienvenido {user ? user.email : "Anónimo"}
              </Typography>
              <div className={classes.button}>
                <Link to="/signin">
                <Button variant="outlined" onClick={handleAuth} color="secondary">
                <strong>{user ? "Cerrar sesion": "Iniciar sesion"}</strong>
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
        </Toolbar>      
      </AppBar>
      
    </div>
  );
};
