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

  deleteByValue(value) {
    if (this.isEmpty()) {
      console.log("The node is empty");
      return;
    }
    if (this.head === value) {
      this.head = this.head.next;
      this.size--;
    } else {
      let prev = this.head;
      while (prev.next && prev.next.value !== value) {
        prev = prev.next;
      }

      if (prev.next) {
        prev.next = prev.next.next;
        this.size--;
      } else {
        console.log("No value in this node");
      }
    }
  }

  printList() {
    if (this.isEmpty()) {
      console.log("The list it empty");
      return;
    } else {
      let curr = this.head;
      let listValue = "";
      while (curr) {
        listValue += `${curr.value} `;
        curr = curr.next;
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

list.printList();
list.deleteByValue(4);
list.printList();
