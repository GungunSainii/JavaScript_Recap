class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    } //getter setter by default har class mai hote and kiske bhi variable pe laga sakte ho prop named already automatically getter and setter created

    get email(){ //To get the value from class
        return this._email.toUpperCase() //Var name difference it as a private prop
    }
    set email(value){ // To set the value into the class
        this._email = value
    }

    get password(){
        return `${this._password}hitesh` //same var name as password also it shows the value in the function and at back the set store the value and they can have different soo cool!!
    }

    set password(value){ //Max call stack size stack exceeded as mutiple setting of value in password -- Race between setting values
        this._password = value //New var for setting password
    }
}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.email);