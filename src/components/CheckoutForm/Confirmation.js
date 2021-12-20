import { Button, Divider, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { padding } from "@mui/system";

const  generateRandomString = (num) => {
  let result1= Math.random().toString(36).substring(num);       
  return result1.slice(1,-1).toLocaleUpperCase();
}
const useStyles = makeStyles((theme) => ({
  letra: {
    textAlign:"center",

    /* backgroundColor:"#FFF5EE", */
  },
  boton : {
    float:"center",
    padding:"7px 20px",
  }
}));



const Confirmation = ({ message }) => {
  const classes= useStyles();

    console.log(message);
    message="Pagado correctamente";
  return (
    <>
      <div>
        <Typography variant='h6' className={classes.letra} >{message} </Typography>
        <br />
        <Divider />
        <br />
        <Typography variant='subtitle2' gutterBottom  className={classes.letra}>
          { message } <br />
             { "Direccion de envio :"+ generateRandomString(1)+
             ""}
        </Typography>
      </div>
      <br />
      <Button component={Link} to='/' variant='outlined' type='button' className={classes.boton}>
        Volver a la página principal
      </Button>
    </>
  );
};

export default Confirmation;