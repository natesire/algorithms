# must define function before calling it unlike in NodeJS
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
