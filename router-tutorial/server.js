const express = require('express');
const path = require('path');
const compression = require('compression');

const app = express();

app.use(compression());
app.use(express.static(__dirname));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
});

const PORT = process.env.PORT || 8080
app.listen(PORT, function () {
    console.log('Production Express server running at localhost:' + PORT)
});