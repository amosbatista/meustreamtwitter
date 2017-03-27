var btnAcao = document.getElementById("theButton");
var textoResposta = document.getElementById("areaResposta");

btnAcao.addEventListener('click', function(submitEvent){


	var socket = io('http://localhost:3000', {
		reconnection: false
	});

	socket.emit('credencial', {
		usuario: document.getElementById("usuario").value,
		senha: document.getElementById("senha").value
	});


	socket.on('erroCredencial', function(erro){
		textoResposta.value = erro;
	});




	submitEvent.stopPropagation();
});