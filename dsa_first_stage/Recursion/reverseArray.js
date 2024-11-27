

let array=[8,1,2,3,4,5,6,7]


function reverse(arr){
    if(arr.length===0){
        console.log('Empty');
        
        return []
    }
    const firstEle=arr.shift();
    

    const revRest=reverse(arr)

    revRest.push(firstEle)  
      if(arr.join('')===revRest.join('')){
        console.log('palindrome');
        
    }else{
        console.log('not palidrome');
        
    }

    return revRest
  
}

console.log(reverse(array));
