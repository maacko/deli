const express = require('express');
const path = require('path');
const routes = require('./routes/index');

//create our Express app
const app = express();

//setting where we keep our pug files (templates) and the view engine to pug
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/', routes);
module.exports = app;
