let n1,n2,n3,n4;
var suma,producto;

n1 = parseFloat(prompt('Ingrese el primer número'));
n2 = parseFloat(prompt('Ingrese el segundo número'));
n3 = parseFloat(prompt('Ingrese el tercer número'));
n4 = parseFloat(prompt('Ingrese el cuarto número'));
suma = n1+n2+n3+n4;
producto = n1*n2*n3*n4;

document.write('<h3>Los números ingresados son: ',parseFloat(n1),' | ',parseFloat(n2),' | ',parseFloat(n3),' | ',parseFloat(n4),'</h3>');
document.write('<h3>La suma entre todos los números es: ',suma,'</h3>');
document.write('<h3>El producto entre todos los números es: ',producto,'</h3>');