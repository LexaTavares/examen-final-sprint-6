$(document).ready(carrgarPagina);

function carrgarPagina() {
  $('.slider').slider();
  $('.carousel.carousel-slider').carousel();
  $('.numeroTel').keyup(validarContenido);
  $('.box').click(checkboxTrue);
};

var botonAdd = $('#agregar');
function validarContenido() {


  if($('.numeroTel').val().length == 9)
  {
    console.log("numero de telefono correcto");
  };
};
function checkboxTrue(){
  if($('.box').is(':checked')){
    botonAdd.removeAttr("disabled");
  } else {
    botonAdd.attr("disabled", true);
  }
};
