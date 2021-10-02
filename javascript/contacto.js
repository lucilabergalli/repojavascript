

$(document).ready(function(){
  $('#formulario').submit (function (){
    alert ("Gracias por su consulta");
  })
}
)

let email = sessionStorage.getItem('email');

console.log(typeof email);


