function elementFrequency(arr) {
    return arr.reduce((freq, elem) => {
        freq[elem] = (freq[elem] || 0) + 1;
        return freq;
    }, {});
}
console.log(elementFrequency([1, 2, 2, 3, 3, 3])); 


// Output: {1: 1, 2: 2, 3: 3}
