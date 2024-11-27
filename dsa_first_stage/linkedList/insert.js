class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class linkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    append(value) {
        let newNode = new Node(value);
        if (this.isEmpty()) {
            this.head = newNode;
        } else {
            let prev = this.head;
            while (prev.next) {
                prev = prev.next;
            }
            prev.next = newNode;
        }
        this.size++;
    }

    preppend(value) {
        let newNode = new Node(value);
        if (this.isEmpty()) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
    }

    insert(value, index) {
        if (index < 0 || index > this.size) {
            console.log('index out of bounds');
            return;
        }

        const newNode = new Node(value); 
        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            newNode.next = prev.next;
            prev.next = newNode;
        }
        this.size++;
    }

    printList() {
        if (this.isEmpty()) {
            console.log('This is empty');
        } else {
            let prev = this.head;
            let listValue = '';
            while (prev) {
                listValue += `${prev.value} -> `;
                prev = prev.next; 
            }
            console.log(listValue);
        }
    }
}

let list = new linkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.preppend(0);
list.preppend(-1);
list.preppend(-2);
list.insert(6,8)

list.printList();
