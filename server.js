var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.engine('html', require('ejs').renderFile);

// use statements
app.use('/', express.static(__dirname + '/public'));

// set statements
app.set('view engine', 'html');
app.set('views', __dirname + '/public/');

// get statements
app.get('/', (req, res) => {
    res.render('index');
});

io.on('connection', (socket) => {

  socket.on('selection', (character) => {
    console.log("A character was selected. " + character);
    socket.emit('')
  });

});

server.listen(process.env.PORT || 3000, () => {
    var host = server.address().address;
    var port = server.address().port;
    console.log('listening at http://%s:%s', host, port);
});