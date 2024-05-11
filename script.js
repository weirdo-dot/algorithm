function analyzeSentence(sentence) {
    // Initialize counters
    let sentenceLength = 0;
    let wordCount = 0;
    let vowelCount = 0;

    // Iterate through each character of the sentence
    for (let i = 0; i < sentence.length; i++) {
        // Increment sentence length counter for each character
        sentenceLength++;

        // Check if current character is a vowel (case-insensitive)
        if ("aeiouAEIOU".includes(sentence[i])) {
            vowelCount++;
        }

        // Check if current character is a space, indicating a word boundary
        if (sentence[i] === ' ') {
            wordCount++;
        }
    }

    // Increment word count by 1 to account for the last word
    wordCount++;

    // Return results
    return {
        length: sentenceLength,
        words: wordCount,
        vowels: vowelCount
    };
}

// Example usage:
let inputSentence = "This is a sample sentence.";
let analysis = analyzeSentence(inputSentence);
console.log("Sentence Length:", analysis.length);
console.log("Number of Words:", analysis.words);
console.log("Number of Vowels:", analysis.vowels);
