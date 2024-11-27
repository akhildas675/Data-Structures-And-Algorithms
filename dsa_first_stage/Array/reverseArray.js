/**
 *  1. Array element reverse
 */




let array=[1,2,3,4,5,6,7]
// let str=['a','b','c','d']



//------------------------------------------------------


//1. Array element reverse




//using loop  Big O(n)

function reverseArray(arr) {
    let array=[]
    for(let i=arr.length-1;i>=0;i--){
        array.push(arr[i])
    }
    return array

}

console.log('loop',reverseArray(array));

//using method Big O(1)


function reverse(arr) {
    return arr.reverse()
}

console.log('Method',reverse(array));




