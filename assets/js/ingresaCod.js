$(document).ready(cargarPagina);

function cargarPagina(){
alert("Tu codigo es:" + " " + obtenerCode);
$('#code').keyup(cambiarAusuarioYape);
};

var obtenerCode = localStorage.getItem("code");
var obtenerPhone =localStorage.getItem("phone");

function cambiarAusuarioYape(){
  if($('#code').val() === obtenerCode){
    $(location).attr('href', 'http://localhost:3000/views/usuarioYape.html');
  } else {
    console.log("Código incorrecto")
  };
};
