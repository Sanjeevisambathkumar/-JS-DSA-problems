function containsOnlyDigits(str) {
    return /^\d+$/.test(str);
}
console.log(containsOnlyDigits("12345")); // Output: true
console.log(containsOnlyDigits("123a5")); // Output: false
