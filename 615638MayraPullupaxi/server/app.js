const express = require('express');
const cors = require('cors');
const userRouter = require('./router/userRouter');
const productRouter = require('./router/productRouter');
const shoppingcartRouter = require('./router/shoppingcartRouter');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/login', userRouter);
app.use('/products', productRouter);
app.use('/shopping-cart', shoppingcartRouter);

app.listen(3000, () => console.log('listening to 3000...'));
