function getDataType(variable) {
    return typeof variable;
}
console.log(getDataType(123));       // Output: "number"
console.log(getDataType("hello"));   // Output: "string"
console.log(getDataType([1, 2, 3])); // Output: "object"
console.log(getDataType(null));      // Output: "object"
