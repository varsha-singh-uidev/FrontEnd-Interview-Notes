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
 


//Q11. Find intersection of two arrays
function intersection(arr1, arr2){
    let set1 = new Set(arr1);
    let result = new Set();
    for(let item of arr2){
        if(set1.has(item)){
            result.add(item);
        }
    }
    console.log([...result]);
}
intersection([1,2,2,3], [2,2,4]); //[2]

// * Approach:
//  * - Convert the first array into a Set for O(1) lookups.
//  * - Iterate through the second array and check if each element exists in the Set.
//  * - Store common elements in a result Set to avoid duplicates.
//  * - Output the result as an array.
//  * Complexity:
//  * - Time: O(n + m), where n and m are lengths of the arrays.
//  * - Space: O(n) for the Set.


//Q12. Maximum subarray sum
function maxSubArray(arr) {
    let max = arr[0];  
    let current = arr[0];  

    for (let j = 1; j < arr.length; j++) {
        let value = current + arr[j]; 
        current = Math.max(arr[j], value);
        max = Math.max(max, current);
    }

    console.log(max);
}
maxSubArray([1,-2,3,4,-1,2,1,-5,4]); //9

// * Approach:
//  * - Use Kadane’s Algorithm:
//  *   1. Track current subarray sum (`current`).
//  *   2. At each step, decide whether to start a new subarray
//  *      or extend the previous one.
//  *   3. Track the global maximum (`max`).
//  * - Time: O(n)
//  * - Space: O(1)



//Q13. Two Sum problem
function sumProblem(arr,k){
    let map = {};
    for(let i = 0; i < arr.length; i++){
        let value = k - arr[i];
        if(map[value] !== undefined){
            console.log([map[value], i]);
        }
        map[arr[i]] = i;
    }
    console.log([]);
}
sumProblem([2,7,11,15], 9); //[0,1]
sumProblem([3,3], 6); //[0,1]
sumProblem([1,2,3], 10); //[]

// * Approach:
//  * - Use a hash map to store numbers and their indices.
//  * - For each element, compute its complement = k - arr[i].
//  * - If the complement exists in the map, return the pair of indices.
//  * - Otherwise, store the current element in the map.
//  * - If no pair is found, return []
//  * - Time: O(n)
//  * - Space: O(n)



//Q14. Find longest consecutive sequence
function longestConsecutive(arr){
    if(arr.length === 0){
        console.log(0);
        return;
    }
    let max = 1;
    let count = 1;
    arr.sort((a,b) => a-b);
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === arr[i+1]){
            continue;
        }
        if(arr[i]+1 === arr[i+1]){
            count++;
            max = Math.max(max, count);
        }else{
            count = 1;
        }
    }
    console.log(max);
}
longestConsecutive([100,4,200,1,3,2]);//4
longestConsecutive([0,3,7,2,5,8,4,6,1]); //9
longestConsecutive([9,1,4,7,3,-1,0,5,8,-1,6]);//7
longestConsecutive([]); //0

// * Approach:
//  * Sort the array in ascending order.
//  * Iterate through the array:
//  *  1. Skip duplicates (since they don’t extend the sequence).
//  *  2. If the next number is exactly current + 1, extend the streak (`count++`).
//  *  3. Otherwise, reset the streak (`count = 1`).
//  *  Track the maximum streak length (`max`) during iteration.
//  * Handle edgeCase: if the array is empty, return[].
// * - Time: O(n log n)
// * - Space: O(1)



//Q15. Sum of all elements
function sumAllElement(arr){
    let count = 0;
    if(arr.length === 0){
        console.log(0);
        return;
    }
    for(let i = 0; i < arr.length; i++){
        count += arr[i];
    }
    console.log(count);
}
sumAllElement([1, 2, 3, 4, 5]); //15
sumAllElement([10,-2,7]); //15

//  * Approach:
//  * - Initialize a counter variable (`count = 0`).
//  * - Iterate through the array using a loop.
//  * - Add each element to the counter.
//  * - Print the final sum.
//  * - Handle edge case: if the array is empty, return 0 immediately.
//  * - Time: O(n), where n is the length of the array.
//  * - Space: O(1), only a single counter variable is used.



//Q16. Count frequency of elements
function countFrequency(arr){
    let obj = {};
    for(let value of arr){
        obj[value] = (obj[value] ||  0) + 1;
    }
    console.log(obj);
}
countFrequency([1,2,1,4,5,3,1,2]);

// * Approach:
//  * - Initialize an empty object `obj`.
//  * - Iterate through the array using a `for...of` loop.
//  * - For each element:
//  *   1. If it already exists in the object, increment its count.
//  *   2. If not, initialize it with count = 1.
//  * - Print the final object containing frequencies.
//  - Time: O(n), where n is the length of the array (single pass).
//  - Space: O(n), for storing counts in the object.



//Q17. Check if two arrays are equal
function checkArrayEqual(arr1, arr2){
    if(arr1.length !== arr2.length){
        console.log("Not equal");
        return;
    }
    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] !== arr2[i]){
            console.log("Not equal");
            return;
        }
    }
    console.log("Equal");
}
checkArrayEqual([1,2,3],[1,2,3]); //Equal
checkArrayEqual([1,2,3],[3,2,1]); //not equal
checkArrayEqual([1,2,3],[1,2,3,4]); //not equal

// * Two arrays are considered equal if:
//    1. They have the same length.
//    2. Each element at the same index is identical.
//  *
// * Approach:
//    * - First, compare lengths. If different, arrays are not equal.
//    * - If lengths match, iterate through both arrays:
//    *   - Compare elements at each index.
//    *   - If any mismatch is found, return "Not equal".
//    * - If all elements match, return "Equal".
//  * - Time: O(n), where n is the length of the arrays.
//  * - Space: O(1), no extra storage used.



//Q18. Merge two arrays
function mergeArray(arr1, arr2){
    let newArr = [];
    let ptr1 = 0;
    let ptr2 = 0;
    while(ptr1 < arr1.length && ptr2 < arr2.length){
        if(arr1[ptr1] < arr2[ptr2]){
            newArr.push(arr1[ptr1]);
            ptr1++;
        }else if(arr1[ptr1] > arr2[ptr2]){
            newArr.push(arr2[ptr2]);
            ptr2++;
        }else if(arr1[ptr1] === arr2[ptr2]){
            newArr.push(arr1[ptr1]);
            ptr1++;
            ptr2++;
        }
    }
    if(ptr1 < arr1.length){
        while(ptr1 < arr1.length){
            newArr.push(arr1[ptr1]);
            ptr1++;
        }
    }else if(ptr2 < arr2.length){
        while(ptr2 < arr2.length){
            newArr.push(arr2[ptr2]);
            ptr2++;
        }
    }
    console.log(newArr);
}
mergeArray([1,2,3,5,7,9,10],[2,4,6,8]); //[1,2,3,4,5,6,7,8,9,10]

// * Approach:
//  * - Use two pointers (`ptr1` for arr1, `ptr2` for arr2).
//  * - Compare elements at both pointers:
//  *   1. Push the smaller element into the result array.
//  *   2. Advance the pointer of the array from which the element was taken.
//  *   3. If elements are equal, push once and advance both pointers.
//  * - Continue until one array is exhausted.
//  * - Append remaining elements from the other array.
// * - Time: O(n + m), where n and m are lengths of the arrays.
// * - Space: O(n + m), for the merged result.



//Q19. Remove element at given index
function removeAtIndex(arr, index) {
    if(index < 0 || index >= arr.length){
      console.log("Invalid Index");
      return;
    }  
  arr.splice(index, 1);
  console.log(arr);
}
removeAtIndex([10, 20, 30, 40, 50], 2); //[10, 20, 40, 50]

// * Approach:
//  * - Validate the index:
//  *  - Must be within bounds (0 ≤ index < arr.length).
//  *  - If invalid, print "Invalid Index".
//  * - Use `splice`:
//  *   - `arr.splice(index, 1)` removes exactly one element at the given index.
//  *   - This mutates the original array.
//  * - Print the updated array.
// * - Time: O(n), because elements after the removed index are shifted.
// * - Space: O(1), since the operation is in place.



//20. Find all pairs with given sum
function pairSum(arr, target){
    let map = [];
    let obj = {};
    for(let i = 0; i < arr.length; i++){
        let value = target - arr[i];
        
        if(obj[value] !== undefined){
            let map1 = [];
            map1.push(arr[i], value);
            map.push(map1);
        }
        obj[arr[i]] = i;
    }
    console.log(map);
}
pairSum([1,2,3,4,5,6], 7); //[[4,3], [5,2], [6,1]]

// * Approach:
//  * - Use a hash map (`obj`) to store elements as you iterate.
//  * - For each element `arr[i]`, compute `value = target - arr[i]`.
//  * - If `value` is already in the map, push the pair `[arr[i], value]` into `map`.
//  * - Store the current element in the map for future checks.
//  * - Finally, print the list of pairs.
// * - Time: O(n), since each element is processed once and hash lookups are O(1).
// * - Space: O(n), for storing elements in the hash map and pairs in the result.



//21. Separate even and odd numbers
function evenOdd(arr){
    let even = [];
    let odd = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            even.push(arr[i]);
        }else{
            odd.push(arr[i]);
        }
    }
    console.log("Even = ", even, "and Odd = ", odd);
}
evenOdd([1,2,3,4,5,6]); //Even = [2,4,6] and Odd = [1,3,5]

// * Approach:
//  * - Initialize two arrays: `even` and `odd`.
//  * - Iterate through the input array once.
//  * - For each element:
//  *   - If divisible by 2 (`num % 2 === 0`), push into `even`.
//  *   - Otherwise, push into `odd`.
//  * - Print the results.
//  * - Time: O(n), since each element is checked once.
//  * - Space: O(n), for storing elements into two arrays.



//Q22. Flatten a nested array
function flattern(stack){
    let newArr = [];
    for(let i = stack.length-1; i >= 0; i--){
        if(typeof stack[i] === "number"){
            newArr.push(stack[i]);
        }else if(Array.isArray(stack[i])){
            //the code where the [] is removed from the stack.
            let nested = stack[i];
            stack.splice(i,1);
            stack.splice(i,0,...nested);
            i = stack.length;
        }
    }
    console.log(newArr.reverse());
}
flattern([1, [2, [3, 4]]]); //[1,2,3,4]

// * Approach:
//  * - Initialize an empty result array `newArr`.
//  * - Iterate backwards through the input `stack`.
//  * - For each element:
//  *   - If it's a number, push it into `newArr`.
//  *   - If it's an array:
//  *     - Remove the array using `splice(i,1)`.
//  *     - Insert its contents back into the stack using `splice(i,0,...nested)`.
//  *     - Reset `i = stack.length` to reprocess newly inserted elements.
//  * - Reverse `newArr` at the end to restore correct order.
//  * - Time: O(n), each element is processed once.
//  * - Space: O(n), for storing flattened result.



//Q23. Find common elements in 3 arrays
function common(a,b,c){
    let set1 = new Set(a);
    let set2 = new Set(b);
    let set3 = new Set(c);
    let result = new Set();
  for(let item of set1){
      if(set2.has(item) && set3.has(item)){
          result.add(item);
      } 
  }
  console.log([...result]);
}
common(
    [1,5,10,20,40,80], 
    [6,7,20,80,100], 
    [3,4,15,20,30]
); //[20]

//  * Approach:
//  * - Convert each array into a Set for O(1) lookups.
//  * - Initialize an empty result Set.
//  * - Iterate through the first set:
//  *   - If the element exists in both the second and third sets, add it to result.
//  * - Convert result back into an array and return/print.
//  * - Time: O(n + m + k), optimal for large arrays.
//  * - Space: O(n + m + k), for storing sets.


//Q24. Product of array except self
function productExceptSelf(arr){
    let n = arr.length;
    let newArr = new Array(n).fill(1);
    prefix = 1;
    for(let i = 0; i < n; i++){
        newArr[i] = prefix;
        prefix *= arr[i];
    }
    
    suffix = 1;
    for(let i = n-1; i >= 0; i--){
        newArr[i] *= suffix;
        suffix *= arr[i];
    }
    console.log(newArr);
}
productExceptSelf([1,2,3,4]); //[24, 12, 8, 6]

//  * Approach:
//  * - Initialize result array `newArr` with 1s.
//  * - Prefix pass:
//  *   - Traverse from left to right.
//  *   - At each index i, store product of all elements before i.
//  * - Suffix pass:
//  *   - Traverse from right to left.
//  *   - Multiply each index i with product of all elements after i.
//  * - Result[i] = prefix[i] × suffix[i] (done in-place).
// - Time: O(n), two passes only.
// - Space: O(1) extra (prefix/suffix stored in variables).
