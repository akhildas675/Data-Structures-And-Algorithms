function decending(arr) {

    let swapped

    do {
        swapped=false
        for(let i=0;i<arr.length-1;i++){
            if(arr[i]<arr[i+1]){
                let temp=arr[i];
                arr[i]=arr[i+1];
                arr[i+1]=temp
                swapped=true
            }
        }
        
    } while (swapped);
    
}

let array=[1,35,6,2,5,2]

decending(array)

console.log(array);
