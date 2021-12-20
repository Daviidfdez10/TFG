import Review from "../CheckoutForm/Review";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js"; //trae stripe
import {
  Typography,
  Button,
  Divider,
  CircularProgress,
} from "@material-ui/core";
import { useState } from "react";
import { useStateValue } from "../../StateProvider";
import accounting from "accounting";
import { actionTypes, getBasketTotal } from "../../reducer";
import axios from "axios";

const stripePromise = loadStripe(
  "pk_test_51JltQrBBXV6mtNTgOaV8DMVz6yDjevzcjo4YZYpifvUAm7DYS6DWOVLzz9qgw8AXzOg782sjrXl5DsdMtHVzhzOZ00kWMwlTYz"
);

const useStyles = makeStyles((theme) => ({
  root: {
      height:"41.3vh"
    
  },
}));

const CARD_ELEMENT_OPTIONS = {
  iconStyle: "solid",
  hidePostalCode: true,
  style: {
    base: {
      iconColor: "rgb(240, 57, 122)",
      color: "#333",
      fontSize: "18px",
      "::placeholder": {
        color: "#ccc",
      },
    },
    invalid: {
      color: "#e5424d",
      ":focus": {
        color: "#303238",
      },
    },
  },
};

const CheckoutForm = ({ backStep, nextStep }) => {
  const [{ basket }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const classes= useStyles();

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //el hook useStripe nos devuelve la conexión a stripe.
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement), //CardElement es el formulario de la tarjeta. Así capturamos los números tecleados.
    });
    setLoading(true);  //puedo enviar el método de pago, pero todavía no sé que es lo que estoy pagando.
    if (!error) {
      const { id } = paymentMethod; //solo me interesa el id de paymentMethod
      try {
     const p="Pagado correctamente";
        dispatch({
          type: actionTypes.SET_PAYMENT_MESSAGE,
          p
        });
        if (p === "Pagado correctamente") {
          dispatch({
            type: actionTypes.EMPTY_BASKET,
            basket: [],
          });
        }
        elements.getElement(CardElement).clear();
        nextStep();
      } catch (error) {
        console.log(error);
        nextStep();
      }
      setLoading(false); 
    }
  };

  return (
    <form onSubmit={handleSubmit} className={classes.root}>
      <CardElement options={CARD_ELEMENT_OPTIONS} />
      <div 
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "1rem",
        }}
      >
        <Button onClick={backStep} variant="outlined">
          Volver
        </Button>
        <Button
          type="submit"
          disabled={!stripe}
          variant="contained"
          color="primary"
        >
         
          
         {loading ? (
            `Pagar ${accounting.formatMoney(getBasketTotal(basket), "€")}`
          ) : (
            `Pagar ${accounting.formatMoney(getBasketTotal(basket), "€")}`
          )}
          
        </Button>
      </div>
    </form>
  );
};

const PaymentForm = ({ backStep, nextStep }) => {
  return (
    <>
      <Review />
      <Divider />
      <Typography variant="h6" gutterBottom style={{ margin: "20px 0" }}>
        Métodos de pago
      </Typography>
      <Elements stripe={stripePromise}>
        {/* permite acceder al objeto Stripe desde sus hijos */}
        <CheckoutForm backStep={backStep} nextStep={nextStep} />
        {/* Formulario de pago */}
      </Elements>
    </>
  );
};

export default PaymentForm;
