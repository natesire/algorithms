function wordEqual(word) {
    var i;
    var sum = 0;
    for (i = 0; i < word.length; i++) {
        // use ASCII encoding with offset
        sum = sum + asciiNum(word[i]);
    }
    return sum;
}
function asciiNum(char) {
    if (char.length > 1) {
        throw 'char length should not be > 1';
    }
    // http://www.asciitable.com/
    // a=1, b=2 ...
    var asciiCode = char.toLowerCase().charCodeAt(0) - 96;
    return asciiCode;
}
console.log("QUARTER is worth");
console.log(wordEqual("QUARTER"));
