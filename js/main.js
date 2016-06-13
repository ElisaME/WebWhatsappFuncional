//FUNCIONA
var cajaChat = document.getElementById("burbujaChat"),
	mensajeInput = document.getElementById("mensajeInput");

// Funciones
var agregarTarea = function(){
	var mensaje = mensajeInput.value,
		nuevoMensaje = document.createElement("div"),
		contenido = document.createTextNode(mensaje);

	nuevoMensaje.setAttribute("class", "text-box, right");
	// Agregamos el contenido al div
	nuevoMensaje.appendChild(contenido);
	// Agregamos nuevo mensaje a chat
	cajaChat.appendChild(nuevoMensaje);
	mensajeInput.value = "";
};

$(document).ready(function(){
	// Agregar Mensaje con enter
	$('#mensajeInput').keypress(function(e){
		var mensaje=mensajeInput.value
		if (e.which == 13){
			//Para no enviar mensajes en blanco
			if (mensaje==''){
				return false
			}
			agregarTarea();
		}
	});
});
