function areAnagrams(str1, str2) {
    const normalize = str => str.toLowerCase().replace(/[^a-z0-9]/g, "").split("").sort().join("");
    return normalize(str1) === normalize(str2);
}
console.log(areAnagrams("listen", "silent")); 
console.log(areAnagrams("hello", "world"));   
