function isDivisible(num1, num2) {
    return num2 !== 0 && num1 % num2 === 0 ? true : false;
}
console.log(isDivisible(10, 2)); // Output: true
console.log(isDivisible(10, 3)); // Output: false
console.log(isDivisible(10, 0)); // Output: false
