//BubbleSort recursive


function bubbleSortRecursive(arr,n=arr.length) {
    if(n===1){
        return 
    }

    for(let i=0;i<arr.length-1;i++){
        if(arr[i]>arr[i+1]){
            let temp=arr[i];
            arr[i]=arr[i+1];
            arr[i+1]=temp
        }
    }

    return bubbleSortRecursive(arr,n-1)
}

let array=[8,3,7,2,9,1,3]

bubbleSortRecursive(array);

console.log(array);
