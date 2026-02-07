/*
    Topic: Objects in JavaScript
*/


// Q1. Flatten a nested JavaScript object into a single-level object.
function flatObject(obj, parent = "", result = {}){
  for(let key in obj){
    let parentKey = parent ? parent + "." + key: key;
    if(typeof(obj[key]) === "object"){
         flatObject(obj[key], parentKey, result);
    }else{
         result[parentKey] = obj[key]
    }
  }
  return result;
}
let obj = {
  name : "bob",
  age : 20,
  add : {
    city : "noida",
    pincode : 210301
  }
}
console.log(flatObject(obj)); //{ name: 'bob', age: 20, 'add.city': 'noida', 'add.pincode': 210301 }

// * Approach / Idea:
//  *   - Use recursion to traverse the object.
//  *   - Maintain a `parent` key prefix to track the path.
//  *   - For each property:
//  *       • If the value is an object → recurse deeper with updated prefix.
//  *       • If the value is primitive → assign it to `result` using the full path.
//  *   - Return the flattened object once traversal is complete.
// *  - Time: O(n), where n = total number of keys in the object (all levels).
// *  - Space: O(n), for the flattened result object.



// Q2. Deep Clone an Object
function deepClone(object){
    if(typeof(object) !== "object" || object === null){
        return object;
    }
    let result = Array.isArray(object) ? [] : {};
    let keys = Object.keys(object);
    for(let index = 0; index < keys.length; index++){
        result[keys[index]] = deepClone(object[keys[index]]);
    }
    return result;
}

let obj = {
  name : "bob",
  age : 20,
  add : {
    city : "noida",
    pincode : 210301
  }
};

let obj1 = deepClone(obj);
console.log(obj1); //{ name: 'bob', age: 20, add: { city: 'noida', pincode: 210301 } }

// * Approach / Idea:
//  *   - Base case: If the value is not an object (primitive or null),
//  *     return it directly.
//  *   - Recursive case: If the value is an object or array,
//  *     create a new empty structure ({} or []).
//  *   - Iterate through all keys of the object.
//  *   - For each key, recursively call deepClone on its value
//  *     and assign the result to the new structure.
//  *   - Return the fully cloned object.
//  *   - Time: O(n), where n = total number of properties (including nested).
//  *   - Space: O(n), for storing the cloned object.
 

 
