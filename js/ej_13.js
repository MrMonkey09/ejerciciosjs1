let vector, n;
var acumulador, acumulador36, cantidad50;

vector = [];
acumulador = 0;
acumulador36 = 0;
cantidad50 = 0;

function ingresarValores() {
    for (i = 0; i < 8; i++) {
        n = prompt('Ingrese un valor');
        while (true) {
            if (!isNaN(n) && n != null && n != "") {
                break;
            }
            else {
                n = prompt('Valor ingresado erroneo, ingrese un valor NUMERICO por favor');
            }
        }
        vector.push(parseFloat(n));
        document.write('<h3>Valor ',(i+1),' ingresado al arreglo: ', n, '</h3>');
    };
    document.write('<br>');
    document.write('<h3>Arreglo ingresado: </h3>');
    document.write('<h3>', vector.join(' | '), '</h3>');
    document.write('<br>');
}

function valorAcumulado() {
    vector.forEach(function (elemento) {
        acumulador = acumulador + elemento;
    })
    document.write('<h3>Valor total acumulado del arreglo: ', acumulador, '</h3>');

    vector.forEach(function (elemento) {
        if (elemento > 36) {
            acumulador36 = acumulador36 + elemento;
        }
    })
    document.write('<h3>Valor acumulado del arreglo de números mayores a 36: ', acumulador36, '</h3>');
}

function cantidadValores() {
    vector.forEach(function (elemento) {
        if (elemento > 50) {
            cantidad50 = cantidad50 + 1;
        }
    })
    document.write('<h3>Cantidad de números del arreglo mayores a 50: ', cantidad50, '</h3>');
}

ingresarValores();
valorAcumulado();
cantidadValores();
