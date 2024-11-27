// class Node {
//   constructor(value) {
//     this.value = value;  // The value stored in the node
//     this.next = null;    // The pointer to the next node (initially null)
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null; // Start with an empty list, so head is null
//   }

//   // Add a new node to the end of the list using append
//   add(value) {
//     const newNode = new Node(value); // Create a new node with the value
      
//     if (this.head === null) {
//       // If the list is empty, make this new node the head
//       this.head = newNode;
//     } else {
//       // Otherwise, find the last node and add the new node there
//       let current = this.head;
//       while (current.next !== null) {
//         current = current.next; // Move to the next node
//       }
//       current.next = newNode;
//     }
//   }

//   // Print the list to see all values
//   printList() {
//     let current = this.head;
//     while (current !== null) {
//       console.log(current.value); // Print the value of each node
//       current = current.next;     // Move to the next node
//     }
//   }
// }

// // Testing the LinkedList class
// const list = new LinkedList();
// list.add(5);
// list.add(10);
// list.add(15);
// list.printList();  // Output: 5, 10, 15





// class node{
//    constructor(value){
//     this.value=value;
//     this.next=null;
//    }
// }


// class Linkedinlist{
//   constructor(){
//     this.head=null;
//   }
//   append(value){
//     let newNode=new node(value);
//     if(this.head==null){
//       this.head=newNode;

//     }else{
//       let current=this.head;
//       console.log("current",current)
//       while(current.next!==null){
//         current=current.next;
//       }
//       current.next=newNode
//     }

//   }
//   printList(){
//     let current=this.head;
//     while (current!==null) {
//       console.log(current.value)
//       current=current.next
      
//     }
//   }


// }

// const list=new Linkedinlist()
// list.append(5)
// list.append(10)
// list.append(15)
// list.append(20)
// list.printList()



 