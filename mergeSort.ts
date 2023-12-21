const merge = (array: number[], low: number, mid: number, high: number) => {
  let i = low;
  let j = mid + 1;
  let k = low;
  let tempSortedArray = new Array(array.length);

  while (i <= mid && j <= high) {
    if (array[i] <= array[j]) {
      tempSortedArray[k] = array[i];
      i++;
      k++;
    } else {
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

  for (let a = low; a <= high; a++) {
    array[a] = tempSortedArray[a];
  }
};

const mergeSort = (array: number[], low: number, high: number): void => {
  if (low < high) {
    let mid = Math.floor(low + (high - low) / 2);
    mergeSort(array, low, mid);
    mergeSort(array, mid + 1, high);
    merge(array, low, mid, high);
  }
};

(function () {
  const unsortedArray = [3, 4, 1, 1, 2, 6, 2, 7, 9, 8, 5, 3];
  mergeSort(unsortedArray, 0, unsortedArray.length - 1);
  console.log(unsortedArray);
})();
