function Multiplicacion(num1, num2) {
    if (typeof num2 == 'undefined') {
        return num1 * 2;
    }
    else {
        return num1 * num2;
    }
}
console.log("Un numero = " + Multiplicacion(2));
console.log("Dos numeros = " + Multiplicacion(2, 3));
