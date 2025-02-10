class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}

class BST {
    constructor() {
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
        }else{
            if(root.right===null){
                root.right=newNode;
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
}

let bst = new BST();

bst.insert(3)
bst.insert(4)
bst.insert(7)
bst.insert(12)
bst.insert(14)
bst.insert(13)
bst.insert(12)
bst.insert(20)

bst.preOrder(bst.root)