let menor, mayor;
var ok;

menor = 0;
mayor = 0;
ok = "ok";

function menorMayor() {
    prompt('Ingrese 2 números para ordenar de menor a mayor, ingresando primero el número menor',ok);
    let n1 = parseInt(prompt('Ingrese el número menor'));
    let n2 = parseInt(prompt('Ingrese el número mayor'));
    document.write('<h3>Números ingresados: ', n1, ' | ', n2, '</h3>');
    document.write('<h3>Impresion de menor a mayor</h3>');
    for (let i = 1; i <= 2; i++) {
        if (i < 2) {
            if (n1 < n2) {
                menor = n1;
            }
            else {
                menor = n2;
            }
            document.write('<h3>-', menor, '-</h3>');
        }
        else {
            if (n2 > n1) {
                mayor = n2;
            }
            else {
                mayor = n1;
            }
            document.write('<h3>-', mayor, '-</h3>');
        }
    }
}

menorMayor();
