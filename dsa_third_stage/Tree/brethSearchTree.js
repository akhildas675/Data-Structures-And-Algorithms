class Node {
    constructor(value) {
        this.value=value;
        this.left=null;
        this.right=null;
    }
}

class brethSearchTree{
    constructor(){
        this.root=null;
    }

    insert(value){
        let newNode = new Node(value);
        if(this.root===null){
            this.root=newNode;
        }else{
            this.insertNode(this.root,newNode)
        }
    }

    insertNode(root,newNode){
        if(newNode.value<root.value){
            if(root.left===null){
                root.left=newNode;
            }else{
                this.insertNode(root.left,newNode)
            }
        }else if(newNode.value>root.value){
            if(root.right===null){
                root.right=newNode 
            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }

    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    bfs(){
        const queue=[];
        let count=0;
        queue.push(this.root);
        while(queue.length){
            let current = queue.shift();
            count++
            console.log(current.value);
            if(current.left)
                queue.push(current.left)
            if(current.right)
                queue.push(current.right)
        }
        console.log("number of nodes",count);
        
    }
}

let bst = new brethSearchTree();


bst.insert(6)
bst.insert(11)
bst.insert(8)
bst.insert(4)
bst.insert(6)
bst.insert(7)

bst.preOrder(bst.root)

// bst.bfs()