
// function printNumbers(n) {
//     if(n==10){
//         return 10
//     }
//     console.log(n)

//     return printNumbers(n+1)

// }

// console.log(printNumbers(1));

function pri(n) {
    if(n==10){
        return 10
    }
    console.log(n);
    return pri(n+1)
    
}
console.log(pri(1));
