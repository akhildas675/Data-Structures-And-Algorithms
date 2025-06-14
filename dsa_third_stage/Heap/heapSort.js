// class MaxHeap {
//     constructor() {
//       this.heap = [];
//     }
  
//     insert(value) {
//       this.heap.push(value);
//       this.shiftUp(this.heap.length - 1);
//     }
  
//     shiftUp(index) {
//       let parent = Math.floor((index - 1) / 2);
//       while (index > 0 && this.heap[parent] < this.heap[index]) {
//         [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
//         index = parent;
//         parent = Math.floor((index - 1) / 2);
//       }
//     }
  
//     shiftDown(index) {
//       let left = 2 * index + 1;
//       let right = 2 * index + 2;
//       let largest = index;
//       if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
//         largest = left;
//       }
//       if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
//         largest = right;
//       }
  
//       if (largest !== index) {
//         [this.heap[index], this.heap[largest]] = [this.heap[largest],this.heap[index]];
//         this.shiftDown(largest);
//       }
//     }
  
//     remove() {
//       let max = this.heap[0];
//       this.heap[0] = this.heap.pop();
//       this.shiftDown(0);
//       return max;
//     }
  
//     print() {
//       console.log(this.heap.join(" "));
//     }
  
//     heapSort(array){
//       const result = [];
//       for(let i = 0 ; i < array.length ; i++){
//         this.insert(array[i]);
//       }
//       for(let i = 0 ; i < array.length ; i++){
//         result.push(this.remove());
//       }
//       return result;
//     }
    
//   }
  
//   const heap = new MaxHeap();
//   // heap.insert(200);
//   // heap.insert(34);
//   // heap.insert(23);
//   // heap.insert(78);
//   // heap.insert(33);
//   // heap.remove();
  
//   heap.print();
  
//   console.log(heap.heapSort([2, 5, 3, 7, 50]));



function heapSort(arr) {
  const n = arr.length;

  // Build max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  // Extract elements from the heap one by one
  for (let i = n - 1; i > 0; i--) {
    // Move current root to the end
    [arr[0], arr[i]] = [arr[i], arr[0]];
    // Heapify the reduced heap
    heapify(arr, i, 0);
  }
}


function heapify(arr, n, i) {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  // Check if the left child is larger than the root
  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  // Check if the right child is larger than the largest so far
  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  // If the largest is not the root
  if (largest !== i) {
    // Swap the root with the largest element
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    // Recursively heapify the affected subtree
    heapify(arr, n, largest);
  }
}

// Example usage:
const arr = [12, 11, 13, 5, 6, 7];
heapSort(arr);
console.log(arr); // Output: [5, 6, 7, 11, 12, 13]