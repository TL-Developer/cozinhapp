var http = require('http')
  , app = require('./config/express')();

if(process.env.NODE_ENV == 'production'){
  require('./config/database.js')('mongodb://tiago:admin@ds041154.mongolab.com:41154/cozinhapp');
}else{
  require('./config/database.js')('mongodb://localhost/cozinhapp');
}

http.createServer(app).listen(app.get('port'), function(){
  console.log('Servidor rodando na porta ' + app.get('port'));
});
