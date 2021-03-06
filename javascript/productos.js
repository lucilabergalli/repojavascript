const productos = [];
const categorias = ["Placas", "Colchones", "Muebles"];
const carrito = [];



$(document).ready(function(){
 $('#cart-nav-btn').show();

  if ("carrito" in localStorage){
    const storageDom = JSON.parse (localStorage.getItem("carrito"))
    for(const producto of storageDom) {
      carrito.push(new Producto (producto.id, producto.nombre, producto.color, producto.precio, producto.imagen, producto.categoria, producto.cantidad));
    }
    console.log (carrito);
    carritoTotal (carrito);
  }
});
  
  productos.push (new Producto (1, "Panel Ranurado 260x90cm", "Blanco",500, "imagenes/producto1.png", categorias[0]));
  productos.push (new Producto (2, "Mesa De Tv Lcd - Modular", "Wengue", 1200, "imagenes/producto3.png", categorias [2]));
  productos.push (new Producto (3, "Panel Ranurado exhibidor doble", "Blanco", 30000, "imagenes/producto2.png", categorias[0]));
  productos.push (new Producto (4, "Placa MDF de 18mm. 2,75 x 1,83 mts", "Crudo", 200, "imagenes/placamdf.png", categorias[0]));
  productos.push (new Producto (5, "Mostrador Ciego", "Blanco", "4500", "imagenes/mostradorciego.png", categorias[2]));
  productos.push (new Producto (6, "Sommier Cannon Exclusive 1 1/2 plaza 190x100cm", "Blanco", 40000, "imagenes/sommiercannonexclusive.png", categorias[1]));
  productos.push (new Producto (7, "Sommier y Colchón King 2x2 Cannon", "Blanco", 70000, "imagenes/kingcannon.png", categorias[1]));
  productos.push (new Producto (8, "Colchón Cannon Queen (2 plazas)", "Blanco", 3000, "imagenes/producto4.png", categorias[1]));
  productos.push (new Producto (9, "Sommier y Colchón King 2x2 Cannon Renovation", "Blanco", 83000, "imagenes/sommierrenovation.png", categorias[1]));
  productos.push (new Producto (10, "Sommier y Colchón King 2x2 Cannon Sublime", "Blanco", 108000, "imagenes/sommiersublime.png", categorias[1]));
  productos.push (new Producto (11, "Placa MDF 9mm", "Blanco", 2500, "imagenes/placamdf9mm.png", categorias[0]));
  productos.push (new Producto (12, "Placa melamina 18mm", "Blanco", 5000, "imagenes/melamina.png", categorias[0]));
  productos.push (new Producto (13, "Biblioteca 10 cubos)", "Negra", 6600, "imagenes/bibliotecanegra.png", categorias[2]));
  productos.push (new Producto (14, "Biblioteca Maxi Organizador", "Blanco", 7700, "imagenes/biblioteca.png", categorias[2]));
  productos.push (new Producto (15, "Mesa de luz 2 cajones", "Wengue", 4000, "imagenes/mesaluz.png", categorias[2]));
  productos.push (new Producto (16, "Cajonera 3 cajones", "Negro", 6000, "imagenes/cajonera.png", categorias[2]));
  productos.push (new Producto (17, "Mesa de luz 1 cajón", "Wengue", 3500, "imagenes/mesaluz2.png", categorias[2]));
  
  console.log (productos);
  
  productostodos(productos, '#productosContenedor');
    

function productostodos(productos, id){
  $(id).empty()
  for (const producto of productos){
    $(id).append (`<div class="card text-center" style="width: 18rem">
                    <div class="card-body">
                    <h6><span class="badge badge-secondary">${producto.categoria}</span></h6>
                    <h5 class="card-title">${producto.nombre}</h5>
                    <h6>${producto.color}</h6>
                    <p class="card-text"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-dollar" viewBox="0 0 16 16">
                    <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"/>
                    </svg>${producto.precio}</p>
                    <img src="${producto.imagen}" style= "height: 150px"></img>
                    <button id="${producto.id}" type="button" class="agregar-carrito btn btn-info"> + Agregar al carrito </button>
                    </div>
                  </div>`);
  }
}


function agregarAlCarrito(e){
  e.preventDefault();
  e.stopPropagation();

  const idProducto = e.target.id;

  const seleccionado = carrito.find(prod => prod.id == idProducto);

  if (seleccionado == undefined){
    carrito.push(productos.find(prod =>prod.id == idProducto));
  } else {
    seleccionado.agregarCantidad(1);
  }

  localStorage.setItem("carrito", JSON.stringify(carrito));

  carritoTotal(carrito);
}


function carritoTotal(productos){
 
  $('#cantidad').html(productos.lenght);

  $('#carrito').empty();

  for (const producto of productos){
  $('#carrito').append(registroCarrito(producto));
  }

  $("#carrito").append(`<p id="totalCarrito"><strong> TOTAL $ ${totalCarrito(productos)}</strong></p>
                        <div id="divConfirmar" class="text-center"><button id="btnConfirmar" class="btn btn-success">Confirmar Compra</button></div>
  `);

  $(".addBoton").click(sumarProductos);
  $(".deleteBoton").click(restarProductos);
  $(".borrar-prod").click(eliminarCarrito);
  $("#btnConfirmar").click(confirmarCompra);
}


function registroCarrito (producto){
  return `<table>
          <tr>
            <td> ${producto.nombre}</td>
            <td> $ ${producto.precio}</td>
            <td class="badge bg-warning"> ${producto.cantidad} </td>
            <td>
            <button class="addBoton btn btn-success"><i class="fas fa-plus-circle" id="${producto.id}"></i></button>
            <button class="deleteBoton btn btn-secondary"><i class="fas fa-minus-circle" id="${producto.id}"></i></button>
            <button class="borrar-prod btn btn-danger"><i class="far fa-trash-alt"></i></button>
            </td>
          </tr>  
          <tfoot>
            <th> Subtotal: $ ${producto.subtotal()}</th>
          </tfoot>
          </table>`;
}

function sumarProductos(e) {
  e.preventDefault();
	let seleccionado = carrito.filter(prod => prod.id == e.target.id);
	for (producto of seleccionado) {
		producto.cantidad += 1;
	}
	carritoTotal(carrito);
	localStorage.setItem("carrito", JSON.stringify(carrito))
}


function restarProductos (e) {
  e.preventDefault();
	let productoCarrito = carrito.filter(prod => prod.id == e.target.id);
	for (producto of productoCarrito) {
    if (producto.cantidad > 1) {
      producto.cantidad--
		}
	}
	carritoTotal(carrito);
}


function eliminarCarrito(e) {
  let posicion = carrito.findIndex (producto => producto.id == e.target.id);
  carrito.splice (posicion, 1);

  carritoTotal(carrito);

  localStorage.setItem("Carrito", JSON.stringify(carrito));
}



function renderizar (lista, id){
  $(id).empty();
  
  for (const item of lista) {
    $(id).append(`<option value='${item}'>${item}</option>`);
  }
}


let botones =$('.btn-info');
for (const boton of botones){
  boton.onclick=agregarAlCarrito;
}


function totalCarrito(carrito) {
  console.log(carrito);
  let total = 0;
  carrito.forEach(p => total += p.subtotal());
  return total.toFixed(1);
}


function confirmarCompra(){

}


