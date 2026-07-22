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
}
console.log(secret)