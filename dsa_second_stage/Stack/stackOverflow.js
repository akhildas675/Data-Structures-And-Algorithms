class Stack {
    constructor(max=5) {
        this.arr=[];
        this.maxSize=max
    }

    isEmpty(){
        return this.arr.length===0;
    }

    getSize(){
        return this.arr.length
    }

    push(value){
        if (this.arr.length>=this.maxSize) {
            return `stack overflow: cannot add more element `
        }
        return this.arr.push(value)
    }   

    print(){
        console.log(this.arr.join('->'));
        
    }

    
}

let stack=new Stack()


stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)
stack.push(6)
stack.push(7)
stack.push(8)


stack.print()
