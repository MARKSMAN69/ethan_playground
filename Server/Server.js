const express = require('express');

const logger = require('./logger');

let app = express();

app.use((req, res, next) => {
    logger.log(req, res, next);
});

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.redirect('/Index.html')
})

app.listen(3000, () => {
    console.log('listening on port http://localhost:3000');
});