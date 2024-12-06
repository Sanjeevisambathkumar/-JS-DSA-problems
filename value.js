function isNullOrUndefined(value) {
    return value === null || value === undefined;
}
console.log(isNullOrUndefined(null));        // Output: true
console.log(isNullOrUndefined(undefined));   // Output: true
console.log(isNullOrUndefined("hello"));     // Output: false
