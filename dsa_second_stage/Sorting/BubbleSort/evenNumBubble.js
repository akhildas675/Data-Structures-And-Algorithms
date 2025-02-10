function bubbleSortEvens(arr) {
    // Extract even numbers and their positions
    let evens = [];
    let positions = [];
    
    arr.forEach((num, index) => {
        if (num % 2 === 0) {
            evens.push(num);
            positions.push(index);
        }
    });

    // Perform bubble sort on the evens array
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < evens.length - 1; i++) {
            if (evens[i] > evens[i + 1]) {
                let temp = evens[i];
                evens[i] = evens[i + 1];
                evens[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    // Replace sorted even numbers back into their original positions
    positions.forEach((pos, i) => {
        arr[pos] = evens[i];
    });

    return arr;
}

let array = [6, 3, 2, 8, 1, 9, 0];
console.log(bubbleSortEvens(array));
