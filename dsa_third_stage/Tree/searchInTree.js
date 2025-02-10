class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class searchInBst {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }

  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }

  search(root,value){
    if(!root){
      return true
    }else{
      if(root.value===value){
        return  true
      }else if(value<root.value){
        return this.search(root.left,value)
      }else{
        return this.search(root.right,value)
      }
    }
  }


}

let bst = new searchInBst();

bst.insert(3);
bst.insert(8);
bst.insert(4);
bst.insert(5);
bst.insert(2);
bst.insert(1);
bst.insert(9);

console.log("preOrder");

bst.preOrder(bst.root);

console.log("InOrder");

bst.inOrder(bst.root);

console.log("Post order");

bst.postOrder(bst.root);

console.log(bst.search(bst.root, 5));
