function findIntersection(arr1, arr2) {
    return arr1.filter(element => arr2.includes(element));
}
console.log(findIntersection([1, 2, 3, 4], [3, 4, 5, 6]));

// Output: [3, 4]
