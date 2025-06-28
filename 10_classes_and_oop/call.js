function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username) //Importance of .call and (this,) //Now it is technically call .call--> to hold the reference and this --> to print the value 
    this.email = email
    this.password = password
}
//SetUsername(username) doen not work as In call stack after createUser execution context and then we see the Setusername execcution context after printing console.log data it disappers so as its value so need to use .call and this for that 

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);