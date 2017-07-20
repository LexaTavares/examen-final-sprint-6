function cargarPagina() {
  $('.carousel.carousel-slider').carousel();
  $('.box').change(validarContenido);
  $('#agregar').click(moverIngresaCod);
  datosRecibidos();
};

function validarContenido() {
  var botonAdd = $("#agregar");
  if ($(".numeroTel").val().length == 10 && $(".box").prop("checked")) {
    botonAdd.removeAttr("disabled");
    window.location
  } else {
    botonAdd.attr("disabled", true);
  }
};

function moverIngresaCod() {
  $(location).attr('href', 'http://localhost:3000/views/ingresaCod.html')

}


var api = {
  url: "http://localhost:3000/api/registerNumber"
}

function datosRecibidos() {
  $.post(api.url, {
      "phone": 7412589630,
      "terms": true,
      "code": "code"
    },
    function(datoRecibido) {
      console.log(datoRecibido);
      alert(datoRecibido.data.code);
      // if ($('#code').val().length == 6) {
      //   $(location).attr('href', 'http://localhost:3000/views/usuarioYape.html')
      // };
    });

}


$(document).ready(cargarPagina);
