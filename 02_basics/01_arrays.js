// array , object , prototype access

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) //insert at start not optimise as it shift every element in array
// myArr.shift() // remove element from start

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3)); 
// //-1 for not found

// const newArr = myArr.join()
//Binds and make it as string

// console.log(myArr);
// console.log( newArr);


// slice: just take a portion & no effect original arr, 
// splice: take a portion include the end range as well & delete it from original arr as well

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);
