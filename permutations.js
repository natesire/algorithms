// create all possible combinations
// n!
// 4*3*2*1
var Permutate = /** @class */ (function () {
    function Permutate(itemsArr) {
        var ;
        this.itemsArr;
        number[];
        this.itemsArr = itemsArr;
    }
    Permutate.prototype.sort = function () {
        var i;
        for (i = 0; i < arr.length; i++) {
            if (arr[i] < arr[i + 1]) {
                arr = swap(arr, i, i + 1);
            }
        }
    };
    // swap in place to save memory
    Permutate.prototype.swap = function (i1, i2) {
        arr[n1], arr[n2] = arr[n2], arr[n1];
        return array;
    };
    return Permutate;
}());
var items;
items = [1, 2, 3];
permutate = Permutate["new"](items);
