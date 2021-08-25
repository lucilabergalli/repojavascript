function Tienda (producto, direccion, color){
  this.producto = producto;
  this.direccion = direccion;
  this.color = color;
  }

let consulta = parseInt (prompt ("¿Cuántos productos desea comprar?"));

for (let i =1; i<=consulta; i++) {
  let producto = prompt ("Ingrese el nombre del producto");
  let direccion = prompt ("Ingrese la dirección de entrega");
  let color = prompt ("Ingrese el color deseado");
  const comercio = new Tienda (producto, direccion, color);
  console.log (comercio);
}


