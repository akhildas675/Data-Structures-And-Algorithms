let arr=[1,2,3,4,5,6,7,8,9]


function targetEle(arr,target) {
    for (let i = 0; i < arr.length; i++) {
       if (arr[i]===target) {
        return arr[i]
       }
        
    }
    return -1
}

console.log(targetEle(arr,8));
