import path from 'path'
import morgan from 'morgan'
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js'
import productRoutes from './routes/productRoute.js';
import userRoutes from './routes/userRoute.js';
import orderRoutes from './routes/orderRoute.js';
import uploadRoutes from './routes/uploadRoute.js'

import { notFound, errorHandler } from './middleware/errorMiddleware.js';

const app = express();
app.use(express.json());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}


dotenv.config()

connectDB();

app.get('/',(req,res)=>
res.send('api is running'));

const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

app.use('/api/products',productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes)
app.use('/api/upload', uploadRoutes)

app.get('/api/config/paypal', (req, res) => 
{
//  console.log(process.env.PAYPAL_CLINT_ID)
  res.send(process.env.PAYPAL_CLINT_ID)
 }
);

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 4000;

app.listen(PORT,console.log('server running'));