let nums : number[] = [1,2,3,4,5,10];
let num: number =0;
for (let index = 0; index < nums.length; index++) {
    if (num<nums[index]) {
        num = nums[index]
    }
}
console.log(num);
