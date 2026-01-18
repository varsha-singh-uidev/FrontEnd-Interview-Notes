/*
  Topic: Array in JavaScript
*/ 


//Q1. Find the largest and smallest element
function largestElement(arr){
    let max = -Infinity;
    let min = Infinity;
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > max){
          max = arr[i];   
        }
        else if(arr[i] < min){
            min = arr[i];
        }
    }
    console.log(`Maximun element in array = ${max} and Minimum element in array = ${min}`);
}
largestElement([1,4,5,13,6,-1,7]); //13 and -1

// * Core Idea:
//  - Initialize max with the -Infinity value.
//     - we start with the -infinity because it was the lowest possible value in js.
//  - Initialize min with the Infinity value.
//     - We start with Infinity because it’s the highest possible value in JavaScript.
//  - Traverse the array once:
//   - If current element > max → update max.
//   - If current element < min → update min.
//  - Print the largest and smallest values.
//  * Time Complexity:  O(n) → must check each element once.
//  * Space Complexity: O(1) → only two variables used.



//Q2. Remove duplicate elements
function removeDuplicate(arr){
    let newArr = [...new Set(arr)];
    console.log(newArr);
}
removeDuplicate([1,2,4,3,2,1,2,3]); //[1,2,4,3]

// * Core Idea: 
// - Use ES6 Set to automatically store only unique values. 
// - Convert the Set back into an array using the spread operator. 
// - Return the new array with duplicates removed. 
// * Time Complexity: O(n) → each element is processed once when inserted into the Set.
// * Space Complexity: O(n) → extra memory used for the Set and the new array.



//Q3. Find duplicate elements
function findDuplicate(arr){
    let obj = {};
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        let ele = arr[i];
        obj[ele] = (obj[ele] || 0) + 1;
    }
    for(let ele in obj){
        if(obj[ele] > 1){
            newArr.push(ele);
        }
    }
    console.log(`Duplicate element in the array are: ${newArr}`);
}
findDuplicate([1,2,4,3,2,1,2,3]);//1,2,3

// * Core Idea: 
// - Use an object (hash map) to count occurrences of each element. 
// - Traverse the array once, updating the frequency count for each element. 
// - After counting, iterate over the object keys. 
// - Collect elements whose frequency > 1 → these are duplicates. 
// * Time Complexity: O(n) → each element is processed once.
// * Space Complexity: O(n) → extra memory used for the frequency object and result array.



//Q4. Reverse an array (without built-in reverse)
function reverseArr(arr){
    let i = 0;
    let j = arr.length-1;
    while(i < j){
        let temp = arr[j];
        arr[j] =arr[i];
        arr[i] = temp;
        i++;
        j--;
    }
    console.log(arr);
}
reverseArr([1, 2, 3, 4, 5]); //[5, 4, 3, 2, 1];
reverseArr(["apple", "banana", "cherry"]);//[ 'cherry', 'banana', 'apple' ]

// * Core Idea: 
// - Use two pointers: one starting at the beginning (i) and one at the end (j). 
// - Swap elements at i and j. 
// - Move i forward and j backward until they meet in the middle. 
// - This reverses the array in place without using extra memory. 
// * Time Complexity: O(n) → each element is swapped once. 
// * Space Complexity: O(1) → only one temporary variable is used.



//Q5. Check if array is sorted
function checkSort(arr){
    let flag = false;
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < arr[i-1]){
            flag = true;
            break;
        }
    }
    if(flag){
        console.log("Array is not sorted");
    }else{
        console.log("Array is sorted");
    }
}
checkSort([1,4,2,5,3]);//not sorted

// * Core Idea: 
// - Traverse the array once. 
// - Compare each element with its previous element. 
// - If any element < previous element → array is not sorted (ascending order). 
// - Otherwise, the array is sorted. 
// * Time Complexity: O(n) → single pass through the array. 
// * Space Complexity: O(1) → only one flag variable used.



//Q6. Find second largest element
function secondLargest(arr){
    let max = -Infinity;
    let sMax = -Infinity;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            sMax = max;
            max = arr[i];
        }
        if(sMax < arr[i] && max !== arr[i]){
            sMax = arr[i];
        }
    }
    console.log(sMax);
}
secondLargest([1,4,2,5,3]); //4

// * Core Idea: 
// - Initialize max and second max with the first element (or -Infinity). 
// - Traverse the array once. 
// - Update max and second max accordingly. 
// * Time Complexity: O(n) → single pass. 
// * Space Complexity: O(1) → only two variables used.



//Q7. Move all zeros to the end
function moveZeroEnd(arr){
    let i = 0;
    for(let j = 0; j < arr.length; j++){
        if(arr[j] !== 0){
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
        }
    }
    console.log(arr);
}
moveZeroEnd([1,0,2,0,3,0,5]); //[1,2,3,5,0,0,0]
 
// * Algorithum
// - Maintain two pointers:
//    *  1. `i` → tracks the position where the next non-zero should go.
//    *  2. `j` → iterates through the array.
// - Whenever a non-zero is found at `arr[j]`, swap it with `arr[i]` and increment `i`.
// - This ensures all non-zeros are shifted forward while zeros naturally move to the end.
// - Time Complexity: O(n) → single pass through the array.
// - Space Complexity: O(1) → in-place, no extra array needed.



//Q8. (Right) Rotate array by K positions
function reverse(arr, start, end){
    while(start < end){
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    return arr;
}
function rotateRight(arr, k){
    let n = arr.length;
    if(k === n){return arr;}
    else{
    k = k % n;
    reverse(arr, 0, n-k-1);
    reverse(arr, n-k, n-1);
    reverse(arr, 0, n-1);
    }
    return arr;
}
let arr = [1,2,3,4,5,6,7];
let arr1 = rotateRight(arr,3);
console.log(arr1); //[5,6,7,1,2,3,4]

// * Algorithum
//  - Rotating right by K means the last K elements move to the front.
//  - Steps:
//     1. Reverse the first (n - K) elements.
//     2. Reverse the last K elements.
//     3. Reverse the entire array.
//  - Time: O(n) → each reverse is linear.
//  - Space: O(1) → in-place, no extra array.



//Q9. (left) Rotate the array by k position
function reverse(arr, start, end){
    while(start < end){
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    return arr;
}
function rotateLeft(arr, k){
    let n = arr.length;
    if(k === n){return arr;}
    else{
    k = k % n;
    reverse(arr, 0, k-1);
    reverse(arr, k, n-1);
    reverse(arr, 0, n-1);
    }
    return arr;
}
let arr = [1,2,3,4,5,6,7];
let arr1 = rotateLeft(arr,3);
console.log(arr1); //[4,5,6,7,1,2,3]

// * Algorithum
// - Rotating left by K means the first K elements move to the end.
// - Steps:
//     1. Reverse the first K elements.
//     2. Reverse the remaining (n - K) elements.
//     3. Reverse the entire array.
// - Time: O(n) → each reverse is linear.
// - Space: O(1) → in-place, no extra array.



//Q10. Find missing number (1 to n)
function findNumber(arr,n){
    let xor1 = 0;
    let xor2 = 0;
    for(let i = 0; i < arr.length; i++){
        xor1 = xor1 ^ arr[i];
    }
    for(let i = 0; i <= n; i++){
        xor2 = xor2 ^ i;
    }
    console.log(xor1 ^ xor2);
}
findNumber([1,2,3,5],5); //4

 // * Explanation:
 // * - XOR has useful properties:
 // *   1. a ^ a = 0  (same numbers cancel out)
 // *   2. a ^ 0 = a  (XOR with zero leaves the number unchanged)
 // * - If you XOR all numbers from 1 to n, and also XOR all numbers in the array,
 // *   the common numbers cancel out. The only number left is the missing one.
 // * - Time: O(n) → two linear passes.
 // * - Space: O(1) → constant extra space.
 
