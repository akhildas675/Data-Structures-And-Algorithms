let array=[1,2,3,4,5,6,7,8,1,3,4,5,6]
let str=[a,g,h,d,r,c,d,g,h,k]

  

function removeDup(arr) {

    return [...new Set(arr)]
    
}

console.log(removeDup(array));



function duplicateRemove(arr) {

    return arr.filter((ele,ind)=>arr.indexOf(ele)===ind)
    
}


console.log(duplicateRemove(array));


function dup(arr) {
    arr.sort((a,b)=>a-b)
    console.log(arr);
    

    for(let i =0; i<arr.length-1;i++){
        if(arr[i]===arr[i+1]){
            arr.splice(i,1);
            i--
        }
    }
    return arr
}

console.log(dup(array));
