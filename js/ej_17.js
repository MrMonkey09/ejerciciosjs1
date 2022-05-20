let numeros, n;
var suma;

numeros = [];
suma = 0;

function ingresarValores() {
    for (i = 0; i < 2; i++) {
        n = prompt('Ingrese un valor');
        while (true) {
            if (!isNaN(n) && n != null && n != "") {
                break;
            }
            else {
                n = prompt('Valor ingresado erroneo, ingrese un valor NUMERICO por favor');
            }
        }
        numeros.push(parseFloat(n));
        document.write('<h3>Valor ', (i + 1), ' ingresado: ', n, '</h3>');
    };
}

function sumaNum() {
    numeros.forEach(function (elemento) {
        suma = suma + elemento;
    })
    document.write('<h3>Valor total de tus 2 números: ', suma, '</h3>');
}

ingresarValores();
sumaNum();

