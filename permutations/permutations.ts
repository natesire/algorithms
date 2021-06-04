// create all possible combinations
// n!, n factorial is the total combinations
class Permutate {

	public arr : number[];

	constructor(arr: number[], algo) {
		this.arr = arr 
	}

	iterate() {
		var i:number
		for(i=0; i < this.arr.length; i++) {
			if(this.arr[i] < this.arr[i+1]) {
				//newArr = algo.process(i, )
			}
		}	
	}

	// swap in place to save memory
	swap(i1, i2) {
		this.arr[i1], this.arr[i2] = this.arr[i2], this.arr[i1]
		return this.arr;
	}

}

