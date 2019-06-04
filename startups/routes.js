const express = require('express');
const users = require('../routes/users');
const homepage = require('../routes/homepage');
const auth = require('../routes/auth');

module.exports = function(app){
    app.use(express.json());
    app.set('view engine','jade');
    app.set('views','./views');
    app.use('/api/users',users);
    app.use('/api/auth', auth);
    app.use('/',homepage);
};