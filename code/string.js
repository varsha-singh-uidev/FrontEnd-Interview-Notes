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

