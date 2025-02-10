class Node {
    constructor(value) {
        this.value=value;
        this.left=null;
        this.right=null;
    }


}


class bstPostOrder {
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


    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);

        }
    }
}

let bst = new bstPostOrder()

bst.insert(4)
bst.insert(7)
bst.insert(5)
bst.insert(3)
bst.insert(9)
bst.insert(1)

bst.postOrder(bst.root)