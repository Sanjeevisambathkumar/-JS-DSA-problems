function swapNumbers(a, b) {
    a = a + b;
    b = a - b;
    a = a - b;
    return [a, b];
}
let result = swapNumbers(5, 10);
console.log(result); 


// Output: [10, 5]
