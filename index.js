const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const fs = require('fs');
const files = fs.readdirSync(__dirname + '/imgs/');

app.use(express.static(path.join(__dirname, 'imgs')));
app.engine('html', require('ejs').renderFile);
app.get('/', function (request, response) {
    response.render(__dirname + '/index.html', {files: files});
});

app.listen(process.env.PORT || 8080);
