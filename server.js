var app = require('./config/express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

if(process.env.NODE_ENV == 'production'){
  require('./config/database.js')('mongodb://tiago:admin@ds041154.mongolab.com:41154/cozinhapp');
}else{
  require('./config/database.js')('mongodb://localhost/cozinhapp');
}

app.set('io', io);

http.listen(app.get('port'));

io.on('connection', function(socket){
  console.log('Usuário conectado na cozinha');

  socket.on('disconnect', function(){
    console.log('Usuário desconectado na cozinha');
  });
});
