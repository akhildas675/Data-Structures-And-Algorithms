// class Node {
//     constructor(value) {
//         this.value=value;
//         this.left=null;
//         this.right=null;
//     }
// }

// class depthSearch{
//     constructor(){
//         this.root=null;
//     }


//     insert(value){
//         let newNode = new Node(value);
//         if(this.root===null){
//             this.root=newNode;
//         }else{
//             this.insertNode(this.root,newNode)
//         }
//     }

//     insertNode(root,newNode){
//         if(newNode.value<root.value){
//           if(root.left===null){
//             root.left=newNode;
//         }else{
            
//             this.insertNode(root.left,newNode)
//           }
//         }else{
//             if(root.right===null){
//                 root.right=newNode;
//             }else{
//                 this.insertNode(root.right,newNode)
//             }
//         }
//     }

//     preOrder(root){
//         if(root){
//             console.log(root.value);
//             this.preOrder(root.left)
//             this.preOrder(root.right)
            
//         }
//     }

//     bfs(){
//         const queue=[];

//         let count =0;
//         queue.push(this.root);
//         while(queue.length){
//             let current = queue.shift();
//             count++;
//             console.log(current.value);
//             if(current.left)
//                 queue.push(current.left)
//             if(current.right)
//                 queue.push(current.right)
            
//         }
//         console.log("Number of nodes :",count)
//     }

//     search(root,value){
//         if(!root){
//             return false
//         }

//         if(value===root.value){
//             return true
//         }else if(value<root.value){
//             return this.search(root.left,value)
//         }else{
//             return this.search(root.right,value)
//         }
//     }

//     min(root){
//         if(!root.left){
//             return root.value
//         }else{
//             return this.min(root.left)
//         }
//     }

//     max(root){
//         if(!root.right){
//             root.right
//         }else{
//             this.max(root.right)
//         }
//     }

//     delete(value){
//         this.root=this.deleteNode(this.root,value)
//     }

//     deleteNode(root,value){
//         if(root===null){
//             return false
//         }
//         if(value<root.value){
//             root.left=this.deleteNode(root.left,value)
//         }else if(value>root.value){
//             root.right=this.deleteNode(root.right,value)
//         }else{
//             if(root.left && root.right){
//                 return null
//             }
//             if(!root.left){
//                 return root.right
//             }else if(!root.right){
//                 return root.left
//             }

//             root.value=this.min(root.right);
//             root.right=this.deleteNode(root.right,value)
//         }
//         return root
//     }

// }

// let bst = new depthSearch();


// bst.insert(4)
// bst.insert(12)
// bst.insert(7)
// bst.insert(8)
// bst.insert(4)
// bst.insert(6)

// bst.preOrder(bst.root)

// console.log('BFS');

// bst.bfs()


// console.log("Search");

// console.log(bst.search(8));

// console.log("Delete");

// bst.delete(8)

// console.log("After delete");


// bst.preOrder(bst.root)






//Graph

class Graph {
    constructor() {
        this.adjacencyList={};
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex]=new Set();
        }
    }

    addEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }

    hasEdge(){
        return (this.adjacencyList[vertex1].has(vertex2) && this.adjacencyList[vertex2].has)
    }

}