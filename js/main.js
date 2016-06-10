//Imprime en consola el valor del input al hacer enter
$('#nuevoMensaje').keydown(function(e){
	var key = e.which;
	if(key == 13) {
		var mensaje=$(this).val();
		console.log(mensaje)
	}
});

// var mensaje= $("#nuevoMensaje").val()