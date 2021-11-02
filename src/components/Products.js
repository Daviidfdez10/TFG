import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import React from "react";
import Product from "./Product";
import products from "../product-data";
import { textAlign } from "@mui/system";
import femenina from '../assets/femenina.jpg'
import murray from '../assets/murray.jpg'
import banner from '../assets/banner.jpg'
import djokovic from '../assets/djokovic.jpg'
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
      maxWidth:"100%",
    
      
    },
    centrado:{
      position:"absolute",
      top:"60%",
      left:"10%",
      transform: "translate(-50%, -50%)",
      fontSize:"10px",
      color:"white",
      fontWeight:"bold",
      [theme.breakpoints.up('sm')]: {
        paddingTop:"10px",
        fontSize:"30px",
      },
    },
   
    flex : {
      display:"flex",
      flexDirection:"row",
    },

    enlace : {
      backgroundColor:"white",
      color:"black",
      padding:"2px 5px",
      textDecoration:"none",
      borderRadius:"5px",
      border:"2px solid black"

    },
   banner : {
      maxWidth:"100%", 
   
     [theme.breakpoints.up('sm')]: {
      maxWidth:"100%",
   
    },
   }
   
  }));

  export default function Products(){
      const classes= useStyles();



      return (
          <div className={classes.root}>
          <h1
             style={{ color: "white",
             textAlign: "center",
             fontSize:50,
             marginTop: "-50px" }}
            
             
            > </h1>
                  <Carousel>
                <div>
                    <img src={djokovic} 
                    alt="description"
                       className={classes.image}
                       />
                   
                      <div className={classes.centrado}>Novak djokovic <br/>Nº1 ATP <br />
                      <a className={classes.enlace} href="https://www.atptour.com/es/rankings/singles" target="_blank">Ver ranking</a>
                      
                      </div>
                                        
                </div>
                <div>
                <img src={femenina}
                alt="description"
                 className={classes.image}
                  />
                     <div className={classes.centrado}>Alexander Zverev<br/>Nº4 ATP <br />
                     <a className={classes.enlace} href="https://www.atptour.com/es/rankings/singles" target="_blank">Ver ranking</a>

                     </div>
                </div>
                <div>
                <img src={murray} 
                alt="description"
                 className={classes.image}/>
                <div className={classes.centrado}>Marin Cilic<br/>Nº35 ATP <br />
                <a className={classes.enlace} href="https://www.atptour.com/es/rankings/singles" target="_blank">Ver ranking</a>

                </div>
                </div>
            </Carousel>
            <h1
             style={{ color: "black",
             textAlign: "center",
             
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
              <Grid item xs={12} sm={12} md={12} lg={12}>
              <a href="https://ciclos.iesruizgijon.es/" title="Subscripcion prime" target="_blank">
              <img src={banner}
              
                    alt="description"
                       className={classes.banner}
                       />
                        
</a>
                    </Grid>
           

          </div>
      );
  }