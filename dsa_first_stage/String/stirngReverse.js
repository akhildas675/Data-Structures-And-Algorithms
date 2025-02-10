function reverseSentence(sentence) {
    // Split the sentence into an array of words
    const words = sentence.split(' ');
    let reversedSentence = '';

    // Iterate through the array of words in reverse order
    for (let i = words.length - 1; i >= 0; i--) {
        reversedSentence += words[i];

        // Add a space between words, but not after the last word
        if (i > 0) {
            reversedSentence += ' ';
        }
    }

    return reversedSentence;
}

// Example usage:
console.log(reverseSentence("Hello world how are you")); // Output: "you are how world Hello"
console.log(reverseSentence("This is a test"));          // Output: "test a is This"
console.log(reverseSentence("SingleWord"));              // Output: "SingleWord"
console.log(reverseSentence(""));                        // Output: ""
