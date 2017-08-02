
//import environmental variables from our variables.env file
require('dotenv').config({ path: 'variables.env' });

const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => {
    console.error(`DB: ${err.message}`);
});

//Starting our app!
const app = require('./app');
//app is an instance of express
app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), () => {
    console.log(`Express running on PORT ${server.address().port}`);
});
