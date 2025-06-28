const User = {
    _email: 'h@hc.com',
    _password: "abc",


    get email(){ //So get treat email as prop on which it has to get and overwrite bus 
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}
// Weird syntax
const tea = Object.create(User)
console.log(tea.email);