function IsEven(num) {
    return num % 2 == 0 ? "el ".concat(num, " es par") : "el ".concat(num, " es impar");
}
console.log(IsEven(2));
console.log(IsEven(23));
