import { Button,Grid, Typography } from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";
import AddressInput from "./AddressInput";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";

import { actionTypes } from "../../reducer";


const useStyles = makeStyles((theme) => ({
  letra: {

      textAlign:"center",
  
      /* backgroundColor:"#FFF5EE", */
    
     
    /* backgroundColor:"#FFF5EE", */
  },
}));


const AddressForm = ({ nextStep }) => {
  const classes= useStyles();
    const methods= useForm();
    const [{ shippingData }, dispatch] = useStateValue();
    const emailRegex = RegExp(
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );
    console.log(shippingData);
    return (
        <div className={classes}>
            <Typography variant='h5' gutterBottom className={classes.letra}>

                Direccion de envio
            </Typography>
            <FormProvider {...methods}>
            <form
            
           
          onSubmit={methods.handleSubmit((data) => {
            dispatch({
              type: actionTypes.SET_SHIPPINGDATA,
              shippingData: data,
            });
            nextStep();
          })}
        >
           <Grid container spacing={3} className={classes.root}>
            
            <AddressInput required name="firstName" label="Primer nombre"/>
            <AddressInput required name='lastName' label='Apellidos' />
            <AddressInput required name='address1' label='Direccion' />
            <AddressInput required name='email' label='Email' value={emailRegex} />
            <AddressInput required name='city' label='Ciudad' />
            <AddressInput required name='postCode' label='C.P' />
                </Grid>
                <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "1rem",
              
            }}>
                 <Button component={Link} to='/checkout-page' variant='outlined'>
              Volver
            </Button>
            <Button type='submit' variant='contained' color='primary'>
              Siguiente
            </Button>
                </div>
                </form>
            </FormProvider>
          
            
        </div>
    )
}

export default AddressForm