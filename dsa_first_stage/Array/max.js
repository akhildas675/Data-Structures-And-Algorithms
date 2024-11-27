/**
 *  1. Math.max
 *  2. Loop
 *  3. reduce
 *  4. reduce Math.max
 *  5.
 * 
 */

//-------------------------------
let array=[1,2,3,4,5,6,7,8,1,3,4,5,6]

// 1.Max.math  TimeComplexity: O(n) ,  spaceComplexity O(n)


// function maxMath(arr){
//     return Math.max(...arr)
// }
// console.log('Using Math.max ',maxMath(array));

//------------------------------------------------------------------------------


// 2.loop; TimeComplexity: O(n) ,  spaceComplexity O(1)

function maxLoop(arr) {
    let max=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i]
        }
    }
    return max
}

console.log('Using loop ',maxLoop(array));


//----------------------------------------------------------------------------------


//3. reduce, TimeComplexity: O(1) ,  spaceComplexity O(1)

function maxReduce(arr) {
    return arr.reduce((acc,cuc)=>(cuc>acc?cuc:acc))
}

console.log('Using Reduce ',maxReduce(array));


//----------------------------------------------------------------------------------

// 4. reduce and Math.max, TimeComplexity: O(n) ,  spaceComplexity O(1)

function reduceMath(arr) {
    return arr.reduce((acc,cuc)=>Math.max(acc,cuc))
}

console.log('Using reduce Math.max',reduceMath(array));
