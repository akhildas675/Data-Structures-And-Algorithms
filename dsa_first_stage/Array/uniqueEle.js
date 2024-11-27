let array=[1,2,3,4,5,6,7,2,3,4,5,6,7,9];

let unique=[];
const freq={};


for(const ele of array){
    freq[ele]=(freq[ele]||0)+1
}


// for (const ele of array) {
//     freq[ele]=(freq[ele]||0)+1
// }
// for (const key in freq) {
//       if(freq[key]===1){
//         unique.push(key)
//       }
    
// }
 
// console.log(unique);

// for(let i=0;i<array.length;i++ ){
//     if(!freq[array[i]]){
//         freq[array[i]]=1
//     }else{
//         freq[array[i]]++
//     }
// }

// console.log(freq);

// for (const key in freq) {
//     if(freq[key]==1){
//         unique.push(Number (key))
//     }
// }
// console.log(unique);



