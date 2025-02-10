function sumOfEle(params) {
    if(params.length===0){
        return 0
    }

    return params[0]+sumOfEle(params.slice(1))
}

const array = [1, 2, 3, 4, 5];
console.log(sumOfEle(array));


function sum(arr,index=0){
    if(index >= arr.length){
        return 0
    }
    
        return arr[index] + sum(arr,index+1)
    
}
console.log(sum([1,2,3,45]))