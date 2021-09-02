// (function() {
//   'use strict';
//   window.addEventListener('load', function() {
//     // Fetch all the forms we want to apply custom Bootstrap validation styles to
//     var forms = document.getElementsByClassName('needs-validation');
//     // Loop over them and prevent submission
//     var validation = Array.prototype.filter.call(forms, function(form) {
//       form.addEventListener('submit', function(event) {
//         if (form.checkValidity() === false) {
//           event.preventDefault();
//           event.stopPropagation();
//         }
//         form.classList.add('was-validated');
//       }, false);
//     });
//   }, false);  
// })();


$(document).ready(function(){
  $('#formulario').submit (function (){
    alert ("Gracias por su consulta");
  })
}
)



// let miFormulario = document.getElementById("formulario");
// miFormulario.addEventListener ("submit", validarFormulario);

// function validarFormulario(e){
//     e.preventDefault();
//     alert("Gracias por su consulta");    
// }

// function limpiarFormulario() {
//   document.getElementById("formulario").reset();
// }




let email = sessionStorage.getItem('email');

console.log(typeof email);

