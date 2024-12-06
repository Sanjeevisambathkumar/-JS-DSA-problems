function capitalizeWords(sentence) {
    return sentence
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
}
console.log(capitalizeWords("hi all ! this is javascript.")); 


// Output: "hi all ! this is javascript."
