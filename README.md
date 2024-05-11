Repository Title: Sentence Analyzer
Description:
This repository contains a JavaScript algorithm that analyzes a sentence character by character to determine its length, the number of words, and the number of vowels.

Algorithm:
The algorithm works as follows:

Initialize three counters: sentenceLength, wordCount, and vowelCount.
Iterate through each character of the input sentence.
Increment the sentenceLength counter for each character.
If the character is a vowel (case-insensitive), increment the vowelCount counter.
If the character is a space, indicating a word boundary, increment the wordCount counter.
Increment the wordCount by 1 to account for the last word.
Return an object containing the results of the analysis.
Usage:
To use the algorithm, call the analyzeSentence(sentence) function, passing the input sentence as an argument. It will return an object with the analysis results.

Example:
javascript
Copy code
let inputSentence = "This is a sample sentence.";
let analysis = analyzeSentence(inputSentence);
console.log("Sentence Length:", analysis.length);
console.log("Number of Words:", analysis.words);
console.log("Number of Vowels:", analysis.vowels);
License:
This project is licensed under the MIT License - see the LICENSE file for details.

Author: Akeju mariam
(@weirdo-dot)
