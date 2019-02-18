
// What is HOISTING
/*
hoisting is when the JavaScript interpreter moves all variables and 
function declarations to the top of the current scope. 
Variables and constants declared with let or const are not hoisted.
it's important to keep in mind that only the actual declarations are hoisted, 
and that assignments are left where they are.

hoisting is done during the interpreter's first run through the code.
*/



//What are the differences between let, const and var?

// VAR
/*
var is feature from ES5.
var is used for declearing the variables we use in programming.
any variable using (var) and declared outside the function scope 
is availabe for use in the whole window (globaly scoped).
*/ 


// LET
/*
let is new and preferred way for variable declaration.
variable that is declared in a block with LET is only available
for use within that block (block scoped).
we can't use a LET variable before declaring it.
can be updated but not re-declared.
*/


// CONST
/*
const variable maintain constant values.
we use uppercase variables names.
while we declare a const it must be initialized at the time of declaration.
can't be re-declared but we can update the properties.

*/



// EXAMPLES

/*
var tester = "hey hi";

function newFunction() {
    var hello = "hello";
}
console.log(hello); // error: hello is not defined
*/



/*
let greeting = "say Hi";
let times = 4;

if (times > 3) {
    let hello = "say Hello instead";
    console.log(hello); //"say Hello instead"
}
console.log(hello) // hello is not defined
*/



/*
const FLOW = [1, 2, 3];

FLOW = [4, 5, 6]; // it won't work

// but we can use .push() method to update the const

*/