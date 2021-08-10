/*
1. First, print each vowel in "s" on a new line. The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as it appeared in "s".
2. Second, print each consonant (i.e., non-vowel) in "s" on a new line in the same order as it appeared in "s".
*/

function vowelsAndConsonants(str) {

    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    // Check for vowels

    var letters = str.split('');
    var vowelsFound = [], consonantsFound = [];

    for (var i in letters) {
        // if (vowels.includes(letters[i])) {
        //     vowelsFound.push(letters[i]);
        // } 
        if (vowels.indexOf(letters[i]) == -1) {
            // vowelsFound.push(letters[i]);
            consonantsFound.push(letters[i]);
        }
        else {
            // consonantsFound.push(letters[i]);
            vowelsFound.push(letters[i]);
        }
    }
    console.log(vowelsFound.join("\n"));
    console.log(consonantsFound.join("\n"));
}
var str = "javascriptloops";
vowelsAndConsonants(str);
