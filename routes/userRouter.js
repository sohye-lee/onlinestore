const express = require('express');
const userRouter = express.Router();

userRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('List of All Users');
})
.post((req, res) => {
    res.end(`User Added <br>- name : ${req.body.name}<br>- description : ${req.body.description}`)
})
.delete((req, res) => {
    res.send('Deleting All Users');
})

userRouter.route('/:id')
.get((req, res) => {
    res.end(`Details of user with id ${req.params.id}`);
})
.put((req, res) => {
    res.write(`Update of the user with id ${req.params.id}<br>`);
    res.end(`- User name \"${req.body.name}\" <br>
     - Description \"${req.body.description}\"`);
})
.delete((req, res) => {
    res.send(`Deleting User ${req.params.id}`);
})


module.exports = userRouter;