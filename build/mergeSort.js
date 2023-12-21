var merge = function (array, low, mid, high) {
    var i = low;
    var j = mid + 1;
    var k = low;
    var tempSortedArray = new Array(array.length);
    while (i <= mid && j <= high) {
        if (array[i] <= array[j]) {
            tempSortedArray[k] = array[i];
            i++;
            k++;
        }
        else {
            tempSortedArray[k] = array[j];
            k++;
            j++;
        }
    }
    while (i <= mid && array[i]) {
        tempSortedArray[k] = array[i];
        k++;
        i++;
    }
    while (j <= high && array[j]) {
        tempSortedArray[k] = array[j];
        k++;
        j++;
    }
    for (var a = low; a <= high; a++) {
        array[a] = tempSortedArray[a];
    }
};
var mergeSort = function (array, low, high) {
    if (low < high) {
        var mid = Math.floor(low + (high - low) / 2);
        mergeSort(array, low, mid);
        mergeSort(array, mid + 1, high);
        merge(array, low, mid, high);
    }
};
(function () {
    var unsortedArray = [3, 4, 1, 1, 2, 6, 2, 7, 9, 8, 5, 3];
    mergeSort(unsortedArray, 0, unsortedArray.length - 1);
    console.log(unsortedArray);
})();
