// Dates

//Jan 1 1970 starts Temporal api global ?

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate); //Object 

// let myCreatedDate = new Date(2023, 0, 23) //Month starts from 0
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14") //Specific format input 
let myCreatedDate = new Date("01-14-2023") //MM/DD/YYYY Ind
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now() //Exact Timestamp

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000)); //To convert into sec

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    //ctrl + space gives methods that we can use
    weekday: "long",
})

