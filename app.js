const express = require('express');
const path = require('path');
const routes = require('./routes/index');
const bodyParser = require('body-parser');

//create our Express app
const app = express();

//setting where we keep our pug files (templates) and the view engine to pug
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//Takes raw requests and turns them into properties found in req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);

module.exports = app;
