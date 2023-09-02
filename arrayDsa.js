// let colors = ['rad', 'orange', 'green', 'yellow'];
// colors[0] = 'red';
// console.log(colors);


// Array Methods
// Push -> add to end
// let anime = ['Dragon ball z', 'Naruto'];
// anime.push('One piece');
// console.log(anime);

// let animes = ['Dragon ball z', 'Naruto'];
// anime.push('One piece', 'Death note');
// console.log(anime);


//Pop -> remove from end
// let shows = ['Anime', 'Historic Shows', 'Butterllywood'];
// shows.pop();
// console.log(shows);

//shift-> remove from start
// let Nation = ['Pakistan', 'India', 'China'];
// Nation.shift();
// console.log(Nation);

//unshift -> add to start
// let Nation = ['India', 'China'];
// Nation.unshift('Russia', 'USA');
// console.log(Nation);

//concat -> merge arrays
// let array = ['ashura', 'Indra'];
// let ninja = ['Madara', 'Hashirama'];
// let x = array.concat(ninja);
// console.log(x);
// // console.log(array.concat(ninja));

// includes -> look for a value

// indexOf -> just like string.indexOf

// join -> creates a string from an array

// reverse -> reverses an array

// slice -> copies a portion on an array

// splice -> removes/replaces elements

// sort -> sorts an array



// let state = ['bihar', 'jharkhand', 'bengal', 'hastinapur'];
// let state = new Array('bihar', 'jharkhand', 'hastinapur', 'bengal');



//               SHARPENER
// //[1] Write a program to declare an array of size n and store the numbers 1,2,3,4 ...n in the array and return the array.
// function storeArray(num){
//   let arr = [];
//   for (let i = 1; i <= num; i++){
//     arr.push(i);
//   }
//   return arr;
// }
// storeArray(10);
// console.log(storeArray(10));

//without using push()
// function createArray(n){
//   let arr = Array(n);
//   for (let i = 0; i < n; i++){
//     arr[i] = i + 1;
//   }
//   return arr;
// }
// console.log(createArray(10));


//[2] Given an array find the maximum in it and return it
// function findMax(n){
//   if (n.length === 0){
//     return null;
//   }
//   return Math.max(...n);
// }
// const arr = [10, 9, 7, 11, 77, 999];
// console.log(findMax(arr));


//[3] Write a program to return the minimum element in the array.
// function findMin(n){
//   if (n.length === 0){
//     return null;
//   }
//   return Math.min(...n);
// }
// const arr = [ 1,3,4,5,6,7,8];
// const min = findMin(arr);
// console.log(min);


//[4] Write a program to store first n prime numbers in an array . After storing return the array.﻿

// function storePrime(n){
//   let count = 0;
//   if (n <= 1){
//     return [];
//   }
//   let prime = [];
//   let m =  1;
//   while (m <= n){
//     for (let i = 1; i <= m; i++){
//       if (m % i == 0){
//         count++;
//       }
//     }
//     if (count == 2){
//       prime.push(m);
//     }
//     count = 0;
//     m++;
//   }
//   return prime;
// }
// const n = 10;
// const x = storePrime(n);
// console.log(x);
let storePrime = function(n){
  if (n < 2){
    return null;
  }
  let count = 0;
  let m = 1;
  let arr = [];
  while (m <= n){
    for (let i = 1; i <= m; i++){
      if (m % i === 0){
        count++;
      }
    }
    if (count === 2){
      arr.push(m);
    }
    m++;
    count = 0;
  }
  return arr;
}
let n = 20;
console.log(storePrime(n));



//[5] Write a program to sort the array in descending order using Bubble sort algorithm. After Sorting return the array
// function sortArray(arr){
//   for (let i = 0; i < arr.length; i++){
//     for (let j = 1; j < arr.length - i; j++){
//       if (arr[j] > arr[j - 1]){
//         let temp = arr[j];
//         arr[j] = arr[j - 1];
//         arr[j - 1] = temp;
//       }
//     }
//   }
//   return arr;
// }
// let arr = [4,5,6,2,1];
// console.log(sortArray(arr));



// Sorting using Insertion sort
// function insertionSort(arr) {
//     for (let i = 1; i < arr.length; i++) {
//       let currentValue = arr[i];
//       let j;
//       for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
//         arr[j + 1] = arr[j];
//       }
//       arr[j + 1] = currentValue;
//     }
//     return arr;
// }
// console.log(insertionSort([2, 1, 3, 7, 5]));




//sorting using selection sort
// function sortArray(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//       let maxIndex = i;
//       for (let j = i + 1; j < arr.length; j++) {
//         if (arr[j] > arr[maxIndex]) {
//           maxIndex = j;
//         }
//       }
//       if (maxIndex !== i) {
//         let temp = arr[i];
//         arr[i] = arr[maxIndex];
//         arr[maxIndex] = temp;
//       }
//     }
//     return arr;
//   }
//   let arr = [4, 5, 6, 2, 1];
//   console.log(sortArray(arr));





//[6] Rotate array - 1
//Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

// function rotate(nums, k){
//   const length = nums.length;
//   for (let i = 0; i < k; i++){
//     const temp = nums[length - 1];
//     for (let j = length - 1; j > 0; j--){
//       nums[j] = nums[j - 1];
//     }
//     nums[0] = temp;
//   }
//   return nums;
// }
// let arr = [4,5,3,2,1];
// let k = 2;
// console.log(rotate(arr, k));



//[7] Rotate array - 2
// function rotate(arr, k){
//   const length = arr.length;
//   for (let i = 0; i < k; i++){
//     const temp = arr[length - 1];
//     for (let j = length - 1; j > 0; j--){
//       arr[j] = arr[j - 1];
//     }
//     arr[0] = temp;
//   }
//   return arr;
// }
// let arr = [2,3,4,5];
// let k = 3;
// console.log(rotate(arr, k));




//[8] Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// let search = function(nums, target){
//     let left = 0;
//     let right = nums.length - 1;

//     while (left <= right){
//         let mid = Math.floor((left + right) / 2);

//         if (nums[mid] === target){
//             return mid;
//         }else if (nums[mid] < target){
//             left = mid + 1;
//         }else{
//             right = mid - 1;
//         }
//     }
//     return -1;
// };
// let nums = [-1, 0, 3, 5, 9, 12];
// let target = 12;
// console.log(search(nums, target));




//[9] finding peak element from the given array

// function findPeakElement(arr){
//     let left = 0;
//     let right = arr.length - 1;

//     while (left < right){
//         let mid = Math.floor((left + right) / 2);
//         if (arr[mid] < arr[mid + 1]){
//             left = mid + 1
//         }else{
//             right = mid;
//         }
//     }
//     return left;
// }
// let arr = [1, 10, 1, 3, 5, 3, 4];
// console.log(findPeakElement(arr));




// [10] First and Last occurance of element
// function searchRange(nums, target) {
//     let start = -1;
//     let end = -1;

//     let left = 0;
//     let right = nums.length - 1;

//     // Find the leftmost occurrence of the target
//     while (left <= right) {
//       const mid = Math.floor((left + right) / 2);
//       if (nums[mid] === target) {
//         start = mid;
//         right = mid - 1;
//       } else if (nums[mid] > target) {
//         right = mid - 1;
//       } else {
//         left = mid + 1;
//       }
//     }
//     left = 0;
//     right = nums.length - 1;
//     // Find the rightmost occurrence of the target
//     while (left <= right) {
//       const mid = Math.floor((left + right) / 2);
//       if (nums[mid] === target) {
//         end = mid;
//         left = mid + 1;
//       } else if (nums[mid] > target) {
//         right = mid - 1;
//       } else {
//         left = mid + 1;
//       }
//     }
//     return [start, end];
//   }
//   const nums = [5,4,4,4,4,10];
//   const target = 4;
//   const result = searchRange(nums, target);
//   console.log(result);



//                SET
// Set is a collection of unique value.
// In a set you can't store duplicate value.
// for example in an there can't be two similar numbers in a set
// const mySet = new Set();
// mySet.add(60);
// mySet.add(21);
// mySet.add(56);
// mySet.add({
//     name: 'Shivam',
//     age: 22
// });
// // Find the size of set
// console.log('How big is my set? '+ mySet.size);
// //check for value
// console.log(mySet);
// //Check for particular value
// console.log("is 21 here " +mySet.has(21));
// //Delete item from set
// mySet.delete(56);
// console.log(mySet);
// //convert Set to Array
// let myArray = Array.from(mySet);
// console.log(myArray);



//       for in & for of loop

// Traditional for loop
// let soldiers = ['infantry', 'armour', 'artillery', 'air-defence'];
// for (let i = 0; i < soldiers.length; i++){
//     console.log(soldiers[i]);
// }

// for in loop
//Iterating an object using for-in loop
// for in loop is used to iterate over object keys.
// obj = {
//     name: "Shivam",
//     language: "javascript",
//     hobbies: "Full Stack developer"
// }
// // console.log(obj);
// for (let keys in obj){
//     console.log(obj[keys]);
// }
// console.log(obj.name);


// Iterating an string using for in loop
// We can use for in with strings to loop through all the characters
// NOTE -> It is not recommended to use for in loop to iterate over arrays or strings
// let str = 'I m Invincible';
// for (let hua in str){
//     console.log(str[hua]);
// }



//       for of loop
// for of loop is used to iterate over iterable objects such as arrays, strings, maps, sets, etc.
// let soldiers = ['Infantry', 'Armour', 'Artillery', 'Air-defence'];
// for (let name of soldiers){
//     console.log(name);
// }

// for (let name in soldiers){
//     console.log(name);
// }



//            Map
// Maps in javascript : we can use any type of key or value
// Map is a built-in object that allows you to store key-value pairs.
// const myMap = new Map();
// console.log(myMap);

// const key1 = 'myStr', key2 = {}, key3 = function(){};

// // setting map values
// myMap.set(key1, 'This is a string');
// myMap.set(key2, 'This is a blank obj');
// myMap.set(key3, 'This is a blank function');
// console.log(myMap);

// // Getting the values from a Map
// let value1 = myMap.get(key1);
// console.log(value1);

// // Get the size of the map
// console.log(myMap.size);

// // You can loop using for of to get keys and values
// for (let [key, value] of myMap){
//     console.log(key, value);
// }

// //Get only keys
// for (let key of myMap.keys()){
//     console.log('key is ', key);
// }

// // Get only value
// for (let value of myMap.values()){
//     console.log('value is ', value);
// }

// // converting map to an array
// let myArray = Array.from(myMap);
// console.log('Map to array is ', myArray);

// // Converting map keys to an array
// let myKeysArray = Array.from(myMap.keys());
// console.log('Map to keys array is ', myKeysArray);

// // Converting map values to an array
// let myValuesArray = Array.from(myMap.values());
// console.log('Map to values array is ', myValuesArray);




// [11]
// We have given an array of students id's. Every student have different id but twins have same id . Task is to find whether twins are present in given array or not.
// Return true if twin is present otherwise false.
// let hasTwins = function(arr){
//     const seen = new Set();

//     for (const id of arr){
//         if (seen.has(id)){
//             return true;       // Twin found
//         }
//         seen.add(id);
//     }
//     return false;
// }
// let arr = [1,2,3,1];
// console.log(hasTwins(arr));


// Using traditional for loop
// let hasTwins = function(arr){
//     const seen = new Set();
//     for (let i = 0; i < arr.length; i++){
//         let id = arr[i];
//         if (seen.has(id)){
//             return true;
//         }
//         seen.add(id);
//     }
//     return false;
// }
// let arr = [1,2,3,4,1];
// console.log(hasTwins(arr));


// Using map
// let hasTwins = function(arr){
//     const seen = new Map();

//     for (let i = 0; i < arr.length; i++){
//         let id = arr[i];
//         if (seen.has(id)){
//             return true;
//         }
//         seen.set(id, true);
//     }
//     return false;
// }
// let arr = [1,1,2,3,4];
// console.log(hasTwins(arr));



// [12] Given an array, where you have to find the single element and return it
// let findSingleElement = function(arr){
//     const seen = new Set();
//     for (let i = 0; i < arr.length; i++){
//         let id = arr[i];
//         if (seen.has(id)){
//             seen.delete(id);
//         }else{
//             seen.add(id);
//         }
//     }
//     const uniqueElement = Array.from(seen);
//     if (uniqueElement.length === 1){
//         return uniqueElement[0];
//     }else{
//         return false;
//     }
// }
// let arr = [2,2,3,3,4];
// console.log(findSingleElement(arr));


// let singleElement = function(arr){
//     let seen = new Set();
//     for (let i = 0; i < arr.length; i++){
//         let id = arr[i];
//         if (seen.has(id)){
//             seen.delete(id);
//         }else{
//             seen.add(id);
//         }
//     }
//     if (seen.size === 1){
//         return seen.values().next().value;
//     }else{
//         return false;
//     }
// }
// let arr = [2,2,3,3,5];
// console.log(singleElement(arr));




//[13] Find common number between the two given array
// let findCommonNumber = function(a, b){
//     const mapA = new Map();
//     const commonInterests = [];

//     for (let i = 0; i < a.length; i++){
//         const element = a[i];
//         mapA.set(element, (mapA.get(element) || 0) + 1);
//     }

// }




//[14]  Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// let twoSum = function(arr, target) {
//   let myMap = new Map();
//   for (let i = 0; i < arr.length; i++) {
//     let difference = target - arr[i];

//     if (myMap.has(arr[i])) {
//       return [myMap.get(arr[i]), i];
//     }

//     myMap.set(difference, i);
//   }
// };
// let arr = [2, 7, 11, 15];
// let target = 18;
// console.log(twoSum(arr, target));


// slightly different way
// function twoSum(nums, target) {
//   const numMap = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     const complement = target - nums[i];

//     if (numMap.has(complement)) {
//       return [numMap.get(complement), i];
//     }

//     numMap.set(nums[i], i);
//   }

//   return [];
// }
// let arr = [1,2,3,4,5];
// let target = 9;
// console.log(twoSum(arr, target));
let twoSum = function(arr, target){
  let arrMap = new Map();
  for (let i = 0; i < arr.length; i++){
    let compliment = target - arr[i];
    if (arrMap.has(compliment)){
      return [arrMap.get(complement), i];
    }
    arrMap.set(arr[i], i);
  }

  return [];
}
