
class Producto {
  constructor (id, nombre, color, precio, imagen, categoria, cantidad) {
    this.id =parseInt (id);
    this.nombre= nombre; 
    this.color = color;
    this.precio = parseFloat (precio);
    this.imagen = imagen;
    this.categoria = categoria;
    this.cantidad = cantidad || 1;
  }

    agregarCantidad (valor) {
    this.cantidad = this.cantidad + valor;
  }

    subtotal() {
      return this.cantidad * this.precio;
  }

    restarCantidad (valor){
    this.cantidad -= valor;
  }
}