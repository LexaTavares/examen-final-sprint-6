function cargarPagina() {
  $('.carousel.carousel-slider').carousel();
  $('.box').change(validarContenido);
  $('#agregar').click(solicitarApi);
};

function validarContenido() {
  var botonAdd = $("#agregar");
  if ($(".numeroTel").val().length == 10 && $(".box").prop("checked")) {
    botonAdd.removeAttr("disabled");
    return true;
  } else {
    botonAdd.attr("disabled", true);
  }
};


var api = {
  url: "http://localhost:3000/api/registerNumber"
}

var solicitarApi = function() {
  $.post(api.url, {
      "phone": $('#telephone').val(),
      "terms": true,
    },
    function(datoRecibido) {
      var codigo = localStorage.setItem("code", datoRecibido.data.code);
      var phone = localStorage.setItem("phone", datoRecibido.data.phone);

      if (datoRecibido.message == "Usuario válido") {
        $(location).attr('href', 'http://localhost:3000/views/ingresaCod.html');
      } else {
        alert(datoRecibido.message);
      }
    });
}


$(document).ready(cargarPagina);
