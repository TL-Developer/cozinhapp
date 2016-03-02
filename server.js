var app = require('./config/express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

if(process.env.NODE_ENV == 'production'){
  require('./config/database.js')('mongodb://tiago:admin@ds041154.mongolab.com:41154/cozinhapp');
}else{
  require('./config/database.js')('mongodb://localhost/cozinhapp');
}

server.listen(app.get('port'));
