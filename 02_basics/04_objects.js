// const tinderUser = new Object()
const tinderUser = {} //Samee

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// obj ke ander obj issue

// const obj3 = Object.assign({}, obj1, obj2, obj4)
// all source obj get copy to target source here {} is target

const obj3 = {...obj1, ...obj2}
//Spread 
// console.log(obj3);

//Database array of objects
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// gives array of keys in obj

// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// See more methods in console prototype

//++++++++++ Destructing +++++++++++++++

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

//Shortform
const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

//Treated as JSON format 
// API first form
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

//API 2nd form
[
    {},
    {},
    {}
]

//Need to study API using tools like jsonformatter