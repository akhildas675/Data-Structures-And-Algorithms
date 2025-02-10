let array = [{ a: 3, b: 6, c: 2, d: 1, e: 5, f: 4 }];

function bubbleSortObject(obj) {
    let keys = []; 

   
    for (let key in obj) {
        keys.push(key);
    }

    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < keys.length - 1; i++) {
            let key1 = keys[i];
            let key2 = keys[i + 1];

            if (obj[key1] > obj[key2]) {
              
                let temp = obj[key1];
                obj[key1] = obj[key2];
                obj[key2] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    return obj; 
}

array[0] = bubbleSortObject(array[0]);
console.log(array[0]);

console.log(array);
