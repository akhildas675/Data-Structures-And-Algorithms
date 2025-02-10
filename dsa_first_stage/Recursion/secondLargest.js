let arr=[1,3,5,7,3,5,6,3,2,41,52,63,7]

function secLar(arr,largest=0,second=0,index=0) {

    if(index===arr.length){
        return second
    }

    if(arr[index]>largest){
        second=largest;
        largest=arr[index]
    }else if(arr[index]>second&&arr[index]!==largest){
        second=arr[index]
    }

    return secLar(arr,largest,second,index+1)
}

console.log(secLar(arr));
