var http = require('http');
var porta = 3000;
var url = {
	api: 'https://api.twitter.com',
	oauth: '/oauth/request_token'
}



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
var io = require("socket.io")(servidor);

io.on('connection', function(socket){
	console.log('Houve uma conexão no nosso processo.');

	// Desconexão
	socket.on('disconnect', function(){
		console.log('Usuário desconectado');		
	});


	// Credencial
	socket.on('credencial', function(credenciais){
		var opcoes = {
			hostname: url.api,
			path: url.oauth,
			method: 'POST',

		};

		var req = http.request(
			opcoes,
			function(resposta){
				socket.emit('erroCredencial', resposta);
			}
		);

		req.on('error', function(error){
			console.log('Erro na autenticação', error);
		})
	})
})



// Abrir servidor
servidor.listen(porta, function(){
	console.log('Servidor ligado na porta ' + porta);
});




