const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    //response.send('Hey! This works!!!');
    response.render('layout');
});

module.exports = router;
