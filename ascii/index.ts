function wordSum(word:string) : number {
	var i:number = 0;
	var sum:number = 0;
	for(i=0; i<word.length; i++) {
		sum += asciiNum(word[i])
	}
	return sum;
}

function asciiNum(char:string) : number {
		if(char.length > 1) { throw 'char length should not be > 1' }
		// http://www.asciitable.com/
		// a=1, b=2 ...
    let asciiCode = char.toLowerCase().charCodeAt(0) - 96
		return asciiCode;
}

console.log("QUARTER is worth num");
console.log(wordSum("QUARTERSD"));
