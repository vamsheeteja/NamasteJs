// Function Statement and Function Declaration

// calling before creating the function
// a();
// b(); // TypeError: b is not function
// b is treated like a variable and assigned 'undefined'

function a() {
    console.log("a called");
}

// Function Expression

var b = function () {
    console.log("b called");
}
// b();

// Anonymous Function
// Function declared without any name; it doesnot have any identity
// function () {
//     // this is a syntaxError we have to assign it to var
// }

// Anonymous Functions are used when the Functions are used a Values;

var c = function () {
    console.log("c called");
}
// c();

// Named Function Expression
// it uses the anonymous function with the NAME

var name_function = function xyz() {
    console.log("named function");
    console.log(xyz); // NOTE check
}
// name_function();
// corner case
// xyz(); // will get ReferenceError: xyz is not defined.

// NOTE: xyz is not defined in the outer scope (Here Global) 
// BUT declared as variable INSIDE THE FUNCTION 

// Difference between Parameter and Argument


// First Class Functions
// Functions are called as First Class Citizens

// The ability to use Functions as values is known as First Class Functions.

// We can even Pass Functions inside another Functions as an Arguments

var log_funtion = function (param1) {
    console.log(param1);
}

// passing an Anonymous Function 
log_funtion(function () {
    
})

// passing named function

var log_funtion_named = function (param1) {
    console.log(param1);
}

function xyz() {
    
}

log_funtion_named(xyz);

// Returning a function from a function

var log_funtion_return = function (param1) {
    return function () {
        
    }
}

function xyz() {
    
}

console.log(log_funtion_return(xyz));

// let and const rules are sames as that of variable
let c = function () {
    console.log("c called");
}

// Arrow Function
// came is ECMA Script - 6
// let, const and Arrow functions came is ES6