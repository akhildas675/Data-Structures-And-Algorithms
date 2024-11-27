/**
 *  1. Math.min
 *  2. Loop
 *  3. reduce
 *  4. reduce Math.min
 *  5.
 * 
 */

let array=[1,2,3,4,5,6,7,8,1,3,4,5,6,-1]

//-----------------------------------------------




// 1. Math.min  TimeComplexity: O(n) ,  spaceComplexity O(n)

// function mathMin(arr) {
//     return Math.min(...arr)
// }

// console.log('using Math.min() ',mathMin(array));


//------------------------------------------------------

// 2. Loop  TimeComplexity: O(n) ,  spaceComplexity O(1)


// function loopMin(arr) {
//     let min=1;
//     for(let i=0;i<array.length;i++){
//         if(arr[i]<min){
//             min=arr[i]
//         }
//     }
//     return min
// }
// console.log('using loop ',loopMin(array));


//--------------------------------------------------------------

// 3. reduce TimeComplexity: O(n) ,  spaceComplexity O(n)

// function reduceMin(arr) {
//     return arr.reduce((acc,cuc)=>cuc<acc?cuc:acc)
// }

// console.log('using reduce ',reduceMin(array));



//--------------------------------------------------------------

// 4. reduce Math.min 

// function reduceMathmin(arr) {
//     return arr.reduce((acc,cuc)=>Math.min(acc,cuc))
// }

// console.log('Using reduce and Math.min() ',reduceMathmin(array));


//-----------------------------------------------------------------