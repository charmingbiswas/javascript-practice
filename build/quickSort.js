var partitionAlgorithm = function (array, low, high) {
    var i = low;
    var j = high;
    var pivotElement = array[low];
    var swap = function (array, i, j) {
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    };
    while (i < j) {
        while (i < array.length && array[i] <= pivotElement) {
            i++;
        }
        while (j >= 0 && array[j] > pivotElement) {
            j--;
        }
        if (i < j) {
            swap(array, i, j);
        }
    }
    swap(array, j, low);
    return j;
};
var quickSort = function (array, low, high) {
    if (low < high) {
        var pivotIndex = partitionAlgorithm(array, low, high);
        quickSort(array, low, pivotIndex - 1);
        quickSort(array, pivotIndex + 1, high);
    }
};
(function () {
    var unsortedArray = [1, 3, 6, 2, 3, 9, 7, 1];
    quickSort(unsortedArray, 0, unsortedArray.length - 1);
    console.log(unsortedArray);
})();
