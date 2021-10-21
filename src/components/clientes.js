/* import { useEffect, useState } from "react";
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
import { AddShoppingCart, AssessmentTwoTone } from "@material-ui/icons";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";
import { auth } from "../firebase";




const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginBottom: "7rem",
    },
    appBar: {
      backgroundColor: "lightblue",
      boxShadow: "none",
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
  export default function Clientes() {
    const [{ user }, dispatch] = useStateValue();
    useEffect(()=>{
      auth.onAuthStateChanged((authUser)=>{
        console.log(authUser);
        if(authUser){
          dispatch({
              type:actionTypes.SET_USER,
              user:authUser,
          })
        }
      })
    },[])
    return (


    
        
    );};  


 */