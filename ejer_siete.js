var nums = [1, 2, 3, 4, 5, 10];
var num = 0;
for (var index = 0; index < nums.length; index++) {
    if (num < nums[index]) {
        num = nums[index];
    }
}
console.log(num);
