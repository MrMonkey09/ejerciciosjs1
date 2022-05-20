let menor, mayor, promedio;
var listaN;

listaN = [];
menor = 0;
mayor = 0;
promedio = 0;

function menorMayor(listaN) {
    document.write('<h3>Números ingresados</h3>');
    document.write('<h3>', listaN[0], ' | ', listaN[1], ' | ', listaN[2], '</h3>');
    document.write('<br>');
    document.write('<h3>Proceso de organizacion</h3>');
    for (let i = 0; i < 3; i++) {
        if (i == 0) {
            menor = listaN[i];
            document.write('<h3>Número menor de referencia definido: ', menor, '</h3>');
            promedio = listaN[i];
            document.write('<h3>Número promedio de referencia definido: ', promedio, '</h3>');
            mayor = listaN[i];
            document.write('<h3>Número mayor de referencia definido: ', mayor, '</h3>');
            document.write('<br>');
        }
        else {
            if (listaN[i] < menor && listaN[i] < promedio) {
                promedio = menor;
                menor = listaN[i];
                document.write('<h3>Número menor actualizado: ', menor, '</h3>');
            }
            if (listaN[i] > mayor && listaN[i] > promedio) {
                promedio = mayor;
                mayor = listaN[i];
                document.write('<h3>Número mayor actualizado: ', mayor, '</h3>');
            }
            if (listaN[i] < mayor && listaN[i] > menor) {
                promedio = listaN[i];
                document.write('<h3>Número promedio actualizado: ', promedio, '</h3>');
            }
        }
    }
    document.write('<br>');
    document.write('<h3>Impresion de números en orden menor a mayor</h3>');
    document.write('<h3>', menor,' | ',promedio,' | ', mayor, '</h3>');
}

for (let i = 0; i < 3; i++) {
    let n = parseInt(prompt('Ingrese un número'));
    listaN.push(n);
}
menorMayor(listaN);
