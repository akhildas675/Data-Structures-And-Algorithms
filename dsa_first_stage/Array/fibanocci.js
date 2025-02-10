function fibanocci(n){
const fib=[0,1];
for(let i =2; i<n;i++){
    fib[i]=fib[i-1]+fib[i-2]
}
return fib

}
// console.log(fibanocci(2))
// console.log(fibanocci(3))
// console.log(fibanocci(4))
// console.log(fibanocci(5))
console.log(fibanocci(7))