/* Create a function to read the value form textbox with id "numbers"
 * Split the value by comma, convert all the values to number and store it in an array
 * Sort the array in ascending order using all the sorting algorithms
 * Display the sorted array in the div with id "sort_result"
 */

// Create a function "readInput" to read the value from the textbox and convert it into an array
function readInput() {
    let arr = document.getElementById('numbers').value.split(',');
    arr = arr.map(Number);
    return arr;
  }
  
  // Create a function "bubbleSort" to sort the array using bubble sort algorithm
  function bubbleSort(arr) {
    let n = arr.length;
    let temp;
    let swap = false;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          swap = true;
        }
      }
      if (!swap) {
        break;
      }
    }
    document.getElementById('sort_result').innerHTML += '<br>Bubble Sort: ' + arr;
  }
  
  // Create a function "selectionSort" to sort the array using selection sort algorithm
  function selectionSort(arr) {
    let n = arr.length;
    let temp;
    let minIndex;
    for (let i = 0; i < n - 1; i++) {
      minIndex = i;
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
    document.getElementById('sort_result').innerHTML +=
      '<br>Selection Sort: ' + arr;
  }
  
  // Create a function "insertionSort" to sort the array using insertion sort algorithm
  function insertionSort(arr) {
    let n = arr.length;
    let temp;
    let j;
    for (let i = 1; i < n; i++) {
      temp = arr[i];
      j = i - 1;
      while (j >= 0 && arr[j] > temp) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = temp;
    }
    document.getElementById('sort_result').innerHTML +=
      '<br>Insertion Sort: ' + arr;
  }
  
  // Create a function "mergeSort" to sort the array using merge sort algorithm
  function mergeSort(arr) {
    let n = arr.length;
    if (n < 2) {
      return arr;
    }
    let mid = Math.floor(n / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
  }
  
  function merge(left, right) {
    let result = [];
    let i = 0,
      j = 0;
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        result.push(left[i++]);
      } else {
        result.push(right[j++]);
      }
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
  }
  
  // Create a function "quickSort" to sort the array using quick sort algorithm
  function quickSort(arr, low, high) {
    if (low < high) {
      let pi = partition(arr, low, high);
      quickSort(arr, low, pi - 1);
      quickSort(arr, pi + 1, high);
    }
  }
  
  function partition(arr, low, high) {
    let pivot = arr[high];
    let i = low - 1;
    let temp;
    for (let j = low; j < high; j++) {
      if (arr[j] < pivot) {
        i++;
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
    temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;
    return i + 1;
  }
  
  // Create a function "heapSort" to sort the array using heap sort algorithm
  function heapSort(arr) {
    let n = arr.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapify(arr, n, i);
    }
    for (let i = n - 1; i > 0; i--) {
      let temp = arr[0];
      arr[0] = arr[i];
      arr[i] = temp;
      heapify(arr, i, 0);
    }
    document.getElementById('sort_result').innerHTML += '<br>Heap Sort: ' + arr;
  }
  
  function heapify(arr, n, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    let temp;
    if (left < n && arr[left] > arr[largest]) {
      largest = left;
    }
    if (right < n && arr[right] > arr[largest]) {
      largest = right;
    }
    if (largest != i) {
      temp = arr[i];
      arr[i] = arr[largest];
      arr[largest] = temp;
      heapify(arr, n, largest);
    }
  }
  
  // Create a function "sortNumbers" to call all the sorting algorithms and display the result
  function sortNumbers() {
    let arr = readInput();
    document.getElementById('sort_result').innerHTML = 'Original Array: ' + arr;
    bubbleSort(arr.slice());
    selectionSort(arr.slice());
    insertionSort(arr.slice());
    mergeSort(arr.slice());
    quickSort(arr.slice(), 0, arr.length - 1);
    heapSort(arr.slice());
  }
  