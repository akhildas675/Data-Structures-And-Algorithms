class node {
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

  append(value) {
    let newNode = new node(value);

    if (this.isEmpty()) {
      this.head = newNode;
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = newNode;
    }

    this.size++;
  }

  preppend(value) {
    let newNode = new node(value);
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
      return `The Index is out of the bounds`;
    }
    let newNode = new node(value);
    if (index === 0) {
      this.head = value;
    } else {
      let temp = this.head;
      for (let i = 0; i < index - 1; i++) {
        temp = temp.next;
      }
      newNode.next = temp.next;
      temp.next = newNode;
    }
    this.size++;
  }

  removeFirst() {
    if (this.isEmpty()) {
      console.log("The list is empty");
      return;
    } else {
      this.head = this.head.next;
      this.size--;
    }
  }

  removeEnd() {
    if (this.isEmpty()) {
      console.log("The list is empty");
      return;
    }

    if (this.size === 1) {
      this.head = null;
    } else {
      let temp = this.head;
      while (temp.next.next) {
        temp = temp.next;
      }
      if (temp.next) {
        temp.next = null;
      }
      this.size--;
    }
  }

  deleteByValue(value) {
    if (this.isEmpty()) {
      console.log("The list is empty");
      return;
    }

    if (this.head === value) {
      this.head = this.head.next;
      this.size--;
    } else {
      let temp = this.head;
      while (temp.next && temp.next.value !== value) {
        temp = temp.next;
      }
      if (temp.next) {
        temp.next = temp.next.next;
        this.size--;
      } else {
        console.log("There is no  value in the list");
        return;
      }
    }
  }

  deleteByIndex(index) {
    if (index < 0 || index > this.size) {
      return `The Index is out of the bounds`;
    }
    if (index === 0) {
      this.head = null;
      this.size--;
    } else {
      let temp = this.head;
      for (let i = 0; i < index - 1; i++) {
        temp = temp.next;
      }
      if (temp.next) {
        temp.next = temp.next.next;
        this.size--;
      }
    }
  }

  reverseList() {
    if (this.isEmpty()) {
      return `The list is empty`;
    } else {
      let curr = this.head;
      let temp = null;
      while (curr) {
        let next = curr.next;
        curr.next = temp;
        temp = curr;
        curr = next;
      }

      this.head = temp;
    }
  }

  middle() {
    if (this.isEmpty()) {
      return `The list is empty`;
    } else {
      let fast = this.head;
      let slow = this.head;

      while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
      }

      return slow.value;
    }
  }

  printList() {
    let curr = this.head;
    let listValues = "";
    while (curr) {
      listValues += `${curr.value} -> `;
      curr = curr.next;
    }

    console.log(listValues);
  }
}

let list = new linkedList();

list.append(1);
list.append(2);
list.append(2);
list.append(3);
list.append(4);

console.log("The append values");

list.printList();

list.preppend(0);
list.preppend(-1);
list.preppend(-2);
list.preppend(3);

console.log("The preppend values");

list.printList();

list.insert(0, 4);

console.log("The insert value");

list.printList();

list.removeFirst();

console.log("remove fist value");

list.printList();

list.removeEnd();

console.log("remove End value");

list.printList();

list.deleteByValue(2);

console.log("remove by value");

list.printList();

list.deleteByIndex(3);

console.log("remove by index");

list.printList();

list.reverseList();

console.log("remove by value");

list.printList();

console.log("Middle ele", list.middle());
