function quickSort(arr,left=0,right=arr.length-1) {
    if(left<right){
        let pivotIndex = partition(arr,left,right)

        quickSort(arr,left,pivotIndex-1)
        quickSort(arr,pivotIndex+1,right)
    }
    return arr
}

function partition(arr,left,right) {
    let pivot=arr[right];
    let i=left-1;

    for(let j=left;j<right;j++){
        if(arr[j]<pivot){
            i++
            [arr[i],arr[j]]= [arr[j],arr[i]]
        }
    }
    [arr[i+1],arr[right]]=[arr[right],arr[i+1]];
    return i+1
}

let array=[2,5,7,8,9,4,1,6]

quickSort(array)

console.log(array);
