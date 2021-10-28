import './App.css';
import CheckoutPage from './components/CheckoutPage';
import Navbar from './components/Navbar';

import Signin from './components/Signin';
import Products from './components/Products';
import {Switch,BrowserRouter as Router,Route} from "react-router-dom";
import SignUp from './components/Signup';
import { useEffect } from 'react';
import { auth } from './firebase';
import { actionTypes } from './reducer';
import { useStateValue } from "./StateProvider";
import Checkout from './components/CheckoutForm/Checkout';
import Footer from './footer';
import ProductsTennis from './components/ProductTennis';
import ProductsPadel from './components/ProductPadel';
import ProductsSale from './components/ProductSale';


function App() {
  
  const [{ user }, dispatch] = useStateValue();
  useEffect(()=>{
  auth.onAuthStateChanged((authUser)=>{
    console.log(authUser);
  
    if(authUser){
      dispatch({
          type:actionTypes.SET_USER,
          user:authUser,
      });
     } else {
        dispatch({
        type:actionTypes.SET_USER,
        user:null,
        });

      
    }
  });
  console.log(user);
}, []);
return (
  <Router>
    <div className='app'>
      <Navbar />
      <Switch>
      <Route path='/product-sale'>
          <ProductsSale />
        </Route>
      { <Route path='/product-padel'>
          <ProductsPadel />
        </Route> }
      { <Route path='/product-tennis'>
          <ProductsTennis />
        </Route> }
        <Route path='/signup'>
          <SignUp />
        </Route>
        <Route path='/signin'>
          <Signin />
        </Route>
        <Route path='/checkout-page'>
          <CheckoutPage />
        </Route>
        <Route path='/checkout'>
          <Checkout />
        </Route>
        <Route path='/'>
          <Products />
        </Route>
      </Switch>
      <Footer />
    </div>
    
  </Router>
 

);
}

export default App;
