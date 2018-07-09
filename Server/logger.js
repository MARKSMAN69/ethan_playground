const fs = require('fs');

let log = (req, res, next) => {

    var now = new Date().toUTCString();
    var log = `${now}: ${res.statusCode} ${req.method} ${req.url}`;

    // console.log(log);
    fs.appendFile('server.log', log + '\n', (err) =>{
        if(err){
            console.log('Unable to append to server.log');
        }
    });

    next();

};

module.exports = {
    log
}