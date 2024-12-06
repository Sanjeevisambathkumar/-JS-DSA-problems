function isSubset(arr1, arr2) {
    return arr1.every(element => arr2.includes(element));
}
console.log(isSubset([1, 2], [1, 2, 3, 4]));
console.log(isSubset([1, 6], [1, 2, 3, 4])); 

// Output: true
// Output: false
