var btnAcao = document.getElementById("theButton");

btnAcao.addEventListener('click', function(submitEvent){
	var socket = io('http://localhost:3000', {
		reconnection: false
	});
	submitEvent.stopPropagation();
});