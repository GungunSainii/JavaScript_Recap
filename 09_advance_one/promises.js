const promiseOne = new Promise(function(resolve, reject){ 
    //Do an async task
    // Like -- DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve() //To connect the resolve and .then
    }, 1000)
})

//Promise reduces callback hell
//resolve connection with .then gets the function/ callback automatically receive arguement it returns the result of that 1st function

promiseOne.then(function(){
    console.log("Promise consumed"); //After connecting only it will execute this promise 
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"}) //Passing the arguements in the resolve  
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user); //It prints the parameter of function
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong') //This is the use of reject --> gives error
        }
    }, 1000)
})

 promiseFour
 .then((user) => { //It doesn't store the value in variable 
    console.log(user);
    return user.username //the inner data cannot be retrieved like this it will give error --> Birth to Chainning 
}).then((username) => {
    console.log(username);
}).catch(function(error){ //To handle the error
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected")) //Final say for the conclusion Always executes

//This is how we avoid the callback hell

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

//Promise - related to future function and can be handled by asyn/await or .then().catch() Doesn't necessarily means to have a fixed approach
//Discuss in databaseconnection

//Gives error earlier because value hai nahi and u are trying to print

async function consumePromiseFive(){ //It doesn't handle error gracefully w/o try and catch
    try {
        const response = await promiseFive //Promise is a object so () nope
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users') //fetch object takes URL

//         const data = await response.json() //It also takes time to load so need to add the await keyword
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.

/*
The fetch() --> method takes one mandatory argument, the path to the resource you want to fetch. It returns a Promise that resolves to the Response to that request — as soon as the server responds with headers — even if the server response is an HTTP error status. You can also optionally pass in an init options object as the second argument

Through fetch we can also send data method body just 
fetch('',{add here});


------JS ENGINE WORKING------
Micro task queue -- fetch's call back queue ~ task queue

response = fetch('something)
--1. Data:___ ---> Global memory space 
- datafulfilled
- datarejection

--2. Web browser/node
- Network request
- Either success or reject 
- Similarily stored in respective spaces in Data:__ (Global memory space)

//JAVASCRIPT IS A PROTOTYPE BASED LANGUAGE
Its classes are syntatic sugar. 
Hence it has and has not classes  
 */