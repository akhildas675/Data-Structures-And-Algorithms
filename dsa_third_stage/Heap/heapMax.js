class MaxHeap {
    constructor() {
        this.heap = []
    }

    insert(value) {
        this.heap.push(value)
        this.bubbleUp()
    }

    bubbleUp() {
        let index = this.heap.length - 1
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2)
            if (this.heap[index] <= this.heap[parentIndex]) break;

            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]]
            index = parentIndex
        }
    }

    extractMax() {
        if (this.heap.length == 0) return null
        if (this.heap.length == 1) return this.heap.pop()

        const max = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapify(0)
        return max
    }

    heapify(index) {
        let leftChildIndex = 2 * index + 1
        let rightChildIndex = 2 * index + 2
        let largest = index
        if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] > this.heap[largest]) {
            largest = leftChildIndex
        }
        if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[largest]){
            largest = rightChildIndex
        }
        if(largest != index){
            [this.heap[largest],this.heap[index]]=[this.heap[index],this.heap[largest]]
            this.heapify(largest)
        }
    }
}
const maxHeap = new MaxHeap();
maxHeap.insert(4);
maxHeap.insert(10);
maxHeap.insert(8);
maxHeap.insert(5);
maxHeap.insert(1);

console.log(maxHeap.heap); // Output: [10, 5, 8, 4, 1]
console.log(maxHeap.extractMax()); // Output: 10
console.log(maxHeap.heap); // Output: [8, 5, 1, 4]




