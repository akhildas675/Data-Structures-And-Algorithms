class node {
    constructor(value) {
        this.value=value;
        this.next=null;
    }
}

class appendList {
    constructor() {
        this.head=null;
        this.size=0;
    }

    isEmpty(){
        return this.size===0;
    }
    getSize(){
        return this.size;
    }

    append(value){
        let newNode = new node(value)
        if (this.isEmpty()) {
            this.head= newNode;
        }else{
            let curr = this.head;
            while (curr.next) {
                curr=curr.next
            }
            curr.next=newNode
        }
        this.size++
    }

    printList(){
        if (this.isEmpty()) {
            console.log('The Node is empty');
            return;
        }else{
            let curr = this.head;
            let listValues='';
            while (curr) {
                listValues+=`${curr.value} `;
                curr=curr.next
            }
            console.log(listValues); 
            
        }
    }
}

let list =new appendList()

list.append(1)
list.append(2)
list.append(3)
list.append(4)

list.printList()