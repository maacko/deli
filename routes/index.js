const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    response.send('Hey! This works!!!');
});

module.exports = router;
