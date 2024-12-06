function sortByLength(arr) {
    return arr.sort((a, b) => a.length - b.length);
}
console.log(sortByLength(["apple", "kiwi", "banana", "cherry"])); 



// Output: ["kiwi", "apple", "cherry", "banana"]
