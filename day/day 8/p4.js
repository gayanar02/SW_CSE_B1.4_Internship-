// variables in JS
var x = 10;
var x = 20;
x = 30;
console.log(x)

if(true)
{
    var message = "hello";
}
// var in JS is not a block-scoped
console.log(message)

//**************************************************************************************************************************************
// "let" keyword based variable
let score = "272";
// let score = "100"; //SyntaxError: Identifier 'score' has already been declared( cant create another one)
score ="2702" // re-assignment is valid
console.log(score)

if(true)
{
    let secret = "272411@:)"; // "let" in JS is block-scoped
} //
//console.log(secret) //ReferenceError: secret is not defined

// "const" keyword ( variable which cannot be reassigned after its declaration)
if(true)
{
const pi = 3.14159;
//pi = 27//TypeError: Assignment to constant variable.
}
// "const" in JS is block-scoped
console.log(pi) // ReferenceError: pi is not defined

