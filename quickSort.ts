const partitionAlgorithm = (
  array: number[],
  low: number,
  high: number
): number => {
  let i = low;
  let j = high;
  let pivotElement = array[low];

  const swap = (array: number[], i: number, j: number) => {
    const temp = array[i];
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

const quickSort = (array: number[], low: number, high: number) => {
  if (low < high) {
    let pivotIndex = partitionAlgorithm(array, low, high);

    quickSort(array, low, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, high);
  }
};

(function () {
  let unsortedArray = [1, 3, 6, 2, 3, 9, 7, 1];
  quickSort(unsortedArray, 0, unsortedArray.length - 1);
  console.log(unsortedArray);
})();
