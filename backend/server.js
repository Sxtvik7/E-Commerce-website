import express from 'express';
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
dotenv.config();
import connectDB from './config/db.js';
import productsRoute from './routes/productRouts.js'
import userRoute from './routes/userRoutes.js'
import { errorHandler, notFound } from './middleware/errorMiddleware.js';
const port = process.env.PORT;

 connectDB();

const app = express();

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Cookie Parser Middleware
app.use(cookieParser)

app.get('/' , (req, res)=>{
    res.send("Hello World");
})

app.use('/api/products', productsRoute);
app.use('/api/users', userRoute);

app.use(notFound)
app.use(errorHandler)

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})