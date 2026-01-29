/*
Topic: String in JavaScript
*/

// Q1. Write a  Code to find the Count of Vowel and Constant in String.
function findCount(str){
    let vowel = 0; 
    let constant = 0;
    let arr = ["a", "e", "i", "o", "u"];
    let char = str.toLowerCase();
    for(let i = 0; i < char.length; i++){
        if(/[a-z]/.test(char[i])){
            if(arr.includes(char[i])){
                vowel++;
            }else{
                constant++;
            }
        }
    }
    console.log(`Vowel count = ${vowel} and Constant count = ${constant}`);
}
let str  = "vOweL And Constant";
findCount(str);

// **Algorithm:** 
// - Convert the string to lowercase. 
// - Loop through each character. 
// - If the character is a letter: 
//     - Check if it is a vowel → increase vowel count. 
//     - Otherwise → increase consonant count.

// **Time Complexity:** O(n) — where n is the length of the string. 
// **Space Complexity:** O(n) — for storing the lowercase string.



//Q2.  Write a program to remove all the vowels from the string
function remove(str){
    let vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    let newStr = "";
    for(let i = 0; i < str.length; i++){
        let char = str[i];
        if(!vowel.includes(char)){
            newStr += char;
        }
    }
    console.log(`Before removing the Vowel = ${str}, After removing the vowel = ${newStr}`);
}
let str = "vowel and Constant";
remove(str);

// **Algorithm:**
// - Loop through each character of the string.
// - Skip vowels and build a new string with only constants.

// **Time Complexity:** O(n) —> where n is the length of the string.  
// **Space Complexity:** O(n) —> for storing the new string without vowels.



//Q3. Find the first non-repeating character in string.
function find(str){
    let obj = {};
    let value = "";
    let char = str.toLowerCase();
    for(let i = 0; i < char.length; i++){
        obj[char[i]] = (obj[char[i]] || 0) + 1;
    }
    for(let i = 0; i < char.length; i++){
        if(obj[char[i]] === 1){
            value = char[i];
            break;
        }
    }
    console.log(`${value}`);
}
let str = "vvooweel";
find(str);

// **Algorithm:**
// 1. Convert the string to lowercase (case-insensitive).
// 2. Count the frequency of each character using an object.
// 3. Scan the string again and return the first character with frequency 1.

// **Time Complexity:** O(n) — two passes over the string.  
// **Space Complexity:** O(1) — fixed-size frequency map.



//Q4. Reverse a String
function reverse(str){
    let newStr = "";
    for(let i = str.length-1; i >= 0; i--){
        newStr += str[i];
    }
    console.log(newStr);
}
let str = "bob developer";
reverse(str);

// **Algorithm:**
// 1. Start from the last character of the string.
// 2. Append each character to a new string until the first character is reached.
// 3. Print the reversed string.

// **Time Complexity:** O(n) — loop runs once per character (worst case O(n²) due to concatenation).  
// **Space Complexity:** O(n) — new string stores the reversed result.



//Q5.  Check if a string is a palindrome
function pallindrome(str){
    let newStr = "";
    for(let i = str.length-1; i >= 0; i--){
        newStr += str[i];
    }
    if(str === newStr){
        console.log("String is pallindrome");
    }else{
        console.log("String are not pallindrome");
    }
}
pallindrome("madam");
pallindrome("bobd");

// **Algorithum:**
// - Reverse the string and compare with the original.  
// **Time Complexity:** O(n) (worst case O(n²) due to concatenation). 
// **Space Complexity:** O(n).



//Q6. Count character frequency
function countFreq(str){
    let obj = {};
    for(let i = 0; i < str.length; i++){
        obj[str[i]] = (obj[str[i]] || 0) + 1;
    }
    console.log(obj);
}
countFreq("hello");

// **Algorithum:**
// - Count occurrencesw of each character using an object.
// **Time Complexity:** O(n).
// **Space Complexity:** O(k), where k = unique character.



// Q7. Find the longest word in a string.
function longestWord(str){
    let newStr = str.split(" ");
    let maxWord = "";
    for(let word of newStr){
        if(word.length > maxWord.length){
            maxWord = word;
        }
    }
    console.log(maxWord);
}
longestWord("Hello everyone, how are you?");

// * Algorithm:
//   - Split the string into words.
//   - Track the longest word by comparing lengths.
//   - Print the longest word.
// * Time Complexity:  O(n) → iterate through all words once.
// * Space Complexity: O(k) → store words in an array (k = number of words).



// Q8. Check if two strings are anagrams
function checkAnagram(word1, word2){
    let word11 = word1.split("").sort().join("");
    let word22 = word2.split("").sort().join("");
    if(word11 === word22){
        console.log("Anagram");
    }else{
        console.log("Not a Anagram");
    }
}
checkAnagram("hello", "world");
checkAnagram("silent", "listen");

// * Algorithm:
//  - Split both strings into characters.
//  - Sort and join them back.
//  - Compare sorted results → if equal → Anagram.
// * Time Complexity:  O(n log n) → sorting step.
// * Space Complexity: O(n) → store sorted arrays/strings.



// Q9. Count words in a string
function countWord(str){
    let newStr = str.trim().split(" ").length;
    console.log(newStr);
}
countWord("Hello everyone how are you?");

// * Algorithm:
//  - Trim leading/trailing spaces.
//  - Split the string by spaces into an array.
//  - Return the array length as the word count.
//  * Time Complexity:  O(n) → iterate through characters once.
//  * Space Complexity: O(k) → store words in an array (k = number of words).



// Q10. Capitalize first letter of each word
function capitalize(str){
    let newStr = str.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
    console.log(newStr);
    
}
capitalize("Hello everyone how are you?");

// * Algorithm:
//  - Trim spaces.
//  - Split by spaces into words.
//  - Return array length.
//  * Time Complexity:  O(n) → scan characters once.
//  * Space Complexity: O(k) → store words (k = number of words).



// Q11. Find duplicate characters
function findDuplicate(str){
    let obj = {};
    let arr = [];
    for(let i = 0; i < str.length; i++){
        obj[str[i]] = (obj[str[i]] || 0) +1;
    }
    for(let key in obj){
        if(obj[key] > 1){
            arr.push(key);
        }
    }
    console.log(arr);
}
findDuplicate("DDuplliccateea");

// * Algorithm:
//  - Create a frequency map of characters.
//  - Iterate through the map.
//  - Collect characters with count > 1.
//  - Print the duplicates.
//  * Time Complexity:  O(n) → single pass to count + check.
//  * Space Complexity: O(k) → store unique characters (k = distinct chars).



//Q12.  Remove duplicate characters
function removeDuplicate(str){
    let arr = [];
    for(let i = 0; i < str.length; i++){
        if(!arr.includes(str[i])){
            arr.push(str[i]);
        }
    }
    console.log(arr.join(""));
}
removeDuplicate("Voowwel");

// * Algorithm:
// * - Iterate through characters.
// * - Add only if not already included.
// * - Join and print unique characters.
// * Time Complexity:  O(n²) → due to includes() check.
// * Space Complexity: O(n) → store unique characters.



//Q13. Check if string contains only digits
function checkDigit(str){
    if(/^[0-9]+$/.test(str)){
console.log("String only contain the digit.");
    }
    else{
console.log("String contain extra character apart from the digit.");
    }
}
checkDigit("1234");

//  * Algorithm:
//  - Use regex pattern /^[0-9]+$/ to match entire string.
//  - If match succeeds → string has only digits.
//  - Else → contains non-digit characters.
//  * Time Complexity:  O(n) → regex scans all characters once.
//  * Space Complexity: O(1) → constant extra space.



//Q14. Find number of occurrences of a substring
function findCount(str, sub){
    let count = 0;
    let windowSize = sub.length;
    for(let i = 0; i <= str.length - windowSize; i++){
        let size = str.slice(i, i+windowSize);
        if(sub === size){
            count++;
        }
    }
    console.log(`Occurence of "${sub}" is ${count}`);
}
findCount("hellohello", "lo");

// * Algorithm:
//  - Determine the window size equal to the substring length.
//  - Slide the window across the main string one character at a time.
//  - Compare each window slice with the substring.
//  - Increment count if they match.
//  - Print the total count.
//  * Time Complexity:  O(n * m) → n = length of main string, m = length of substring.
//  * Space Complexity: O(1) → Constant extra space.



//Q15. Rotate a string to the left by k position
function rotateLeft(str, k){
    let n = str.length;
    if(k > n){
        k = k % n;
    }
    let a = str.slice(0, k);
    let b = str.slice(k);
    console.log(b + a);
}
rotateLeft("abcdef", 2); //"cdefab"

//  * Algorithm:
//  - If k > string length, reduce k using modulo (k % n).
//  - Split the string into two parts:
//     - First k characters.
//     - Remaining characters.
//  - Concatenate the second part with the first part.
//  * Time Complexity:  O(n) → slicing and concatenation.
//  * Space Complexity: O(n) → temporary substrings created.



//Q16. Rotate a string to the right by k position.
function rotateRight(str, k){
    let n = str.length;
    if(k > n){
        k = k % n;
    }
    let a = str.slice(0,n-k);
    let b = str.slice(n-k);
    console.log(b + a);
}
rotateRight("abcdef", 2); //"efabcd"

//  * Algorithm:
//  - If k > string length, reduce k using modulo (k % n).
//  - Split the string into two parts:
//     - First (n - k) characters.
//     - Last k characters.
//  - Concatenate the second part with the first part.
//  * Time Complexity:  O(n) → slicing and concatenation.
//  * Space Complexity: O(n) → temporary substrings created.



//Q17. Check if one string is a rotation of another.
function checkRotation(str1, str2){
    let newStr = str1 + str1;
    let flag = false;
    let Wsize = str2.length;
    for(let i=0; i<=(newStr.length-Wsize); i++){
        let size = newStr.slice(i, i+Wsize);
        if(size === str2){
            flag = true;
            break;
        }
    }
    if(flag){
        console.log("Yes, string2 is the rotation of string 1");
    }else{
      console.log("No, string2 is not the rotation of string 1"); 
    }
}
checkRotation("waterbottle", "erbottlewat"); //yes
checkRotation("hello", "lehlo"); //no

// * Core Idea:
//   - If str2 is a rotation of str1, then str2 will always appear as a substring
//      inside str1 + str1 (concatenating the string with itself creates a "rotation wheel").
//   - Works for both left and right rotations since concatenation covers all cases.
   
//  * Algorithm:
//  * 1. Concatenate str1 with itself → newStr = str1 + str1.
//  * 2. Slide a window of size equal to str2 across newStr.
//  * 3. If any window matches str2, then str2 is a rotation of str1.
//  * 4. Otherwise, it is not a rotation.
//  * Time Complexity:  O(n) → substring search across doubled string.
//  * Space Complexity: O(n) → storing str1 + str1.



//Q18. Find longest substring without repeating characters.
function longestSubString(str){
    let windowSize = 0;
    let left = 0;
    let seen = new Set();
    for(let right = 0; right < str.length; right++){
        let char = str[right];
        while(seen.has(char)){
            seen.delete(str[left]);
            left++;
        }
        seen.add(char);
        windowSize = Math.max(windowSize, right-left+1);
    }
    console.log(`Longest Substring length: `, windowSize);
}
longestSubString("abcabcbb"); //3
longestSubString("bbbbb"); //1

//  * Core Idea:
//  - Use a "sliding window" technique with two pointers (left and right).
//  - Expand the window by moving the right pointer forward.
//  - If a duplicate character is found, shrink the window from the left until the duplicate is removed.
//  - At each step, update the maximum window size.
//  * 
//  * Algorithm:
//  1. Initialize:
//  *    - windowSize = 0 (stores maximum length found).
//  *    - left = 0 (start of the window).
//  *    - seen = Set() (tracks unique characters in the current window).
//  *
//  2. Iterate with right pointer across the string:
//  *    - If str[right] is not in seen → add it to the set.
//  *    - If str[right] is already in seen → remove characters from the left
//  *      until the duplicate is gone, then add str[right].
//  *
//  3. Update windowSize = max(windowSize, right - left + 1).
//  *
//  4. Return windowSize as the length of the longest substring
//  *    without repeating characters.
//  *
//  * Time Complexity:  O(n) → each character is processed at most twice.
//  * Space Complexity: O(n) → Set stores unique characters in the current window.



//Q19. Reverse words in a sentence
function reverseWord(str){
    let a = str.split(" ");
    let b = [];
    for(let i = a.length-1; i >= 0; i--){
        b.push(a[i]);
    }
    console.log(b.join(" "));
}
reverseWord("I Love Coding"); //Coding Love I
reverseWord("a b c d");// d c b a

// * Approach: 
// 1. Split the sentence into an array of words using space as delimiter. 
// 2. Traverse the array backwards and push each word into a new array. 
// 3. Join the reversed array back into a string with spaces in between. 
// 4. Print or return the result.
// * Time Complexity: O(n) - Splitting, reversing, and joining each take linear time. 
// * Space Complexity: O(n) - Extra array used to store reversed words.



//Q20. Find the most frequent character in a string
function mostFrequentChar(str){
    let obj = {};
    let max = 0;
    let freqChar = "";
    for(let i = 0; i < str.length; i++){
        let char = str[i];
        obj[char] = (obj[char] || 0) + 1;
    }
    for(let char in obj){
        if(obj[char] > max){
            max = obj[char];
            freqChar = char;
        }
    }
    console.log(freqChar);
}
mostFrequentChar("javascript");//a
mostFrequentChar("aabbccc");//c

// * Approach: 
// 1. Create a frequency map (object) to count occurrences of each character. 
// 2. Traverse the string once, updating counts in the map. 
// 3. Traverse the map to find the character with the highest count. 
// 4. Print or return that character.
// * Time Complexity: O(n) - One pass to count characters, one pass to find the maximum. 
// * Space Complexity: O(k) - k = number of unique characters in the string. 
// - Frequency map stores counts for each unique character.



//Q21. Check if a string is a subsequence of another
function subSequence(main, sub){
    let main1 = 0;
    let sub1 = 0;
    let count = 0;
    while(main1 < main.length && sub1 < sub.length){
        if(main[main1] === sub[sub1]){
            main1++;
            sub1++;
            count++;
        }else{
            main1++;
        }
    }
    if(count === sub.length){
        console.log("Yes");
    }else{
        console.log("No");
    }
}
subSequence("abcde", "ace"); //yes
subSequence("abcde", "aec"); //no
subSequence("something interesting going on", "sing"); //yes
subSequence("helicopter", "hello"); //no

// * Approach: 
// 1. Use two pointers: one for `main` and one for `sub`. 
// 2. Traverse both strings: 
//    - If characters match, move both pointers forward and increment `count`. 
//    - If not, move only the `main` pointer forward. 
// 3. At the end, if `count` equals the length of `sub`,then all characters of `sub` were matched in order → subsequence exists. 
// * Time Complexity: O(n) 
//   - n = length of `main` 
//   - Each character in `main` is checked at most once
// * Space Complexity: O(1) 
//   - Only pointers and a counter are used. 



//Q22. Remove extra spaces from a string
function removeSpace(str){
    let newStr = "";
    let str1 = str.split(" ");
    for(let i = 0; i < str1.length; i++){
        if(str1[i] !== ""){
            if(newStr !== ""){
                newStr += " ";
            }
            newStr += str1[i];
        }
    }
    console.log(newStr);
}
removeSpace(" I Love   Codeing ");//I Love Codeing

// * Approach: 
// 1. Split the string by spaces using `split(" ")`. 
// 2. Iterate through the resulting array. 
// 3. Skip empty strings (caused by consecutive spaces). 
// 4. Append words to a new string, adding a single space only between words. 
// 5. Print the cleaned string. 
// * Time Complexity: O(n) 
// - Each character is processed once during split and loop traversal. 
// * Space Complexity: O(n) 
// - Extra array created by split plus the new cleaned string.
