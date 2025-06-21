// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


//+++++ Avoid Such Conversions +++++


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0); //false
console.log(null == 0);
console.log(null >= 0); //true

//== and comparison <,>,>=, <= both works differntly 
//comparisons convert null to number, treat as 0

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === 
//strict check
console.log("2" === 2);

// it checks value as well as datatype