//variable que permite tomar el valor de campo de entrda
var input = document.getElementById("input");
var output = document.getElementById("output");
//var input = "gato"
//focus permite preseleccionar y que esta aparezca ya en uso
input.focus()


function encriptar() {
	//Esta funcion se encarga de almacenar los cambios de las vocales en un array, a medida que se itera sobre la cadena de texto que se desea encriptar el switch se encargara de validar si son vocales y las cambiara al respectivo codigo de ecriptacion
	var texto = input.value;
	var encriptado = []; //array que ira almacenado los caracteres para encriptar el mesanje

	//Esta es una buena manera de practicar la logica de programacion
	for (var i = 0; i < texto.length; i++) {
		switch (texto[i]) {
			case "a":
				encriptado.push("ai");
				break;
			case "e":
				encriptado.push("enter");
				break;
			case "i":
				encriptado.push("imes");
				break;
			case "o":
				encriptado.push("ober");
				break;
			case "u":
				encriptado.push("ufat");
				break;

			default:
				encriptado.push(texto[i]);
				break;
		}
	}
	return encriptado;
}


function textoEncriptado(encriptado) {
	//toma los valores del array y los pasa a foramato string
	var aux = "";
	for (var i = 0; i < encriptado.length; i++) {
	 	aux= aux + encriptado[i];
	}
	return aux;
}


function mensajeEncriptado () {
	//Esta funcion sera asociada al boto encriptar, esta se encargara de mostrar en el cuadro de texto en mensaje ya encriptado
	var aux = textoEncriptado(encriptar());
	var content = document.getElementById("output"); 
	content.value = '';
	content.value += aux;
	content.style.backgroundImage = "none";
	document.getElementById("aparecer").style.zIndex = 0;
}

//Desencriptacion del mensaje

function desencriptar(input) {
	//Mediante el uso de regex se y el metodo replace que tiene js se puede realizar rapidamente el cambio de las claves por sus respectivas vocales, este es un metodo alternativo a usar la logica, y son muy utiles ya que permiten simplificar trabajo
	input = input.replace(/ai/gi,'a');
	input = input.replace(/enter/gi,'e');
	input = input.replace(/imes/gi,'i');
	input = input.replace(/ober/gi,'o');
	input = input.replace(/ufat/gi,'u');

	return input;
}

function mensajeDesencriptado() {
	var aux = desencriptar(input.value)
	var content = document.getElementById("output"); 
	content.value = '';
	content.value += aux;
	document.getElementById("aparecer").style.zIndex = 0;
	document.getElementById("output").style.backgroundImage = "none";
}

// Funcion de copiado
function copiarTexto() {
	var copia = output.value
	navigator.clipboard.writeText(copia);
	alert("Texto copiado");
}

var botonEncriptar = document.querySelector(".encriptar");
botonEncriptar.onclick = mensajeEncriptado;

var botonDesencriptar = document.querySelector(".desencriptar");
botonDesencriptar.onclick  = mensajeDesencriptado;

var botonCopiar = document.querySelector(".copiar");
botonCopiar.onclick = copiarTexto;