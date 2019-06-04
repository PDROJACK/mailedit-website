var express = require('express');
var app = express();
var config = require('config');

require('./startups/routes')(app);
require('./startups/database')();
require('./startups/config')();


const port = process.env.PORT || config.get("port");
app.listen(port, ()=>console.log(`Listening on port ${port}`));
