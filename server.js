const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');
// let files = fs.readdirSync(__dirname + '/assets/imgs/');

app.use(express.static(path.join(__dirname, 'assets')));
app.engine('html', require('ejs').renderFile);

app.get('/', function (request, response) {
    response.render(__dirname + '/index.html');
});
app.listen(process.env.PORT || 8080);

app.post('/refreshImgs', function(req, res) {
    const files = fs.readdirSync(__dirname + '/assets/imgs/');
    res.send(files);
});
