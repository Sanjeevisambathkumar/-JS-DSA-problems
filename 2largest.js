function findSecondLargest(arr) {
    if (arr.length < 2) return null;
    let uniqueElements = [...new Set(arr)];
    uniqueElements.sort((a, b) => b - a);
    return uniqueElements[1] || null;
}
console.log(findSecondLargest([1, 3, 4, 5, 0, 2, 4]));

// Output: 4
