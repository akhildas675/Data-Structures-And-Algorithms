function rev(strs){
if(strs.length<=1){
    return strs
}
return rev(strs.slice(1))+strs[0]
}

let str='hello'
console.log(rev(str))


