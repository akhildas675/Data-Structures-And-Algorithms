class QueueUsingStack {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(value) {
    this.stack1.push(value);
  }

  dequeue() {
    if (!this.stack1.length && !this.stack2.length) {
      return "The queue is empty";
    }
    if (!this.stack2.length) {
      while (this.stack1.length) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2.pop();
  }

  print() {
    console.log([...this.stack2.reverse(), ...this.stack1].join(" <- "));
  }
}

let queueS = new QueueUsingStack();
queueS.enqueue(5);
queueS.enqueue(15);
queueS.enqueue(25);
queueS.print();

console.log("Dequeued:", queueS.dequeue());
queueS.print();
