// create all possible combinations
// n!, n factorial is the total combinations
var Permutate = /** @class */ (function () {
    function Permutate(arr, algo) {
        this.arr = arr;
    }
    Permutate.prototype.iterate = function () {
        var i;
        for (i = 0; i < this.arr.length; i++) {
            if (this.arr[i] < this.arr[i + 1]) {
                //newArr = algo.process(i, )
            }
        }
    };
    // swap in place to save memory
    Permutate.prototype.swap = function (i1, i2) {
        this.arr[i1], this.arr[i2] = this.arr[i2], this.arr[i1];
        return this.arr;
    };
    return Permutate;
}());
