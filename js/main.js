
// Imprime en consola el valor del input al hacer enter
$('#nuevoMensaje').keydown(function(e){
	var key = e.which;
	if(key == 13) {
		var mensaje=$(this).val();
		console.log(mensaje);
	}
});

// function agregarMensaje(){
// 	var mensaje=document.createElement('p');
// 	var contenidoMensaje=document.createTextNode('hola')
// 	mensaje.appendChild(contenidoMensaje)
// 	document.getElementById('chat').appendChild('mensaje')
// }
// var valorMensaje=document.getElementById('nuevoMensaje');
// valorMensaje.onkeyup=function(event){
// 	if (event.which == 13){
// 		agregarMensaje;
// 	}
// }

