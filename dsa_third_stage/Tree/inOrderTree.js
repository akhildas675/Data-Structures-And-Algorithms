class Node{
    constructor(value) {
        this.value=value;
        this.left=null;
        this.right=null;

    }
}


class bstInOrder {
    constructor() {
        this.root=null
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
        }else{
            if(root.right===null){
                root.right=newNode;
            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }

    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right)
            
        }
    }
}

let bst = new bstInOrder()

bst.insert(5)
bst.insert(6)
bst.insert(8)
bst.insert(2)
bst.insert(9)
bst.insert(3)

bst.inOrder(bst.root)