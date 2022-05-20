function verificar(control) {
    if (control.value.length < 7 || control.value.length > 20) {
        alert('cantidad de caracteres no valido en la clave(deben ser entre 7-20 caracteres)');
    }
}