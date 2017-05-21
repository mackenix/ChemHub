var directory = 'C:/Users/Mack/Documents/chemHub';
var path = require('path');

var test = 'it worked!';
module.exports = function(app){
  app.get('/', function (req, res) {
    res.sendFile(path.join(directory + '/index.html'));
  });

  app.get('/login', function(req, res) {
    res.sendFile(path.join(directory + '/login.html'));
  });

  app.get('/test/:id/:page', function(req, res) {
    res.send(req.params);
  });

  app.post('/login', function(req, res) {
    var name = req.body.name;
    console.log(name);
  });
};
