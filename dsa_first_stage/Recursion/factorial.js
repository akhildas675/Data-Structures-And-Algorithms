function recursiveFactorial(n) {
    if (n===0) {
        return 1
    }
 return n* recursiveFactorial(n-1)   
}

console.log(recursiveFactorial(5));
console.log(recursiveFactorial(7));
console.log(recursiveFactorial(1));



function fac(n){
if(n===0){
    return 1
}
return n*fac(n-1)
}

console.log(fac(4));
