const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');
const files = fs.readdirSync(__dirname + '/assets/imgs/');

app.use(express.static(path.join(__dirname, 'assets')));
app.engine('html', require('ejs').renderFile);
app.get('/', function (request, response) {
    response.render(__dirname + '/index.html', {files: files});
});

app.listen(process.env.PORT || 8080);
