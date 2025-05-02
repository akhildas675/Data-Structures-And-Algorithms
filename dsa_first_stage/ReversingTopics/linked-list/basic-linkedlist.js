class Node{
    constructor(value) {
        this.value=value;
        this.next=null;
    }
}


class linkedList{
    constructor() {
        this.head=null;
        this.tail=null;
        this.size=0
    }

    isEmpty(){
        return this.size===0
    }

    append(value){
        let newNode= new Node(value);
        if(this.isEmpty()){
            this.head=this.tail=newNode;
        }else{
            this.tail.next=newNode
            this.tail=newNode
        }
        this.size++
    }

    prepend(value){
        let newNode= new Node(value);
        if(this.isEmpty()){
            this.head=newNode;
        }else{
            newNode.next=this.head;
            this.head=newNode
        }

        this.size++
    }

    printList(){
        let curr=this.head;
        let listValues='';
        while(curr){
            listValues+=`${curr.value} -> `
            curr=curr.next
        }

        console.log(listValues)
    }
} 


let list = new linkedList()

list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.append(5)


list.prepend(-1)
list.prepend(-2)
list.prepend(-3)
list.prepend(-4)


list.printList()