import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import React from "react";
import Product from "./Product";
import products from "../product-data";
import { textAlign } from "@mui/system";
import oromana from '../assets/oromana.jpeg'
import torneo2 from '../assets/torneo2.jpeg'
import david from '../assets/david.jpeg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding:theme.spacing(3),
      paddingTop:"200px",
      [theme.breakpoints.up('sm')]: {
        paddingTop:"10px"
        
      },
    },
    orden : {
    
      marginTop:"20px"
    },
    image:{
      maxWidth:1500,
      
    },
    image2:{
      maxWidth:1000,
      
    },
   
    flex : {
      display:"flex",
      flexDirection:"row",
    }
   
  }));

  export default function Products(){
      const classes= useStyles();



      return (
          <div className={classes.root}>
          <h1
             style={{ color: "black",
             textAlign: "center",
             fontSize:50,
             marginTop: "-10px" }}
            
             
            >Fotos de torneos ganados </h1>
                  <Carousel>
                <div>
                    <img src={david} 
                    alt="description"
                       className={classes.image}/>
                  
                </div>
                <div>
                <img src={torneo2}
                alt="description"
                 className={classes.image}
                  />
                </div>
                <div>
                <img src={oromana} 
                alt="description"
                 className={classes.image2}/>
                </div>
            </Carousel>
            <h1
             style={{ color: "black",
             textAlign: "center",
             fontSize:50,
             marginTop: "-10px" }}
            
             
            >Lo más destacado </h1>
              <Grid  container spacing={2} className={classes.orden}>
                {
                  
                  products.map(product=>(
                    
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Product key={product.id} product={product}/>
                    </Grid>
                  ))
                }
              


            
              </Grid>
             
          </div>
      );
  }