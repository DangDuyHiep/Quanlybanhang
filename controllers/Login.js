'use strict';

var express = require('express');
var server = express.Router();

server.get('/', function (req, res) {

    res.render('login');
});


module.exports = server;