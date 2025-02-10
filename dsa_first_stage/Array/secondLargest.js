// function findSecondLargest(arr) {
//     if (arr.length < 2) {
//         return "Array must have at least two elements";
//     }

//     let largest = arr[0];
//     let secondLargest = -Infinity;

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > largest) {
//             secondLargest = largest;
//             largest = arr[i];
//         } else if (arr[i] > secondLargest && arr[i] !== largest) {
//             secondLargest = arr[i];
//         }
//     }

//     return secondLargest === -Infinity ? "No second largest element" : secondLargest;
// }

// // Example usage
// const numbers = [10, 20, 20, 5];
// console.log(findSecondLargest(numbers)); // Output: 10





// function secLar(arr) {
//    if(arr.length<2){
//     return 'Array containes at least 2 elements'
//    }

//    let largest=arr[0];

//    let secLargest = -Infinity;

//    for(let i=0;i<arr.length;i++){
//     if(arr[i]>largest){
//         secLargest=largest;
//         largest=arr[i]
//     }else if(arr[i]>secLargest && arr[i]!==largest){
//         secLargest=arr[i]
//     }
//    }
//    return secLargest===-Infinity?'no ele':secLargest


// }

// let arr=[1,23,5,67,73,6]

// console.log(secLar(arr));




// function seclar(arr) {
//     if (arr.length<2) {
//         return -1
//     }
//     let largest=arr[0];
//     let second=-Infinity;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>largest){
//             second=largest;
//             largest=arr[i]
//         }else if(arr[i]>second&&arr[i!==largest]){
//              second=arr[i]
//         }
//     }
//     return second
// }


// console.log(seclar(arr));


// function thirdLar(arr) {
//     let largest=-Infinity;
//     let second=-Infinity;
//     let third=-Infinity;

//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>largest){
//             third=second;
//             second=largest;
//             largest=arr[i]
//         }else if(arr[i]>second &&arr[i]<largest){
//             third=second;
//             second=arr[i]
//         }else if(arr[i]>third && arr[i]<second){
//             third=arr[i]
//         }
//     }
//     return third
// }

// let arr=[1,23,5,6,2,45,363,63,3]

// console.log(thirdLar(arr));


let arr=[1,23,5,67,73,6]
function sec(arr) {
    let largest=0;
    let second=-Infinity
    for(let i=0;i<arr.length;i++){
        if(arr[i]>largest){
            second=largest;
            largest=arr[i]
        }else if(arr[i]>second&&arr[i]!==largest){
           second=arr[i]
        }
        }
        return second
}

console.log(sec(arr));
