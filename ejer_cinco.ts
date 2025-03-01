function IsAdult(age:number) {
    return age>=18 ? `usted es mayor de edad`: `Usted es menor de edad`
}
console.log(IsAdult(18));
console.log(IsAdult(10));
