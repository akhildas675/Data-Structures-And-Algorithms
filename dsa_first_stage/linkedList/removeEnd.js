class Node {
    constructor(value) {
        this.value= value;
        this.next=null


    }
}

class linkedList {
    constructor() {
        this.head=null;
        this.size=0
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

    removeEnd(){
        if (this.isEmpty()) {
            console.log('The list is empty');
            return;
        }
        if(this.size==1){
            this.head=null
        }else{
            let prev=this.head
            while (prev.next.next) {
                prev=prev.next
            }
            prev.next=null
        }
        this.size--


    }
    printList(){
        if (this.isEmpty()) {
            console.log('This node is empty');
            
        }else{
            let curr = this.head;
            let listValues="";
            while (curr) {
                listValues+=`${curr.value} `;
                curr=curr.next;
            }
            console.log(listValues);
            

        }
    }
}

let list = new linkedList()

list.append(1)
list.append(2)
list.append(3)
list.append(1)

list.printList()

list.removeEnd()
list.printList()