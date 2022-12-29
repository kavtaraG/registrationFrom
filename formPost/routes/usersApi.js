const express = require('express');
var app = express.Router();

const {getUsers, addUsers} = require('../services/users-mongo');

const users = [
    {name: 'goirgi', surname: 'dude', mail: 'dude.example.com', password: '123456'}
]

app.get('/', async (req, res, next) => {
    res.send(await getUsers());
});

app.post('/', async (req, res, next) => {
    let record = req.body;
    // users.push(record);
    await addUsers(record);
    res.send({status: 'ok', msg: 'user added'});
});

module.exports = app;