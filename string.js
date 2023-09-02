//string
// let animal = "dumb man";
// // animal[0];
// console.log(animal[0]);

// //length property in string
// console.log(animal.length);

// //concatenating two strings
// let boat = "chair";
// let warlord = 'Mihawk'
// console.log(warlord + " uses " + boat + " to travel entire oceans and cut any unfriendly battleship in 2 in his path");


//string methods
// let h = "Jubidara vs Jubito";
// let x = h.toUpperCase();      //toUpperCase()
// console.log(h);
// console.log(x);

// let ura = "URI URI JAYE";
// let halla_bol = ura.toLowerCase(); //toLowerCase()
// console.log(ura);
// console.log(halla_bol);

// let userInput = "    I m here  ";
// console.log(userInput.trim());
// console.log(userInput);


//string methods with arguments (indexOf(), slice(), splice(), replace(), repeat(), split(), join())

// let h = "Huga clan";
// console.log(h.indexOf('Hu'));     //indexOf()
// console.log(h.indexOf('clan'));

// let huga = "Hogormo Uchiha";
// let h = huga.slice(3, 8);    //huga.slice(beginIndex[, endIndex]) note:end index is optional
// console.log(h);

// let doga = "druv";
// console.log(doga.replace('d', 'h'));  //replace()
// let x = doga.replace('r', 'i');
// console.log(x);


// const word = "skateboard"; //Don't change this line!
// let x = word.slice(5).replace('o', 'e');
// let facialHair = x;
// console.log(facialHair);


// split() method
// const str = 'I m the strongest man in this entire universe.';
// const x = str.split(' ');
// console.log(x[4]);s

// const char = str.split('');
// console.log(char[5]);

// const strCopy = str.split(' ');
// console.log(strCopy);


//join() method
// const elements =['Fire', 'Air', 'water'];
// console.log(elements.join());
// console.log(elements.join(''));
// console.log(elements.join('-'));


//split(), reverse(), join() for reversing and string
// let x = 'Jubidara';
// let y = x.split('');
// y = y.reverse();
// let reversedString = y.join('');
// console.log(reversedString);


// String template literal
// const x = 'shivam';
// const y = 'Thakur';
// console.log(`My name is ${x} ${y}`);

// let qty = 5;
// let product = 'Rifle';
// let price = 500 ;
// console.log(`I bought ${qty} ${product.toUpperCase()}. Total price is $${qty * price}`);


//Null = Intentional absence of any value
//Undefined = Variables that do not have an assigned vale are undefined
// function printEven(n) {
//   let i = 1;
//   while (i <= n) {
//     if (i % 2 === 0) {
//       console.log(i);
//     }
//     i++;
//   }
// }

// let n = parseInt(prompt("Enter a number:"));
// printEven(n);


//                  SHARPENER
// VALIDATE STRING (time complexity)
//[1] Given A String check whether on reversal it is the same or not.
// Return True if yes otherwise return False.

//using for loop
// function reverse(str){
//     let reversedString = '';
//     for (let i = str.length - 1; i >= 0; i--){
//         reversedString = reversedString + str[i];
//     }
//     if (reversedString === str){
//         return true;
//     }else{
//         return false;
//     }
// }
// let str = 'madam';
// console.log(reverse(str));

// using split(), reverse(), and join() methods
// function reverse(str){
//     let x = str.split('');
//     let y = x.reverse();
//     let z = y.join('');
//     if (z === str){
//         return true;
//     }else{
//         return false;
//     }
// }
// let str = 'ana';
// console.log(reverse(str));

// reversing a number
// function pala(num){
//     let str = num.toString();
//     let reversedString = str.split('').reverse().join('');
//     if (reversedString === str){
//         return true;
//     }else{
//         return false;
//     }

// }
// let x = 456;
// console.log(pala(x));




//[2] Return the maximum number of words that appear in a single sentence.
// function mostWordsFound(sen){
//     let maxWords = 0;
//     for (let i = 0; i < sen.length; i++){
//         const words = sen[i].split(' ');
//         const numWords = words.length;

//         if (numWords > maxWords){
//             maxWords = numWords;
//         }
//     }
//     return maxWords;
// }
// let sen = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"];
// console.log(mostWordsFound(sen));




//[3] You have given a string , You have to add characters at start of string to make it a palindrome .
//    return the minimum number of characters required to add to make it a palindrome.

// function minimum_count(s){
//   let start = 0;
//   let end = s.length - 1;
//   let count = 0;

//   while (start < end){
//     if (s[start] === s[end]){
//       start++;
//       end--;
//     }else{
//       count++;
//       end--;
//     }
//   }
//   return count;
// }
// let s = 'dhokla';
// console.log(minimum_count(s));


//[4] Given a String Extract all numbers from it and store it inside an array. Return the Array Once extraction is completed.
// function extractNumbers(s){
//   s = s.split(/\D+/).filter(Boolean).map(Number);
//   return s;
// }
// let s = "abc334v44d";
// console.log(extractNumbers(s));




//[5] You have given an array. Move all the negative elements at the end of array.

//   This is Stupid way of solving this problem

// function arrange(nums){
//   let left = 0;
//   let right = nums.length - 1;
//   while (left <= right){
//     if (nums[left] >= 0){
//       left++;
//     }else if(nums[right] < 0){
//       right--;
//     }else{
//       [nums[left], nums[right]] = [nums[right], nums[left]];
//       left++;
//       right--;
//     }
//   }
//   return nums;
// }
// let nums = [8, -1, -3, -7, 9, 4];
// console.log(arrange(nums));

// Original way of solving this problem
// function arrange(nums) {
//     // Filter the negative numbers and non-negative numbers into separate arrays
//     const negatives = nums.filter(num => num < 0);
//     const nonNegatives = nums.filter(num => num >= 0);

//     // Concatenate the negative array with the non-negative array
//     return negatives.concat(nonNegatives);
// }
// let nums = [-1, 2, -3, 4, -5, 6];
// console.log(arrange(nums));
let arrange = function(nums){
    const negatives = nums.filter(n => n < 0);
    const non_negatives = nums.filter(n => n >= 0);
    return non_negatives.concat(negatives);
}
console.log(arrange([1,-2,9,-7,99]));


//delete
// let numJewelsInStones = function(jewels, stones){
//     let jewel_set = new Set(jewels);
//     let count = 0;
//     for (let stone of stones){
//         if (jewel_set.has(stone)){
//             count++;
//         }
//     }
//     return count;
// };
// let jewels = 'aA';
// let stones = 'aAAbbbb';
// console.log(numJewelsInStones(jewels, stones));
