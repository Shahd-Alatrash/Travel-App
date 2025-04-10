const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('dist'));

app.get('/', function (req, res) {
    res.sendFile(path.resolve('dist/index.html'));
});

app.listen(8080, function () {
    console.log('App listening on port 8080!');
});
