//Variables
var cajaChat = document.getElementById("burbujaChat"),
	mensajeInput = document.getElementById("mensajeInput");

//----------------------------Arreglos----------------------------------
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
// ----------------------------Funciones--------------------------------
//Agregar Mensaje
var agregarMensaje = function(){
	var mensaje = mensajeInput.value,
		nuevoMensaje = document.createElement("div"),
		contenido = document.createTextNode(mensaje);

	var reloj =document.createElement('div');
	var hora=horaMensaje();
	reloj.innerHTML=hora;
	nuevoMensaje.appendChild(reloj);
	$(reloj).addClass("hora");

	// nuevoMensaje.setAttribute("class", "text-box, right, mensajeChat");
	$(nuevoMensaje).addClass("text-box right mensajeChat");
	// Agregamos el contenido al div
	nuevoMensaje.appendChild(contenido);
	// Agregamos nuevo mensaje a chat
	cajaChat.appendChild(nuevoMensaje);
	// mensajeInput.value = "";
};

// Agregar Mensaje
var guardarMensaje = function(){
	var mensaje = mensajeInput.value;
	var contacto= $('#usuario').text();
	var temp = {
		mensaje: mensaje,
		persona:contacto,
		hora: horaMensaje()
	};
	mensajes.push(temp);
}
//Agregar Mensaje Anterior
var agregarMensajeAnterior = function(){
	//Recorrer array
	for (i=0; i<mensajes.length;i++){
		var temp = mensajes [i];
		var contacto= $('#usuario').text();
		//Si coincide entonces crear nuevo div con mensaje anterior
		if (contacto == temp.persona){
			var mensajeAnterior= temp.mensaje
			// console.log(mensajeAnterior)
			var nuevoMensaje = document.createElement("div"),
				contenido = document.createTextNode(mensajeAnterior);

			$(nuevoMensaje).addClass("text-box right mensajeChat");
			// Agregamos el contenido al div
			nuevoMensaje.appendChild(contenido);
			// Agregamos nuevo mensaje a chat
			cajaChat.appendChild(nuevoMensaje);

			var reloj =document.createElement('div');
			var hora=temp.hora;
			reloj.innerHTML=hora;
			nuevoMensaje.appendChild(reloj);
			$(reloj).addClass("hora");
		}
	}
};

//Poner hora
function horaMensaje(){
	var fecha = new Date();
	var hora = fecha.getHours();
	var minutos = fecha.getMinutes();
	if (hora<10){
		hora="0"+hora;
	}
	if (minutos<10){
		minutos="0"+minutos;
	}
	var time= hora + ":" + minutos;
	return time
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
			agregarMensaje();
			guardarMensaje();
			mensajeInput.value = "";
		}

	});
	//Cambiar nombre de conversación
	$('.conversacion').click(function(){
		var data=$(this).attr('data');
		//pone foto
		$('#foto').html('<img class="perfil" src="image/' + fotos[data] + '">');
		//pone nombre
		$('#nombre').html('<p id="usuario">' + nombres[data] + '</p>');
		//quita mensajes
		$('.mensajeChat').remove();
		agregarMensajeAnterior();
	});
});
