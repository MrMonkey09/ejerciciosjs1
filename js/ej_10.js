let cantNegativos, cantPositivos, cantMultiplo, parAcumulado;

cantNegativos = 0;
cantPositivos = 0;
cantMultiplo = 0;
parAcumulado = 0;

for (let i = 1; i <= 10; i++) {
    let valor = parseInt(prompt('Ingrese valor N°' + i));
    if (valor < 0) {
        cantNegativos++;
    }
    else {
        if (valor > 0) {
            cantPositivos++;
        }
    }
    if (valor % 15 == 0 && valor != 0) {
        cantMultiplo++;
    }
    if (valor % 2 == 0) {
        parAcumulado = parAcumulado + valor;
    }
}

document.write('<h3>Cantidad de valores negativos: ', cantNegativos, '</h3>');
document.write('<h3>Cantidad de valores positivos: ', cantPositivos, '</h3>');
document.write('<h3>Cantidad de múltiplos de 15: ', cantMultiplo, '</h3>');
document.write('<h3>Suma de los valores pares ingresados: ', parAcumulado, '</h3>');
