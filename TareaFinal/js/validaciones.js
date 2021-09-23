document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("formulario")
    .addEventListener("submit", validarFormulario);
});

function validarFormulario(evento) {
  evento.preventDefault();
  var nombre = document.getElementById("nombre").value;
  if (nombre.length == 0) {
    alert("No has escrito nada en el nombre");
    return;
  }
  var apellido = document.getElementById("apellido").value;
  if (apellido.length == 0) {
    alert("No has escrito nada en el apellido");
    return;
  }
  var cedula = document.getElementById("cedula").value;
  if (cedula.length < 9) {
    alert("La cedula debe tener 9 digitos");
    return;
  }
  var email = document.getElementById("email").value;
  if (email.length == 0) {
    alert("No has escrito nada en el correo");
    return;
  }
  var ingresos = document.getElementById("ingresos").value;
  if (ingresos.length == 0) {
    alert("No has escrito nada en ingresos");
    return;
  }
  var prestamo = document.getElementById("prestamo").value;
  if (prestamo.length == 0) {
    alert("No has escrito nada en préstamo");
    return;
  }
  var telefono = document.getElementById("telefono").value;
  if (telefono.length < 8) {
    alert("No has escrito nada en el telefono. Debe tener 8 digitos");
    return;
  }
  var tiempoTrabajo = document.getElementById("tiempoTrabajo").value;
  if (tiempoTrabajo.length == 0) {
    alert("No has indicado la cantidad de años laborados.");
    return;
  }
  this.submit();
}
