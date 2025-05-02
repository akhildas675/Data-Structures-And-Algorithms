// function bubble(arr) {
//     let swapped;
//     do {
//         swapped=false;
//         for(let i=0;i<arr.length-1;i++){
//             if(arr[i]>arr[i+1]){
//                 let temp=arr[i];
//                 arr[i]=arr[i+1];
//                 arr[i+1]=temp;
//                 swapped=true;
//             }
//         }
//     } while (swapped);
// }

// let array=[1,3,5,2,1,34,1,24]

// bubble(array)

// console.log(array);





let array=[5,7,3,2,9,1]
function bubbleSort(arr) {
    let swapped;
    do {
        swapped=false;
        for(let i=0;i<arr.length-1;i++){
            if(arr[i]>arr[i+1]){
                let temp=arr[i];
                arr[i]=arr[i+1];
                arr[i+1]=temp;
                swapped=true;
            }
        }
    } while (swapped);
}


bubbleSort(array)

console.log(array)