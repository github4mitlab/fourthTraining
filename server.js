const http = require('http');
const express = require('express');
const app = express();
const morgan = require('morgan');



const productRoutes = require('./api/routers/products');
const orderRoutes = require('./api/routers/orders');

app.use(morgan('dev'));
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);


const PORT = 3000;

const server = http.createServer(app);
server.listen(PORT, console.log('서버시작!!!'));
