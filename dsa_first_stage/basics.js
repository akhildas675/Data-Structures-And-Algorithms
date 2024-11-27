// // //

// // function reverseArray(arr){
// //     let reversed=[];
// //     for(let i=arr.length-1;i>=0;i--){
// //         reversed+=arr[i]
// //     }
// //     console.log(typeof reversed)
// //     return reversed
// // }

// // let arr=[1,12,3,10,5,6]

// // // console.log(reverseArray(arr))

// // //String reverse
// // function stringReverse(str){
// //     let restr='';

// //     for(let i=str.length-1;i>0;i--){
// //         restr+=str[i]
// //     }
// //     return restr

// // }

// // console.log(stringReverse('akhildas'));

// //word reverse

// function wordReverse(word){

//     let left='';
//     let right='';
//     let value=false;

//     for(let i=0;i<word.length;i++){
//         if(value===false && word[i]!==' '){
//             left+=word[i];

//         }else {
//             value=true
//             right+=word[i]
//         }
//     }
//     return right+' '+left
// }

// console.log(wordReverse("hello world"))

// function reverseString(string) {
//     console.log(string);
//     let str=''
//     for (let i = string.length-1; i >=0; i--) {
//        str+=string[i]

//     }
//     console.log(str);

// }

// reverseString("akhildas")

// function prime(nums) {
//     let arr=[]

//     for(let i=0;i<nums.length;i++){
//         let isPrime=true
//         if(nums[i]<=1){
//            continue
//         }
//         for (let j = 2; j < nums[i]; j++) {
//            if(nums[i]%2==0){
//             isPrime=false;
//             break;
//            }

//         }

//         if(isPrime){
//             arr.push(nums[i])
//         }
//     }

//     console.log(arr)

// }

// prime([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23])

// // find the same

// function findTheSame(array1,array2) {
//     return array1.filter(ele=>array2.includes(ele))
// }
// console.log(findTheSame([1,2,3,4,5,6],[4,5,6,7,8,9]));

// function Common(array1, array2) {
//   let commonNum = [];

//   for (let i = 0; i < array1.length; i++) {
//     for (let j = 0; j < array2.length; j++) {
//         if(array1[i]===array2[j]){
//             commonNum.push(array1[i])
//         }
//     }
//   }
//   return commonNum
// }

// let array1 = [1, 2, 3, 4, 5, 6];
// let array2 = [4, 5, 6, 7, 8, 9];

// console.log(Common(array1, array2));





// function binary(arr,target){
//   let left = 0
//   let right = arr.length-1
//   while(left<=right){
//       let midindex = Math.floor((left+right)/2)
//       if(target === arr[midindex]){
//           return midindex
//       }
//       if(target<arr[midindex]){
//           return right = midindex-1
//       }else{
//           return left = midindex+1
//       }
//   }
//   return -1
// }
// console.log(binary([1,2,3,4,5,6],3));



function printNumbers(n) {
    if(n==10){
        return
    }
    console.log(n)

    return printNumbers(n=n+1)

}

console.log(printNumbers(1));

