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
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = newNode;
    }
    this.size++;
  }

  removeByIndex(index) {
    if (this.isEmpty()) {
      console.log("The list have no values");
      return;
    }
    if (index < 0 || index >= this.size) {
      console.log("The indext is out of the bounds");
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      this.size--;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      prev.next = prev.next.next;
      this.size--;
    }
  }

  printList() {
    if (this.isEmpty()) {
      console.log("The list is empty");
      return;
    } else {
      let curr = this.head;
      let listvalues = "";
      while (curr) {
        listvalues += `${curr.value} `;
        curr = curr.next;
      }
      console.log(listvalues);
    }
  }
}

let list = new linkedList();
for (let i = 1; i <= 5; i++) {
  list.append(i);
}
list.printList();

list.removeByIndex(4);
list.printList();
