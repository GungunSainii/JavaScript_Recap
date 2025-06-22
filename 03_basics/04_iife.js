// Immediately Invoked Function Expressions (IIFE)
// NO pollution from global scope and immediate start of fxn

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();// Using ; to separate the fxns

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

