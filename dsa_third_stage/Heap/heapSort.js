class MaxHeap {
    constructor() {
      this.heap = [];
    }
  
    insert(value) {
      this.heap.push(value);
      this.shiftUp(this.heap.length - 1);
    }
  
    shiftUp(index) {
      let parent = Math.floor((index - 1) / 2);
      while (index > 0 && this.heap[parent] < this.heap[index]) {
        [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
        index = parent;
        parent = Math.floor((index - 1) / 2);
      }
    }
  
    shiftDown(index) {
      let left = 2 * index + 1;
      let right = 2 * index + 2;
      let largest = index;
      if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
        largest = left;
      }
      if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
        largest = right;
      }
  
      if (largest !== index) {
        [this.heap[index], this.heap[largest]] = [this.heap[largest],this.heap[index]];
        this.shiftDown(largest);
      }
    }
  
    remove() {
      let max = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.shiftDown(0);
      return max;
    }
  
    print() {
      console.log(this.heap.join(" "));
    }
  
    heapSort(array){
      const result = [];
      for(let i = 0 ; i < array.length ; i++){
        this.insert(array[i]);
      }
      for(let i = 0 ; i < array.length ; i++){
        result.push(this.remove());
      }
      return result;
    }
    
  }
  
  const heap = new MaxHeap();
  // heap.insert(200);
  // heap.insert(34);
  // heap.insert(23);
  // heap.insert(78);
  // heap.insert(33);
  // heap.remove();
  
  heap.print();
  
  console.log(heap.heapSort([2, 5, 3, 7, 50]));