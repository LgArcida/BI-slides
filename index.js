const express = require('express');
var path = require('path');
const app = express();
const port = 3000;
var fs = require('fs');
var files = fs.readdirSync(__dirname + '/imgs/');

app.use(express.static(path.join(__dirname, 'imgs')));
app.engine('html', require('ejs').renderFile);
app.get('/', function (request, response) {
    response.render(__dirname + '/index.html', {files: files});

});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
