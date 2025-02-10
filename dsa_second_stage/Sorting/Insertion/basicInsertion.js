function insertSort(arr) {
    for(let i=1;i<arr.length;i++){
        let numToInsert=arr[i]

        let j=i-1
        while (j>=0&&arr[j]>numToInsert) {
            arr[j+1]=arr[j];
            j=j-1
        }
        arr[j+1]=numToInsert
    }
}

let array=[2,4,63,2,46,2,3,78,3,1,5]

insertSort(array)



console.log(array);
