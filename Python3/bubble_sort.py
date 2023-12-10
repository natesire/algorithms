class BubbleSort:
    def __init__(self, arr):
        self.arr = arr;
    
    def sort(self):
        sorted = self.arr;
    
        # for each element in the array
        for i in range(len(sorted)):
            # for each element in the array
            for j in range(len(sorted)):
                # < will produce ascending, > will produce descending
                if sorted[i] > sorted[j]:
                    # swap the elements
                    temp = sorted[i];
                    sorted[i] = sorted[j];
                    sorted[j] = temp;
    
        return sorted;

    def swap(self, i1, i2):
        temp1 = self.arr[i1];
        temp2 = self.arr[i2];
        self.arr[i1] = temp2;
        self.arr[i2] = temp1;

def bubble_sort(arr):
    sorted = arr;

    # for each element in the array
    for i in range(len(sorted)):
        # for each element in the array
        for j in range(len(sorted)):
            # < will produce ascending, > will produce descending
            if sorted[i] > sorted[j]:
                # swap the elements
                temp = sorted[i];
                sorted[i] = sorted[j];
                sorted[j] = temp;

    return sorted;

print(bubble_sort([1,0,3,2,5,4]))
