var http = require('http');
var arquivo = require('fs');
var porta = 3000;


// Arquivo
arquivo.readFile ("the-page.html", function(erro, dados){

	if(erro)
		console.log(erro);
	else{

		// Servidor
		var handle = function  (requisicao, resposta){
			resposta.writeHead(200, {
				'Content-Type': 'text/html'
			});

			resposta.write(dados);
			resposta.end();
		};

		var servidor = http.createServer(handle);

		// Abrir servidor
		servidor.listen(porta, function(){
			console.log('Servidor ligado na porta ' + porta);
		})
	}

});

