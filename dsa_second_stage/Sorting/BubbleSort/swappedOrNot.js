function swappedOrNot(arr) {
    let swapped;

    do {
        swapped = false; // Initialize swapped to false at the start of each pass
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Swap the elements
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;

                swapped = true; // Mark as swapped
            }
        }
    } while (swapped);

    // If no swaps were needed, the array was already sorted
    if (swapped) {
        console.log("The array was already sorted.");
    } else {
        console.log("The array was not sorted initially.");
    }
}

let array = [1, 7, 2, 3, 4, 5, 6];
swappedOrNot(array);

console.log("Sorted array:", array);
