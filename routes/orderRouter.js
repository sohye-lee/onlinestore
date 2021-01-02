const express = require('express');
const orderRouter = express.Router();

orderRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('List of All Orders');
})
.post((req, res) => {
    res.end(`Order Added <br>- name : ${req.body.name}<br>- description : ${req.body.description}`)
})
.delete((req, res) => {
    res.send('Deleting All Orders');
})

orderRouter.route('/:id')
.get((req, res) => {
    res.end(`Details of order with id ${req.params.id}`);
})
.put((req, res) => {
    res.write(`Update of the order with id ${req.params.id}<br>`);
    res.end(`- Order name \"${req.body.name}\" <br>
     - Description \"${req.body.description}\"`);
})
.delete((req, res) => {
    res.send(`Deleting order ${req.params.id}`);
})


module.exports = orderRouter;