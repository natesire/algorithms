// create all possible combinations
// n!, n factorial is the total combinations
	process() {
		var i:number
		for(i=0; i < arr.length; i++) {
			if(arr[i] < arr[i+1]) {
				arr = swap(arr, i, i+1)
			}
		}	
	}

function isEven?() : boolean {
	if(n % 2 === 0) { return true }
	return false
}

module.exports = {
	process
}
