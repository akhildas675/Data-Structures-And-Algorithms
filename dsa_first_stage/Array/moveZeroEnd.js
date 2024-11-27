/**
 *  1. moveZero using filter at the end
 *  2. moveZero using While loop at the end
 * 
 * 
 * 
 */

let array=[0,3,5,6,3,2,5,0,7,0,5,0,0,-1,-2]

//-------------------------------------------------


// 1. moveZero using filter at the end

function moveZero(arr) {
    let zeros=arr.filter((ele)=>ele===0)
    let nonZeros=arr.filter((ele)=>ele!==0)
    return [...nonZeros,...zeros]
}
console.log(moveZero(array));


//----------------------------------------------------


//2. moveZero using While loop at the end


function moveZeroAtEnd (arr) {
    let i=0;
    let length=arr.length;
    while (i<length) {
        if(arr[i]===0){
            arr.splice(i,1);
            arr.push(0);
            length--
        }else{
            i++
        }
    }
    return arr
}
console.log('using while loop ',moveZeroAtEnd(array));

//---------------------------------------------------------------