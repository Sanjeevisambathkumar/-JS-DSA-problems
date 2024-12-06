function findMaximum(arr) {
    if (arr.length === 0) return null;
    return Math.max(...arr);
}
console.log(findMaximum([3, 5, 7, 2, 8]));
