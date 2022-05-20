function calcularPresupuesto() {
    let elemento1 = document.getElementById('procesador')
    let precio1 = elemento1.options[elemento1.selectedIndex].value;
    let elemento2 = document.getElementById('monitor')
    let precio2 = elemento2.options[elemento2.selectedIndex].value;
    let elemento3 = document.getElementById('hdd')
    let precio3 = elemento3.options[elemento3.selectedIndex].value;
    precio1 = parseFloat(precio1);
    precio2 = parseFloat(precio2);
    precio3 = parseFloat(precio3);
    let suma = precio1 + precio2 + precio3;
    document.getElementById('resultado').value = suma;
}