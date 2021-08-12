let nombre = "Ana"

if (nombre == "Ana") {
  console.log ("Hola Ana");
}



var total=0;

function sumar (chk, valor){
 if (chk.checked)
 total +=valor;
 console.log (total);
}

function restar (chk, valor){
  if (chk.checked)
  total -= valor;
  console.log (total);
 }