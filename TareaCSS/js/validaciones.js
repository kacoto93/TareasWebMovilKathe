document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("formulario")
    .addEventListener("submit", validarFormulario);
});

function validarFormulario(evento) {
  evento.preventDefault();
  var usuario = document.getElementById("nombre").value;
  if (usuario.length == 0) {
    alert("No has escrito nada en el usuario");
    return;
  }
  var apellido = document.getElementById("apellido").value;
  if (apellido.length == 0) {
    alert("No has escrito nada en el apellido");
    return;
  }
  var email = document.getElementById("email").value;
  if (email.length == 0) {
    alert("No has escrito nada en el correo");
    return;
  }
  var telefono = document.getElementById("telefono").value;
  if (telefono.length == 0) {
    alert("No has escrito nada en el telefono");
    return;
  }
  var asunto = document.getElementById("asunto").value;
  if (asunto.length == 0) {
    alert("No has escrito nada en el asunto");
    return;
  }
  var mensaje = document.getElementById("mensaje").value;
  if (mensaje.length == 0) {
    alert("No has escrito nada en el mensaje");
    return;
  }
  this.submit();
}
