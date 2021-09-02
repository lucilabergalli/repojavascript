const productos = [];

class Producto {
  constructor (id, nombre, color, precio, imagen) {
    this.id =parseInt (id);
    this.nombre= nombre; 
    this.color = color;
    this.precio = parseFloat (precio);
    this.imagen = imagen;
  }
}

productos.push (new Producto (1, "Panel Ranurado 260x90cm", "Blanco","500", "imagenes/producto1.png"));
productos.push (new Producto (2, "Mesa De Tv Lcd - Modular", "Wengue", "1200", "imagenes/producto3.png"));
productos.push (new Producto (3, "Panel Ranurado exhibidor doble", "Blanco", "30000", "imagenes/producto2.png"));
productos.push (new Producto (4, "Placa MDF fibrofácil de 18mm. 2,75 x 1,83 mts", "Crudo", "200", "imagenes/placamdf.png"));
productos.push (new Producto (5, "Mostrador Ciego", "Blanco", "4500", "imagenes/mostradorciego.png"));
productos.push (new Producto (6, "Sommier Cannon Exclusive 1 1/2 plaza 190x100cm", "Blanco", "40000", "imagenes/sommiercannonexclusive.png"));
productos.push (new Producto (7, "Sommier y Colchón King 2x2 Cannon", "Blanco", "70000", "imagenes/kingcannon.png"));
productos.push (new Producto (8, "Colchón Cannon Queen (2 plazas)", "Blanco", "3000", "imagenes/producto4.png"));

console.log (productos);


  for (const producto of productos) {
    $(".productosContenedor").append (`<div class="card text-center" style="width: 18rem">
                                        <div class="card-body">
                                          <h5 class="card-title">${producto.nombre}</h5>
                                          <h6>${producto.color}</h6>
                                          <p class="card-text">${producto.precio}</p>
                                          <img src="${producto.imagen}" style= "height: 150px"></img>
                                          <button id="${producto.id}" type="button" class="btn btn-info"> Agregar al carrito </button>
                                        </div>
                                      </div>`);
  }
 



// 

const botones = $(".btn-info");
// console.log (botones);

//

const Carrito = [];


function agregarAlCarrito () {
  console.log (this.id);
  
  const seleccionado = productos.find(producto => producto.id == this.id);
  
  Carrito.push (seleccionado);
  
  let innerCarrito = '';
  for (const producto of Carrito){
    innerCarrito += `<p>${producto.nombre} -${producto.precio}</p>`
  }
  
  const divCarrito = document.getElementById("carrito")
  divCarrito.innerHTML = innerCarrito;
  
  console.log ("Producto Agregado");

}


  


for (const boton of botones){
  boton.addEventListener("click", agregarAlCarrito);
}

//
$(document).ready(function() {
  console.log('dom ready');
});

//

// let button = document.getElementsByTagName ("button");
// console.log (button.innerHTML);












const guardarLocal = (clave, valor) => {localStorage.setItem (clave, valor)};

for (const producto of productos)
  guardarLocal (producto.id, JSON.stringify(producto));

console.log (typeof guardarLocal);

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


//