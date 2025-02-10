class Node {
    constructor(value) {
        this.value=value;
        this.next=null;
        this.prev=null;
    }
}

class linkedList {
    constructor() {
        this.head=null;
        this.tail=null;
        this.size=0;
    }

    isEmpty(){
        return this.size===0;

    }
    getSize(){
        return this.size;
    }
    append(value){
        let newNode= new Node(value);

        if(this.isEmpty()){
            this.head = this.tail = newNode
            
        }else{
            this.tail.next=newNode;
            newNode.prev=this.tail;
            this.tail=newNode
        }
        this.size++

        
    }
    preppend(value){
        let newNode=new Node(value)
        if(this.isEmpty()){
            this.head=this.tail=newNode;
        }else{
            newNode.next=this.head;
            this.head.prev=newNode;
            this.head=newNode;
        }
        this.size++;
    }                                                                     

    reverse(){
        let curr=this.head;
        let temp=null;
        while (curr) {
            temp=curr.next;
            curr.prev=curr.next;
            curr.next=temp;
            curr=curr.prev
        }
        if(temp){
            this.tail=this.head;
            this.head=temp.prev
        }
    }

    printForward(){
        let curr=this.head;
        let result='';
        while (curr) {
            result+=`${curr.value} `;
            curr=curr.next
        }
        console.log(result);
        
    }

    printBackward(){
        let curr=this.tail;
        let result="";
        while (curr) {
            result+=`${curr.value} `;
            curr=curr.prev
        }
        console.log(result);
        
    }

}

let list = new linkedList()

list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.printForward()
list.printBackward()

list.reverse()
list.printForward()
list.printBackward()