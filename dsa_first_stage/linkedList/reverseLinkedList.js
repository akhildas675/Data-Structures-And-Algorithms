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
  isEmpty(){
    return this.size===0;
  }
  getSize(){
    return this.size
  }

  append(value){
    let newNode = new Node(value);
    if (this.isEmpty()) {
        this.head=newNode;
    }else{
        let curr = this.head;
        while (curr.next) {
            curr=curr.next
        }
        curr.next=newNode
    }
    this.size++
  }

  reverseList(){
    let prev =null;
    let curr = this.head;
    while (curr) {
        let next = curr.next;
        curr.next=prev;
        prev=curr;
        curr = next
    }
    this.head=prev
  }


  printList(){
    if (this.isEmpty()) {
        console.log('This list is empty');
        return;
    }else{
        let curr =this.head;
        let listValue='';
        while (curr) {
            listValue+=`${curr.value} -> `;
            curr=curr.next;
        }
        console.log(listValue);
        
    }
  }
}

let list = new linkedList()

list.append(1)
list.append(2)
list.append(3)
list.append(4)

list.printList()
list.reverseList()
list.printList()
