const express = require('express');
const reviewRouter = express.Router();

reviewRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('List of All Reviews');
})
.post((req, res) => {
    res.end(`Review Added <br>- name : ${req.body.name}<br>- description : ${req.body.description}`)
})
.delete((req, res) => {
    res.send('Deleting All Reviews');
})

reviewRouter.route('/:id')
.get((req, res) => {
    res.end(`Details of review with id ${req.params.id}`);
})
.put((req, res) => {
    res.write(`Update of the review with id ${req.params.id}<br>`);
    res.end(`- Review name \"${req.body.name}\" <br>
     - Description \"${req.body.description}\"`);
})
.delete((req, res) => {
    res.send(`Deleting review ${req.params.id}`);
})

module.exports = reviewRouter;