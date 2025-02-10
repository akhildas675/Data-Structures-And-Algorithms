class stack {
    constructor() {
        this.item = [];
    }

    push(data) {
        return this.item.push(data);
    }

    pop() {
        if (!this.item.length) {
            return `The list is empty`;
        }
        return this.item.pop();
    }

    peek() {
        return this.item[this.item.length - 1];
    }

    print() {
        console.log(this.item.join("->"));
    }

    sort() {
        let tempStack = new stack();

        while (this.item.length) {
            let temp = this.pop();
            while (tempStack.item.length && tempStack.peek() < temp) {
                this.push(tempStack.pop());
            }

            tempStack.push(temp);
        }

        while (tempStack.item.length) {
            this.push(tempStack.pop());
        }
    }
}

let stacks = new stack();

stacks.push(4);
stacks.push(1);
stacks.push(3);
stacks.push(2);

console.log("Before sorting:");
stacks.print();

stacks.sort();

console.log("After sorting:");
console.log(stacks.pop());
console.log(stacks.peek());
stacks.print();
