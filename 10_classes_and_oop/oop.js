
// ------Object Literal-----
const user = { //obj literals -- obj -- colln of prop and methods 
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this); Gives window object in console



//-------Constructor Function------
//Creates instance of object and also new execution context

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this //Object pass on kr diya 
}

const userOne = new User("hitesh", 12, true) //w/o the use of new we don't create a new execution context because of which it overwrites the previous value 
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);

//Mechanism 
//Obj create --> constructor function pass on --> this will add the values in the respective places --> 

//Instance of (operator) --> do they same constructor function
//---Prototypal behaviour---
//Javascript behaviour -- never giving up which means it will seek for values in the above levels until it is NULL.Because of this nature only we see the use of {this} in some and not in arrow function, Inheritance also.
//Prototype never ending will




