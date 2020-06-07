'use strict';

var express = require('express');
var server = express.Router();

server.get('/', function (req, res) {
    res.render('product');
});

server.get('/detail', function (req, res) {
    res.render('detail');
})


module.exports = server;
