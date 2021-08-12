class Tienda {
  constructor (producto, precio, color) {
      this.producto = producto;
      this.precio = precio;
      this.color = color;
  }
}

const Carrito = [];
Carrito.push(new Tienda("panel ranurado", "500", "blanco"));
Carrito.push(new Tienda("rack LCD", "1200", "wengue"));
Carrito.push(new Tienda("colchón Cannon 2 plazas", "3000", "blanco"));
console.log(Carrito);


// function Tienda (producto, precio, color){
//   this.producto = producto;
//   this.precio = precio;
//   this.color = color;
//   }

// const tienda1 = new Tienda ("panel ranurado", "$500", "blanco");
// const tienda2 = new Tienda ("rack lcd", "$1200", "wengue");

// console.log (tienda1, tienda2);

// let consulta = parseInt (prompt ("¿Cuántos productos desea comprar?"));

// for (let i =1; i<=consulta; i++) {
//   let producto = prompt ("¿Qué producto desea comprar?");
//   let precio = parseInt (prompt ("Ingrese el valor del producto"));
//   let color = prompt ("Ingrese el color de su preferencia");
//   const comercio = new Tienda (producto, precio, color);
//   console.log (comercio);
// }

