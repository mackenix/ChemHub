var express = require('express');
var app = express();
var path = require('path');
var apiController = require('./controllers/controller');

/*Sets up environment variable port if it exists. If not, it's 3000 */
var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

apiController(app);
app.listen(port);
