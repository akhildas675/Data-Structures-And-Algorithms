class Node {
    constructor(value) {
        this.value=value;
        this.left=null;
        this.right=null;
    }

}


class BST{
    constructor(){
        this.root=null;

    }

    isEmpty(){
        return this.root===null;
    }

    insert(value){
        const newNode= new Node(value);
        if(this.isEmpty()){
            this.root=newNode;
        }else{
            this.insertNode(this.root,newNode)
        }
    }

    insertNode(root,node){
        if(node.value<root.value){
            if(root.left===null){
                root.left=node
            }else{
                this.insertNode(root.left,node)
            }
        }else{
            if(root.right===null){
                root.right=node;
            }else{
                this.insertNode(root.right,node)
            }
        }
    }

    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }

    inOrder(root){
        if(root){
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right);
        }
    }

    postOrder(root){
        if(root){
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.value);
        }
    }


}


let bst= new BST();

bst.insert(10)
bst.insert(20)
bst.insert(8)
bst.insert(14)
bst.insert(13)
// bst.preOrder(bst.root);
bst.postOrder(bst.root);



