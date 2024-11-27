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
            curr=curr.next;
        }
        curr.next=newNode
    }
    this.size++
  }

  removeFirst(){
    if (this.isEmpty()) {
        console.log('This list is empty');
        
    }else{
        this.head=this.head.next;
        this.size--
    }
  }
  printList(){
    if (this.isEmpty()) {
        console.log('This list is empty');
        return;
    }else{
        let curr =this.head;
        let listValues='';
        while (curr) {
            listValues+=`${curr.value} `;
            curr=curr.next;

        }
        console.log(listValues);
        

    }
  }
}

let list = new linkedList();

list.append(1)
list.append(2)
list.append(3)
list.append(1)
list.removeFirst()
list.printList()