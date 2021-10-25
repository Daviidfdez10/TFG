import { json } from "express";
import Stripe from "stripe";
const stripe = new Stripe("sk_test_51JltQrBBXV6mtNTgMqty15e2yLQoaYqMg8z547x8VoKe12kBQcYhx9vGXZG4cM8tuY3klqvxD71LAGc4y5rnS6HW00kEnVT3FY");
import cors from "cors";


const app = express();

//middleware

app.use(cors({ origin: "http://localhost:3000" }));
app.use(json());


//lo que llega procedente del frontend.
app.post("/api/checkout", async (req, res) => {
    console.log(req.body);
    const {id,amount}=req.body;

    try{
      
      const payment = await stripe.paymentIntents.create({
        amount,
        currency: "EUR",
        description: "Cesta de productos",
        payment_method: id,
        confirm: true,
      });
      console.log(payment);

      return res.status(200).json({message:"Pagado correctamente"})
    } catch (error)
     {
       return res.json({message:error.raw.message})
    }
    
  });
  
app.listen(3001, () => {
    console.log("Server on port", 3001);
  });