let precioArticulo,cantidadArticulo;
var total;

precioArticulo = parseFloat(prompt('Ingrese el precio del articulo'));
cantidadArticulo = parseFloat(prompt('Ingrese la cantidad a vender'));
total = precioArticulo*cantidadArticulo;

document.write('<h3>El valor del articulo es: ',parseFloat(precioArticulo),'</h3>');
document.write('<h3>La cantidad a vender es: ',parseFloat(cantidadArticulo),'</h3>');
document.write('<h3>El total de la venta es: ',total,'</h3>');