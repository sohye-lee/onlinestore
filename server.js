const express = require('express');
//Routes
const orderRouter = require('./routes/orderRouter');
const productRouter = require('./routes/productRouter');
const reviewRouter = require('./routes/reviewRouter');
const userRouter = require('./routes/userRouter');
//Host & Port
const hostname = 'localhost';
const port = 4000;


const app = express();
app.use(express.json());

app.use('/products', productRouter);
app.use('/users', userRouter);
app.use('/orders', orderRouter);
app.use('/reviews', reviewRouter);

// app.use(express.static(__dirname + '/public'));

app.use((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1><emp>SERVER FOR FUTURE ONLINE STORE PROJECT</emp></h1></body></html>')
});

app.listen(port, hostname, () => {
    console.log(`Server Running At http://${hostname}:${port}/`);
});