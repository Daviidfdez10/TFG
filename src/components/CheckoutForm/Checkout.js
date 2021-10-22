import {
  Stepper,
  Step,
  StepLabel,
  Typography,
  CssBaseline,
} from "@material-ui/core";


import { useState } from "react";
import useStyles from "./styles";

import { useStateValue } from "../../StateProvider";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Confirmation from "./Confirmation";

const steps = ["Direccion de envio", "Detalles de pago"];



const Checkout = () => {
  const classes= useStyles();
  const [activeStep, setActivestep] = useState(0);
  const [{ paymentMessage }, dispatch] = useStateValue();

  const nextStep = () => setActivestep((prevActivestep) => prevActivestep + 1);
  const backStep = () => setActivestep((prevActivestep) => prevActivestep - 1);

  const Form = () =>
    activeStep === 0 ? (
      <AddressForm nextStep={nextStep} />
    ) : (
      <PaymentForm backStep={backStep} nextStep={nextStep} />
    );
    console.log(dispatch);
  return (
    <>
      <CssBaseline />
      <main className={classes.layout}>
       
          <Typography component='h1' variant='h4' align='center'>
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((step) => (
              <Step key={step}> 
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {
            activeStep === steps.length ? (<Confirmation  message={paymentMessage}/>) : (  <Form/>)
          }
     
      
      </main>
    </>
  );
};

export default Checkout;
