
//FUNCIONA
var cajaChat = document.getElementById("burbujaChat"),
	mensajeInput = document.getElementById("mensajeInput"),
	btnNuevaTarea = document.getElementById("btn-agregar");

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
	// Agregar Mensaje con boton
	btnNuevaTarea.addEventListener("click", agregarTarea);
});


mensajeInput.onkeyup = function(e){
	if (e.which == 13){
		agregarTarea;
	}
}
//Imprime en consola el valor del input al hacer enter
// $('#nuevoMensaje').keydown(function(e){
// 	var key = e.which;
// 	if(key == 13) {
// 		addEventListener(agregarTarea);
// 	}
// });