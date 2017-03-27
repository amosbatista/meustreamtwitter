var http = require('http');
var porta = 3000;



// Servidor
var handle = function  (requisicao, resposta){
	resposta.writeHead(200, {
		'Access-Control-Allow-Origin': 'http://localhost',
		'Access-Control-Allow-Credentials': 'true',
	});
	resposta.end('Servidor conectado');
};

var servidor = http.createServer(handle);



// IO
var io = require("socket.io")(http);
io.on('connection', function(socket){
	console.log('Houve uma conexão no nosso processo. O socket de conexão é ', socket);
})



// Abrir servidor
servidor.listen(porta, function(){
	console.log('Servidor ligado na porta ' + porta);
});




