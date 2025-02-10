// bubble sort in linkedlist


class node {
    constructor(value) {
        this.value=value;
        this.next=null;
    }
}

class bubbleLinkedlist {
    constructor() {
        this.head=null;
        this.tail=null;
        this.size=0;
    }


    isEmpty(){
        return this.size===0
    }

    append(value){
        let newNode = new node(value);

        if (this.isEmpty()) {
            this.head=newNode;
            this.tail=newNode;
        } else {
            this.tail.next=newNode;
            this.tail=newNode;
        }
        this.size++
    }

    printList(){
        let curr=this.head;
        let listvalue='';
        while (curr) {
            listvalue+=`${curr.value} -> `;
            curr=curr.next;
        }
        console.log(listvalue);
        
    }

    bubble(){
        let swapped;
        do {
            swapped=false;
            let curr=this.head;
            while (curr.next) {
                if (curr.value>curr.next.value) {
                    let temp=curr.value;
                    curr.value=curr.next.value;
                    curr.next.value=temp;
                    swapped=true;
                }
                curr=curr.next
            }
        } while (swapped);
    }
}

let list=new bubbleLinkedlist()


list.append(5)
list.append(9)
list.append(3)
list.append(8)
list.append(2)

list.printList()

list.bubble()

list.printList()