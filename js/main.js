//Variables
var cajaChat = document.getElementById("burbujaChat"),
	mensajeInput = document.getElementById("mensajeInput");

//Arreglos
var nombres = ['Laboratoria Peru', 'Raymi Saldomando', 
				'Mariana Costa', 'Ana María Franklin', 
				'Rodulfo Prieto', 'Andrea Llamas', 
				'María Paula Rivarola', 'Katy Sanchez', 
				'Aldo Alfaro'];
var fotos = ['logocodeacademy.png', 'raymi.jpg',
				'mariana.jpg', 'anamaria.jpg',
				'rodulfo.jpg', 'andrea.jpg',
				'mariapaula.jpg', 'katy.jpg', 'aldo.jpg']

var mensajes=[];
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


//
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
		//Agregar mensaje a arreglo
		// var texto = $('#mensajeInput').val();
		// var contacto= $('#usuario').text();
		// var temp = {
		// 	mensaje: texto,
		// 	persona:contacto
		// };
		// mensajes.push('hola');
	});
	//Cambiar nombre de conversación
	$('.conversacion').click(function(){
		var data=$(this).attr('data');
		$('#foto').html('<img class="perfil" src="image/' + fotos[data] + '">');
		$('#nombre').html('<p id="usuario">' + nombres[data] + '</p>');
	});
});
