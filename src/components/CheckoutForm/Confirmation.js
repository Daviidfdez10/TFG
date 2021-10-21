import { Button, Divider, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const  generateRandomString = (num) => {
  const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result1= Math.random().toString(36).substring(num);       

  return result1;
}



const Confirmation = ({ message }) => {
    console.log(message);
  return (
    <>
      <div>
        <Typography variant='h6'>{message}</Typography>
        <br />
        <Divider />
        <br />
        <Typography variant='subtitle2' gutterBottom>
          {message === "Pagado correctamente"
            ? "Direccion de envio :"+ generateRandomString(1)
            : ""}
        </Typography>
      </div>
      <br />
      <Button component={Link} to='/' variant='outlined' type='button'>
        Volver a la página principal
      </Button>
    </>
  );
};

export default Confirmation;