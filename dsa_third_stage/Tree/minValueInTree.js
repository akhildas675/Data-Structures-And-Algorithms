class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class minValueInTree {
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
    } else if (newNode.value > root.value) {
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

  search(root, value) {
    if (!root) {
      return false;
    } else {
      if (root.value === value) {
        return true;
      } else if (value < root.value) {
        return this.search(root.left, value);
      } else {
        return this.search(root.right, value);
      }
    }
  }

  bfs() {
    const queue = [];
    let count = 0;
    queue.push(this.root);
    while (queue.length) {
      let current = queue.shift();
      count++;
      console.log(current.value);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    console.log("number of node ", count);
  }

  min(root){
    if(!root.left){
        return root.value
    }else{
        return this.min(root.left)
    }
  }

  max(root){
    if(!root.right){
        return root.value
    }else{
        return this.max(root.right)
    }
  }

  delete(value){
    this.root=this.deleteNode(this.root,value);
    console.log("Root",this.root);
    
  }

  deleteNode(root,value){
    if(root===null){
        return null
    }

    if(value<root.value){
        root.left=this.deleteNode(root.left,value)
    }else if(value>root.value){
        root.right=this.deleteNode(root.right,value)
    }else{
        if(!root.left && !root.right){
            return null
        }
        if(!root.left){
            return root.right
        }
        if(!root.right){
            return root.left
        }

        root.value=this.min(root.right)
        root.right=this.deleteNode(root.right,root.value)
    }
    return root
  }


}

let bst = new minValueInTree();

bst.insert(5);
bst.insert(9);
bst.insert(10);
bst.insert(7);
bst.insert(12);
bst.insert(3);

console.log("preOrder");

bst.preOrder(bst.root);

console.log("In Order");

bst.inOrder(bst.root);

console.log("post Order");

bst.postOrder(bst.root);

console.log(bst.search(bst.root, 7));

console.log("berth first search");

bst.bfs();

bst.delete(12)
