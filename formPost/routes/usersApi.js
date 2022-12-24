const express = require('express');
var app = express.Router();

const users = [
    {name: 'goirgi', surname: 'dude', mail: 'dude.example.com', password: '123456'}
]

app.get('/', (req, res, next) => {
    res.send(users);
});

app.post('/', (req, res, next) => {
    let record = req.body;
    users.push(record);
    res.send({status: 'ok', msg: 'user added'});
});

module.exports = app;