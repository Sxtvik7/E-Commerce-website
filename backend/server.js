import express from 'express';
import dotenv from 'dotenv'
dotenv.config();
import connectDB from './config/db.js';
import productsRoute from './routes/productRouts.js'
import { errorHandler, notFound } from './middleware/errorMiddleware.js';
const port = process.env.PORT;

 connectDB();

const app = express();

app.get('/' , (req, res)=>{
    res.send("Hello World");
})

app.use('/api/products', productsRoute);

app.use(notFound)
app.use(errorHandler)

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})