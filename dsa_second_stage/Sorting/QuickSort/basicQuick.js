function quickSort(arr) {
    if(arr.length<2){
        return arr
    }
    let left=[];
    let right=[];
    let lastvalue=arr[arr.length-1]

    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<lastvalue){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }

    return [...quickSort(left),lastvalue,...quickSort(right)]
    
}

let array=[1,4,6,3,7,8,3,4,72]

console.log(quickSort(array));



