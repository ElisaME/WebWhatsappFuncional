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
//Agregar Tarea
var agregarTarea = function(){
	var mensaje = mensajeInput.value,
		nuevoMensaje = document.createElement("div"),
		contenido = document.createTextNode(mensaje);

	// nuevoMensaje.setAttribute("class", "text-box, right, mensajeChat");
	$(nuevoMensaje).addClass("text-box right mensajeChat");
	// Agregamos el contenido al div
	nuevoMensaje.appendChild(contenido);
	// Agregamos nuevo mensaje a chat
	cajaChat.appendChild(nuevoMensaje);
	// mensajeInput.value = "";

};
// Agregar Mensaje
var agregarMensaje = function(){
	var mensaje = mensajeInput.value;
	var contacto= $('#usuario').text();
	var temp = {
		mensaje: mensaje,
		persona:contacto
	};
	mensajes.push(temp);
}

//Buscar mensaje
function doSearch(){
	var tableReg = document.getElementById('conversaciones');
	var searchText = document.getElementById('searchTerm').value.toLowerCase();
	var cellsOfRow="";
	var found=false;
	var compareWith="";

	// Recorremos todas las filas con contenido de la tabla
	for (var i = 1; i < tableReg.rows.length; i++) {
		cellsOfRow = tableReg.rows[i].getElementsByTagName('p');
		found = false;
		// Recorremos todas las celdas
		for (var j = 0; j < cellsOfRow.length && !found; j++){
			compareWith = cellsOfRow[j].innerHTML.toLowerCase();
			// Buscamos el texto en el contenido de la celda
			if (searchText.length == 0 || (compareWith.indexOf(searchText) > -1)){
				found = true;
			}
		}
		if(found){
			tableReg.rows[i].style.display = '';
		} else {
			// si no ha encontrado ninguna coincidencia, esconde la
			// fila de la tabla
			tableReg.rows[i].style.display = 'none';
		}
	}
}

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
			agregarMensaje();
			mensajeInput.value = "";
		}

	});
	//Cambiar nombre de conversación
	$('.conversacion').click(function(){
		var data=$(this).attr('data');
		$('#foto').html('<img class="perfil" src="image/' + fotos[data] + '">');
		$('#nombre').html('<p id="usuario">' + nombres[data] + '</p>');
		$('.mensajeChat').remove();


	});
});
