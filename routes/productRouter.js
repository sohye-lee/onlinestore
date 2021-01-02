const express = require('express');
const productRouter = express.Router();

productRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('List of All Products');
})
.post((req, res) => {
    res.end(`Product Added <br>- name : ${req.body.name}<br>- description : ${req.body.description}`)
})
.delete((req, res) => {
    res.send('Deleting All Products');
})

productRouter.route('/:id')
.get((req, res) => {
    res.end(`Details of product with id ${req.params.id}`);
})
.put((req, res) => {
    res.write(`Update of the product with id ${req.params.id}<br>`);
    res.end(`- Product name \"${req.body.name}\" <br>
     - Description \"${req.body.description}\"`);
})
.delete((req, res) => {
    res.send(`Deleting product ${req.params.id}`);
})


module.exports = productRouter;