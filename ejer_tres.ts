let names: string[] = ["luis","kevin","jose","mao"]
names.forEach(element => {
    console.log(element);
});
for (let index = 0; index < names.length; index++) {
    let element = names[index];
    console.log(element);
}
for (const iterator of names) {
    console.log(iterator);
}
