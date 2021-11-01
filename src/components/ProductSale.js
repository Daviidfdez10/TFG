import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import React from "react";
import Product from "./Product";
import products from "../product-data-sale";
import banner from '../assets/banner.jpg';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding:theme.spacing(3),
    paddingTop:"200px",
    [theme.breakpoints.up('sm')]: {
      paddingTop:"10px"
      
    },
  },
  banner : {
    maxWidth:"490px", 
 
   [theme.breakpoints.up('sm')]: {
    maxWidth:"100%",
    paddingLeft:"80px",
  }
}
 
}));

  export default function ProductsSale(){
      const classes= useStyles();



      return (
          <div className={classes.root}>
             <h1
             style={{ color: "black",
             textAlign: "center",
             fontSize:50,
             marginTop: "-10px" }}
            
             
            >Ofertas </h1>
              <Grid  container spacing={2}>
                {
                  
                  products.map(product=>(
                    
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Product key={product.id} product={product}/>
                    </Grid>
                  ))
                }
              


            
              </Grid>
              <a href="https://ciclos.iesruizgijon.es/" title="Subscripcion prime" target="_blank">
              <img src={banner}
              
                    alt="description"
                       className={classes.banner}
                       />
</a>
          </div>
      );
  }