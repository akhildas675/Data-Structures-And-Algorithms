class Node {
    constructor(value) {
        this.value=value;
        this.next=null
    }
}

class LinkedList {
    constructor() {
        this.head=null;
        this.size=0
    }

    isEmpty(){
        return this.size===0;
    }

    getSize(){
        return this.size++
    }

    append(value){
        let newNode = new Node(value)
        if (this.isEmpty()) {
            this.head=newNode
        }else{
            let curr = this.head;
            while (curr.next) {
                curr=curr.next
            }
            curr.next=newNode
        }
        this.size++
    }

    preppend(value){
        let newNode =new Node(value)
        if (this.isEmpty()) {
            this.head=newNode
        }else{
            newNode.next=this.head;
            this.head=newNode
        }
        this.size++
    }

   printList(){
    if (this.isEmpty()) {
        console.log('The list is empty');
        return
    }else{
        let curr= this.head;
        let listValue='';
        while (curr) {
            listValue+=`${curr.value} `;
            curr=curr.next
        }
        console.log(listValue);
        
    }
   }
}

let list=new LinkedList()

list.append(1)
list.append(2)
list.append(3)
list.preppend(-1)
list.preppend(-2)
list.preppend(-3)

list.printList()