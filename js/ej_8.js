let nombreOperario, sueldoOperario, añosAntigüedad;
var aumento, sueldoTotal;

nombreOperario = prompt('Ingrese el nombre del Operario');
sueldoOperario = parseFloat(prompt('Ingrese el sueldo del Operario'));
añosAntigüedad = parseFloat(prompt('Ingrese los años de antigüedad del Operario'));

if (sueldoOperario < 500000 && añosAntigüedad >= 10) {
    aumento = 20;
    sueldoTotal = ((aumento * sueldoOperario) / 100)+sueldoOperario;
    document.write('<h3>Nombre del operario: ', nombreOperario, '</h3>');
    document.write('<h3>Sueldo: ', sueldoOperario, '</h3>');
    document.write('<h3>Años de antigüedad: ', añosAntigüedad, '</h3>');
    document.write('<h3>Porcentaje de aumento otorgado: ',aumento,'</h3>');
    document.write('<h3>Sueldo Total: ',sueldoTotal,'</h3>');
}

else if (sueldoOperario < 500000 && añosAntigüedad < 10) {
    aumento = 10;
    sueldoTotal = ((aumento * sueldoOperario) / 100)+sueldoOperario;
    document.write('<h3>Nombre del operario: ', nombreOperario, '</h3>');
    document.write('<h3>Sueldo: ', sueldoOperario, '</h3>');
    document.write('<h3>Años de antigüedad: ', añosAntigüedad, '</h3>');
    document.write('<h3>Porcentaje de aumento otorgado: ',aumento,'</h3>');
    document.write('<h3>Sueldo Total: ',sueldoTotal,'</h3>');
}

else if (sueldoOperario > 500000) {
    aumento = 0;
    sueldoTotal = sueldoOperario
    document.write('<h3>Nombre del operario: ', nombreOperario, '</h3>');
    document.write('<h3>Sueldo: ', sueldoOperario, '</h3>');
    document.write('<h3>Años de antigüedad: ', añosAntigüedad, '</h3>');
    document.write('<h3>Porcentaje de aumento otorgado: ',aumento,'</h3>');
    document.write('<h3>Sueldo Total: ',sueldoTotal,'</h3>');
}