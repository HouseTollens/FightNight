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
/**
 *
 *
 *
 *
 *
 */
app.get('/', (req, res) => {
  var x = 1;
  res.render('index');
});

io.on('connection', (socket) => {
  socket.emit('playerNumber', io.engine.clientsCount);
  socket.on('selection', (selectionData) => {
    console.log("Player " + selectionData.playerNumber + " seleceted: " + selectionData.selected);
    socket.emit('newSelectionMade', selectionData);
  });

});

server.listen(process.env.PORT || 3000, () => {
    var host = server.address().address;
    var port = server.address().port;
    console.log('listening at http://%s:%s', host, port);
});