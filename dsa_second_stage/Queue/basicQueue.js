// class Queue{
//     constructor(){
//         this.arr=[];

//     }

//     isEmpty(){
//         return this.arr.length===0;
//     }

//     getSize(){
//         return this.arr.length;
//     }

//     enqueue(element){
//         this.arr.push(element)
//     }

//     dequeue(){
//         if (this.isEmpty()) {
//             return `The queue is empty`
//         }
//         return this.arr.shift()
//     }

//     print(){
//         console.log(this.arr.join(' -> '))
//     }
// }

// let queue = new Queue()

// queue.enqueue(1)
// queue.enqueue(2)
// queue.enqueue(3)
// queue.enqueue(4)

// queue.dequeue()
// queue.print()



class Queue {
    constructor() {
        this.item=[]
    }


    enqueue(value){
        return this.item.push(value)
    }

    dequeue(){
        if(this.isEmpty()){
            return `The Queue is empty`
        }
        return this.item.shift()
    }

    isEmpty(){
        return this.item.length===0;
    }

    peek(){
        if (this.isEmpty()) {
            return `The stack is empty`
        }
        return this.item[this.item[0]]
    }
    print(){
        if (this.isEmpty()) {
            return `The queue is empty`
        }
        console.log(this.item.join(" -> "));
        
    }


}

let queue= new Queue()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)

console.log(queue.peek());

queue.dequeue()

queue.print()
