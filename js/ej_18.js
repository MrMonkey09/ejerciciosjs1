function duplicar() {
        let n = document.getElementById('num').innerHTML;
        n = parseInt(n);
        let resultado = n * 2;
        document.getElementById('num').innerHTML = resultado;
}