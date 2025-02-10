class Node {
    constructor(value) {
        this.value=value;
        this.left=null;
        this.right=null;
    }
}


class deleteInTree{
    constructor(){
        this.root=null;
    }


    insert(value){
        let newNode = new Node(value)
        if(this.root===null){
            this.root=newNode
        }else{
            this.insertNode(this.root,newNode)
        }
    }

    insertNode(root,newNode){
        if(newNode.value<root.value){
            if(root.left===null){
                root.left=newNode
            }else{
                this.insertNode(root.left,newNode)
            }
        }else{
            if(root.right===null){
                root.right=newNode
            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }
    search(root,value){
        if(!root){
            return false
        }else{
            if(root.value===value){
                return true
            }else if(value<root.value){
                return this.search(root.left,value)
            }else{
                return this.search(root.right,value)
            }
        }
    }

    



}


let bst = new deleteInTree();

bst.insert(1)
bst.insert(9)
bst.insert(4)
bst.insert(2)
bst.insert(5)
bst.insert(3)


